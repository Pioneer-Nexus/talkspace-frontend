import { Button, Input } from '@/components'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormInput {
  username: string
  password: string
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInput>({ defaultValues: { username: 'noah', password: 'test_password' } })

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  return (
    <div className='space-y-5'>
      <Input title='Username' {...register('username')} />
      <Input title='Password' {...register('password')} />
      <Button block type='primary' onClick={handleSubmit(onSubmit)}>
        Sign in
      </Button>
    </div>
  )
}
