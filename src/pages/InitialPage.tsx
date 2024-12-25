import { ChatPenal, DashboardSidebar, Modal } from '@/components'
import { ChatView } from '@/components/chat-view'
import { FC } from 'react'

export const InitialPage: FC = () => {
  return (
    <div className='flex'>
      <DashboardSidebar />
      <ChatPenal />
      <ChatView />
      <Modal 
        title='Notification'
      >
        <p>Abc</p>
      </Modal>
    </div>
  )
}
