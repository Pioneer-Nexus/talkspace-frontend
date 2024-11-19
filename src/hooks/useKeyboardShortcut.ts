import { Key } from '@/interfaces/keys'
import { useEffect } from 'react'

export const useKeyboardShortcut = (keys: Key[], callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const keyCombinationMatched = keys.every((key: Key) => event.key.toLowerCase() === (key as unknown as string))
      console.log(keyCombinationMatched)
      if (keyCombinationMatched) {
        callback(event)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [keys, callback])
}
