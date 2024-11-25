import { ChatViewConversation } from './ChatViewConversation'
import { ChatViewHeader } from './ChatViewHeader'
import { ChatViewInput } from './ChatViewInput'

export const ChatView = () => {
  return (
    <div className='flex flex-grow flex-col'>
      <ChatViewHeader />
      <ChatViewConversation />
      <ChatViewInput />
    </div>
  )
}
