import { create } from 'zustand'

export interface Message {
  id: string
  timestamp: string // or Date if you want to parse it as a Date object
  sender: string
  message: string
  room_id: string
  metadata: {
    read: boolean
    type: string // e.g., "text", "image", etc., you can use a union type if there are predefined values
  }
}

type State = {
  messages: Message[]
}

type Action = {
  updateChatConversation: (messages: State['messages']) => void
}

export const useChatConversation = create<State & Action>((set) => ({
  messages: [],
  updateChatConversation: (messages) => set(() => ({ messages: messages })),
}))
