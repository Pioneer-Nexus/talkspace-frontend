import { Button } from '@/components'
import { FC } from 'react'

export const TestPage: FC = () => {
  return (
    <div className='space-x-3 p-4'>
      <Button type='primary' href='/test/button'>
        Go to Button Test
      </Button>
      <Button type='primary' href='/test/input'>
        Go to Input Test
      </Button>
      <Button type='primary' href='/test/avatar'>
        Go to Avatar Test
      </Button>
    </div>
  )
}
