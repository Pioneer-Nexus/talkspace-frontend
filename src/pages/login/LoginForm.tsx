import { Button, Input } from '@/components'
import { useUserLogin } from '@/graphql/mutations/useUserLogin'
import { AuthService } from '@/services'
import { LoginInput, validateLogin } from '@/validations'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const defaultFrom = { password: '', username: '' }

export const LoginForm = () => {
  const { loginWithCredential, data, error } = useUserLogin<LoginInput>()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<LoginInput>()

  const [errorMessage, setErrorMessage] = useState<LoginInput>(defaultFrom)

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    const errors = validateLogin(data)
    if (errors) {
      setErrorMessage(errors)
    } else {
      loginWithCredential(data)
    }
  }
  useEffect(() => {
    if (data?.accessToken) {
      const result = AuthService.instance.login(data.accessToken, data.user)
      if ('success' in result && result.success) {
        navigate(result.redirectTo)
      }
    }
  }, [data?.accessToken, navigate])

  useEffect(() => {
    if (error) setErrorMessage({ ...defaultFrom, password: 'Invalid username or password' })
  }, [error])

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
