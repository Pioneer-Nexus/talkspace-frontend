import { PropsWithChildren, ReactNode } from 'react'
import { Button } from '../button'
import CloseIcon from '@/assets/images/svgs/close.svg'

interface Props extends PropsWithChildren {
  title: string
  children: ReactNode
}
export const Modal = (props: Props) => {
  const { title } = props
  return (
    <div className={'fixed h-[100%] w-[100%] rounded-xl border border-custom-1 bg-slate-400/50'}>
      <div
        className={
          'absolute left-1/2 top-1/2 min-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-xl border border-custom-1 bg-white p-5 backdrop-blur-lg'
        }
      >
        <div className={'align-center flex justify-between'}>
          <p className='text-lg font-medium leading-[2]'>{title}</p>
          <Button type='text' icon={<CloseIcon fontSize={20} fill='' />} size='small'></Button>
        </div>
        <div className={'align-center mt-[10px] flex gap-[10px]'}>
          <Button type='primary' className='min-h-[30px] min-w-[90px]'>
            OK
          </Button>
          <Button type='text' className='min-h-[30px] min-w-[90px] text-white' style={{ background: '#dd0000' }}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
