import chattedUsers from '@/mock-data/chatted-users.json'
import { Avatar } from '../avatar'
export const ChatPenal = () => {
  return (
    <div className='w-[500px] bg-stone-200 p-4'>
      {chattedUsers.map((item) => (
        <div>
          <Avatar>{item.name.charAt(0)}</Avatar>
        </div>
      ))}
    </div>
  )
}
