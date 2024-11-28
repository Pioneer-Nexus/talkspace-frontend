import chattedUsers from '@/mock-data/conversation.json'
import { formatRemainingTime } from '@/utils'
import { Avatar } from '../avatar'
export const ChatPenal = () => {
  return (
    <div className='scrollbar-thin h-screen w-[300px] overflow-auto bg-stone-200'>
      {chattedUsers.map((item) => (
        <div className='flex p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-stone-300' key={item.id}>
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
