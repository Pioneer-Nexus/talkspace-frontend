import { QueryHookOptions, useQuery } from '@apollo/client'
import { GET_ROOM_MESSAGES, GetRoomMessageResults, GetRoomMessageVariables } from './getRoomMessages'

export const useGetRoomMessages = (options: QueryHookOptions<GetRoomMessageResults, GetRoomMessageVariables>) => {
  return useQuery<GetRoomMessageResults, GetRoomMessageVariables>(GET_ROOM_MESSAGES, { ...options })
}
