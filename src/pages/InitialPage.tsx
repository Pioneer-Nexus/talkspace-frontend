import { ChatPenal, DashboardSidebar } from '@/components'
import { HELLO } from '@/graphql/queries'
import { useQuery } from '@apollo/client'
import { FC } from 'react'

export const InitialPage: FC = () => {
  const { data, error } = useQuery(HELLO)
  console.log('data', data)
  console.log('error', error)
  return (
    <div className='flex'>
      <DashboardSidebar />
      <ChatPenal />
    </div>
  )
}
