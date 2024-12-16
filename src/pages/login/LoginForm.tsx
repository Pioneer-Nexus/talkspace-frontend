import { Button, Input } from '@/components'
import { validateLogin } from '@/validations'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormInput {
  username: string
  password: string
}

const defaultFrom = { password: '', username: '' }

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormInput>()

  const [errorMessage, setErrorMessage] = useState<FormInput>(defaultFrom)

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const errors = validateLogin(data)
    if (errors) {
      setErrorMessage(errors)
    }
  }

  return (
    <div className='space-y-5'>
      <Input title='Username' {...register('username')} message={errorMessage.username} onFocus={() => setErrorMessage(defaultFrom)} />
      <Input title='Password' {...register('password')} message={errorMessage.password} onFocus={() => setErrorMessage(defaultFrom)} />
      <Button block type='primary' onClick={handleSubmit(onSubmit)}>
        Sign in
      </Button>
    </div>
  )
}
