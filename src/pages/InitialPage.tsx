import RegisterImage from '@/assets/images/svgs/register.svg'
import { Button } from '@/components/button'
import { ButtonIconPosition, ButtonSize, ButtonType } from '@/interfaces/components'
import { FC } from 'react'
export const InitialPage: FC = () => {
  return (
    <>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Type</div>
        <Button>Text</Button>
        <Button type={ButtonType.PRIMARY}>Text</Button>
        <Button type={ButtonType.TEXT}>Text</Button>
        <Button type={ButtonType.LINK}>Text</Button>
      </div>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Having Icon</div>
        <Button>Text</Button>
        <Button icon={<RegisterImage style={{ width: 20 }} />}>Text</Button>
        <Button icon={<RegisterImage style={{ width: 20 }} />} />
        <Button iconPosition={ButtonIconPosition.END} icon={<RegisterImage style={{ width: 20 }} />}>
          Text
        </Button>
      </div>
      <div className={'flex flex-wrap items-end gap-4 p-4'}>
        <div className={'w-full'}>Size</div>
        <Button size={ButtonSize.LARGE}>Text</Button>
        <Button>Text</Button>
        <Button size={ButtonSize.SMALL}>Text</Button>
      </div>
    </>
  )
}
