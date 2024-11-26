import messagesData from '@/mock-data/messages.json'
import { randomizeTime } from '@/utils'
import { FC, useState } from 'react'
import { ChatViewMessage } from './ChatViewMessage'
interface Message {
  id: string
  timestamp: string // or Date if you want to parse it as a Date object
  sender: string
  message: string
  metadata: {
    read: boolean
    type: string // e.g., "text", "image", etc., you can use a union type if there are predefined values
  }
}
export const ChatViewConversation: FC = () => {
  console.log(typeof messagesData)
  const [message, setMessage] = useState<Message[]>(messagesData)

  const x = message
    .map((item) => ({ ...item, timestamp: randomizeTime('0s', '5m') }))
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
  // .filter((item, i) => i < 4)
  console.log(x)
  return (
    <div className='scrollbar-thin flex h-[calc(100vh-75px-56px)] flex-col justify-end overflow-auto p-2'>
      {x.map((item, i, items) => {
        const isAvatar = i === 0 || items[i - 1].sender === item.sender
        return (
          <ChatViewMessage isAvatar={isAvatar} me={item.sender === 'user'} time={item.timestamp} key={item.id}>
            {item.message}
          </ChatViewMessage>
        )
      })}
    </div>
  )
}
