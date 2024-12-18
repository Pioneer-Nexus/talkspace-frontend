import { Button, Input } from '@/components'
import { useLogin } from '@/graphql/mutations/useLogin'
import { useLocalStorage } from '@/hooks'
import { LOCAL_STORAGE } from '@/utils'
import { LoginInput, validateLogin } from '@/validations'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const defaultFrom = { password: '', username: '' }

export const LoginForm = () => {
  const { loginWithCredential, data } = useLogin()
  const navigate = useNavigate()
  const [accessToken, setAccessToken] = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN)

  const { register, handleSubmit } = useForm<LoginInput>({ defaultValues: { username: 'hy2', password: '1' } })

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
    if (!data?.loginWithCredential?.accessToken) return
    setAccessToken(data?.loginWithCredential?.accessToken)
    if (!accessToken) return
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }, [data, accessToken])

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
