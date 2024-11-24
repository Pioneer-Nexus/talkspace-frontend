import chattedUsers from '@/mock-data/chatted-users.json'
import { Avatar } from '../avatar'
export const ChatPenal = () => {
  return (
    <div className='h-screen w-[340px] overflow-auto bg-stone-200 p-2'>
      {chattedUsers.map((item) => (
        <div className='flex p-2'>
          <Avatar size={50} shape='square'>
            {item.name.charAt(0)}
          </Avatar>
          <div className='px-4 py-1'>
            <div className='top text-sm'>{item.name}</div>
            <div className='bottom'>{item.message}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
