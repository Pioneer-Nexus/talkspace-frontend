import { Key } from '@/interfaces/keys'
import { useEffect, useState } from 'react'

export const useKeyboardShortcut = (keys: Key[], callback: (event: KeyboardEvent) => void) => {
  const [keysPressed, setKeysPressed] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      setKeysPressed((prevKeys) => new Set(prevKeys).add(key))
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()

      // Check if the keys match the required combination
      const allKeysMatched = keys.every((requiredKey) => keysPressed.has((requiredKey as unknown as string).toLowerCase()))

      // Revoke callback
      if (allKeysMatched) callback(event)

      // Update state to remove the released key
      setKeysPressed((prevKeys) => {
        const updatedKeys = new Set(prevKeys)
        updatedKeys.delete(key)
        return updatedKeys
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [keys, callback, keysPressed])
}
