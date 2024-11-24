import { Key } from '@/interfaces/keys'
import { useEffect, useRef } from 'react'

export const useKeyboardShortcut = (keys: Key[], callback: () => void) => {
  const pressedKeys = useRef<Set<Key>>(new Set())

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key
      const typedKey = /\d/.test(key) ? Number(key) : key
      pressedKeys.current.add(typedKey as Key)
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      const allKeysPressed = keys.every((key) => pressedKeys.current.has(key))
      if (allKeysPressed) callback()

      const key = event.key
      const typedKey = /\d/.test(key) ? Number(key) : key
      console.log(typedKey)
      pressedKeys.current.delete(typedKey as Key)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [keys, callback, pressedKeys])

  return pressedKeys
}
