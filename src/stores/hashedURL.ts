import stringHash from 'string-hash'
import { create } from 'zustand'

type State = {
  testURL: string
}

type Action = {
  updateTestURL: (testURL: State['testURL']) => void
}

export const useHashedURL = create<State & Action>((set) => ({
  testURL: stringHash(Date.now().toString() + 'test').toString(36) + stringHash(Date.now().toString()).toString(36),
  updateTestURL: (testURL) => set(() => ({ testURL: testURL })),
}))
