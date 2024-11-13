import SearchIcon from '@/assets/images/svgs/search.svg'
import { Button } from '@/components/button'

export const ButtonTestPage = () => {
  return (
    <>
      <div className={'inline-flex w-full flex-wrap items-end gap-2 border-b-[1px] border-zinc-400 p-2'}>
        <div className={'w-full'}>Type</div>
        <Button>Text</Button>
        <Button type='primary'>Text</Button>
        <Button type='text'>Text</Button>
        <Button type='link'>Text</Button>
      </div>
      <div className={'inline-flex w-full flex-wrap items-end gap-2 border-b-[1px] border-zinc-400 p-2'}>
        <div className={'w-full'}>Having Icon, Icon Position</div>
        <Button>Text</Button>
        <Button icon={<SearchIcon />}>Text</Button>
        <Button iconPosition='end' icon={<SearchIcon />}>
          Text
        </Button>
      </div>
      <div className={'inline-flex w-full flex-wrap items-end gap-2 border-b-[1px] border-zinc-400 p-2'}>
        <div className={'w-full'}>Size</div>
        <Button size='large'>Text</Button>
        <Button>Text</Button>
        <Button size='small'>Text</Button>
      </div>
      <div className={'inline-flex w-full flex-wrap items-end gap-2 border-b-[1px] border-zinc-400 p-2'}>
        <div className={'w-full'}>Disabled</div>
        <Button disabled>Text</Button>
      </div>
      <div className={'inline-flex w-full flex-wrap items-end gap-2 border-b-[1px] border-zinc-400 p-2'}>
        <div className={'w-full'}>Loading</div>
        <Button>Text</Button>
        <Button loading>Text</Button>
        {'|'}
        <Button icon={<SearchIcon />}>Text</Button>
        <Button icon={<SearchIcon />} loading>
          Text
        </Button>
        {'|'}
        <Button icon={<SearchIcon />} />
        <Button icon={<SearchIcon />} loading />
        {'|'}
        <Button type='primary'>Text</Button>
        <Button type='primary' loading>
          Text
        </Button>
      </div>
      <div className={'inline-flex w-full flex-wrap items-end gap-2 border-b-[1px] border-zinc-400 p-2'}>
        <div className={'w-full'}>Shape</div>
        <Button icon={<SearchIcon />} />
        <Button icon={<SearchIcon />} shape='round' />
        <Button icon={<SearchIcon />} shape='circle' />

        <Button size='small' icon={<SearchIcon />} />
        <Button size='small' icon={<SearchIcon />} shape='round' />
        <Button size='small' icon={<SearchIcon />} shape='circle' />

        <Button size='large' icon={<SearchIcon />} />
        <Button size='large' icon={<SearchIcon />} shape='round' />
        <Button size='large' icon={<SearchIcon />} shape='circle' />
      </div>
      <div className={'inline-flex w-full flex-wrap items-end gap-2 border-b-[1px] border-zinc-400 p-2'}>
        <div className={'w-full'}>Link</div>
        <Button href='https://www.google.com/'>Google</Button>
        <Button href='/sign-in'>Sign in</Button>
      </div>
      <div className={'inline-flex w-full flex-wrap items-end gap-2 border-b-[1px] border-zinc-400 p-2'}>
        <div className={'w-full'}>Link</div>
        <Button block type='primary'>
          Text
        </Button>
        <Button block>Text</Button>
      </div>
    </>
  )
}
