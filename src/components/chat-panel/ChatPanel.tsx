import conversationData from '@/mock-data/conversation.json'
import { useChatConversation } from '@/stores'
import { formatRemainingTime } from '@/utils'
import clsx from 'clsx'
import { useEffect } from 'react'
import { Avatar } from '../avatar'

export const ChatPenal = () => {
  const { updateChatConversations, roomId } = useChatConversation()

  const handleClickConversation = (roomId: string) => {
    updateChatConversations(roomId)
  }

  useEffect(() => {
    updateChatConversations(conversationData[0].id)
  }, [])

  return (
    <div className='scrollbar-thin h-screen w-[300px] overflow-auto bg-stone-200'>
      {conversationData.map((item) => (
        <div
          className={clsx('flex p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-stone-400', roomId === item.id && 'bg-stone-300')}
          key={item.id}
          onClick={() => handleClickConversation(item.id)}
        >
          <Avatar size={40} shape='square'>
            {item.title.charAt(0)}
          </Avatar>
          <div className='flex flex-grow flex-col justify-between pl-4'>
            <div className='flex justify-between text-sm'>
              <span>{item.title}</span>
              <span className='text-xs text-gray-600'>{formatRemainingTime(item.lastTime)}</span>
            </div>
            <div className='text-xs text-gray-500'>{item.message}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
