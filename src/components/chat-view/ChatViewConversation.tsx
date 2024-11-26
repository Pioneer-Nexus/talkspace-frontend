import messagesData from '@/mock-data/messages.json'
import { randomizeTime } from '@/utils'
import { FC } from 'react'
import { ChatViewMessage } from './ChatViewMessage'
import styles from './ChatViewConversation.module.css'

export const ChatViewConversation: FC = () => {
  const x = messagesData
    .map((item) => ({ ...item, timestamp: randomizeTime('0s', '5m') }))
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

  return (
    <div className={styles['wrapper']}>
      {x.map((item) => {
        return (
          <ChatViewMessage me={item.sender === 'user'} time={item.timestamp}>
            {item.message}
          </ChatViewMessage>
        )
      })}
    </div>
  )
}
