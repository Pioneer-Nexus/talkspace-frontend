import { UserRoomDto } from '@/graphql/graphql'
import { useGetUserChatRoom } from '@/graphql/queries/useGetUserChatRooms'
import { useChatConversation } from '@/stores'
import { formatRemainingTime } from '@/utils'
import clsx from 'clsx'
import { MomentInput } from 'moment'
import { Avatar } from '../avatar'

export const ChatPenal = () => {
  const { updateChatRoom, roomId } = useChatConversation()

  const handleClickConversation = (roomId: string, users: UserRoomDto[]) => {
    updateChatRoom({ roomId, users })
  }
  const { data } = useGetUserChatRoom({ page: 0, pageSize: 10 })

  return (
    <div className='scrollbar-thin h-screen w-[300px] overflow-auto bg-stone-200'>
      {data &&
        data.data.map((item) => (
          <div
            key={item._id}
            className={clsx('flex p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-stone-400', roomId === item._id && 'bg-stone-300')}
            onClick={() => handleClickConversation(item._id, item.userRooms)}
          >
            <Avatar size={40} shape='square'>
              {item.name.charAt(0)}
            </Avatar>
            <div className='flex flex-grow flex-col justify-between pl-4'>
              <div className='flex justify-between text-sm'>
                <span>{item.name}</span>
                <span className='text-xs text-gray-600'>{formatRemainingTime(item.updatedAt as MomentInput)}</span>
              </div>
              <div className='text-xs text-gray-500'>Last message</div>
            </div>
          </div>
        ))}
    </div>
  )
}
