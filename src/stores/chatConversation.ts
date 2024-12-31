import { MessageDto, UserDto, UserRoomDto } from '@/graphql/graphql'
import { create } from 'zustand'

interface Participant {
  user_id: string
  name: string
  avatarLink?: string
}

type State = {
  roomId: string
  participants: Participant[]
  messages: MessageDto[]
  users: UserDto[]
}

type ChatRoomParams = {
  roomId: string
  users: UserRoomDto[]
}

type Action = {
  updateChatRoom: (input: ChatRoomParams) => void
  setMessage: (input: MessageDto[]) => void
  updateMessage: (input: MessageDto) => void
}

export const useChatConversation = create<State & Action>((set) => ({
  roomId: '',
  users: [],
  messages: [],
  participants: [],
  updateChatRoom: ({ roomId, users }) => {
    set((state) => ({ ...state, roomId, users: users.map((user) => user.user) }))
  },
  setMessage: (data) => {
    set((state) => ({ ...state, messages: [...data] }))
  },
  updateMessage: (data) => {
    set((state) => ({ ...state, messages: [data, ...state.messages] }))
  },
}))
