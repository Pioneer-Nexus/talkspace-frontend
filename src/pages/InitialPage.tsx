import SearchIcon from '@/assets/images/svgs/search.svg'
import { Button } from '@/components/button'
import { FC } from 'react'
export const InitialPage: FC = () => {
  return (
    <>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Type</div>
        <Button>Text</Button>
        <Button type='primary'>Text</Button>
        <Button type='text'>Text</Button>
        <Button type='link'>Text</Button>
      </div>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Having Icon</div>
        <Button>Text</Button>
        <Button icon={<SearchIcon style={{ width: 16, height: 16 }} />}>Text</Button>
      </div>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Icon Position</div>
        <Button icon={<SearchIcon style={{ width: 16, height: 16 }} />}>Text</Button>
        <Button iconPosition='end' icon={<SearchIcon style={{ width: 16, height: 16 }} />}>
          Text
        </Button>
      </div>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Size</div>
        <Button size='large'>Text</Button>
        <Button>Text</Button>
        <Button size='small'>Text</Button>
      </div>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Disabled</div>
        <Button disabled>Text</Button>
      </div>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Loading</div>
        <Button loading>Text</Button>
      </div>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Shape</div>
        <Button icon={<SearchIcon style={{ width: 16, height: 16 }} />} />
        <Button icon={<SearchIcon style={{ width: 16, height: 16 }} />} shape='round' />
        <Button icon={<SearchIcon style={{ width: 16, height: 16 }} />} shape='circle' />
      </div>
    </>
  )
}
