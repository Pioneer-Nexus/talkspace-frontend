import { useLocalStorage } from '@/hooks'
import { LOCAL_STORAGE } from '@/utils'
import { FC, PropsWithChildren, ReactNode } from 'react'

interface Props extends PropsWithChildren {
  type: 'token' | 'public'
  fallback: ReactNode
}

export const Authenticated: FC<Props> = (props) => {
  const { children, type, fallback } = props

  const [accessToken] = useLocalStorage(LOCAL_STORAGE.ACCESS_TOKEN)

  console.log('token', accessToken)

  if (accessToken && type === 'token') return <>{children}</>
  if (!accessToken && type === 'token') return <>{fallback}</>

  if (accessToken && type === 'public') return <>{fallback}</>
  if (!accessToken && type === 'public') return <>{children}</>
}
