import { ChatPenal, DashboardSidebar } from '@/components'
import { FC } from 'react'
export const InitialPage: FC = () => {
  return (
    <div className='flex'>
      <DashboardSidebar />
      <ChatPenal />
    </div>
  )
}
