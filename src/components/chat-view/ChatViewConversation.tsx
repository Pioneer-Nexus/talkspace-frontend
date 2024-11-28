import { useChatConversation } from '@/stores/chatConversation'
import { FC } from 'react'
import { ChatViewMessage } from './ChatViewMessage'

export const ChatViewConversation: FC = () => {
  const message = useChatConversation((state) => state.messages)

  const x = message
  // .map((item) => ({ ...item, timestamp: randomizeTime('0s', '5m') }))
  // .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  // .filter((item, i) => i < 4)
  return (
    <div className='scrollbar-thin flex h-[calc(100vh-75px-56px)] flex-col-reverse overflow-auto p-2'>
      {x.map((item, i, items) => {
        const isAvatar = i === items.length - 1 || items[i + 1].sender !== item.sender
        return (
          <ChatViewMessage isAvatar={isAvatar} me={item.sender === 'user'} time={item.timestamp} key={item.id}>
            {item.message}
          </ChatViewMessage>
        )
      })}
    </div>
  )
}
