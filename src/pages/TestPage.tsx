import { Input } from '@/components'
import { useState } from 'react'

export const TestPage = () => {
  const [value, setValue] = useState<string>('')
  console.log(value)
  return (
    <>
      <Input onChange={(e) => setValue(e.target.value)} placeholder='Name' type='text' value={value} />
    </>
  )
}
