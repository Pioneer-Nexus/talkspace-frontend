import { Button } from '@/components'
import { useHashedURL } from '@/stores'
import { FC } from 'react'

export const TestPage: FC = () => {
  const testURL = useHashedURL((state) => state.testURL)

  return (
    <div className='space-x-3 p-4'>
      <Button type='primary' href={`/${testURL}/button`}>
        Go to Button Test
      </Button>
      <Button type='primary' href={`/${testURL}/input`}>
        Go to Input Test
      </Button>
      <Button type='primary' href={`/${testURL}/avatar`}>
        Go to Avatar Test
      </Button>
      <Button type='primary' href={`/${testURL}/badge`}>
        Go to Badge Test
      </Button>
    </div>
  )
}
