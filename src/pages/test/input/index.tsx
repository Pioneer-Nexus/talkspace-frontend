import { Input } from '@/components'
import PasswordImage from '@/assets/images/svgs/passowrd_icon.svg'

import styles from './input.module.css'

const InputTest = () => {
  return (
    <>
      <div className={`${styles['wrapper']}`}>
        <h4>Default</h4>
        <div>
          <Input
            style={{
              width: '20%',
            }}
            placeholder={'Text'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Disabled</h4>
        <div>
          <Input
            style={{
              width: '20%',
            }}
            disabled={true}
            placeholder={'Disabled'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Icon</h4>
        <div>
          <Input
            icon={<PasswordImage className='h-3.5 w-auto' />}
            style={{
              width: '400px',
            }}
            placeholder={'Text'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Size</h4>
        <div>
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Large Size'}
            size='large'
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Default Size'}
            size='default'
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Small Size'}
            size='small'
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Password</h4>
        <div>
          <Input
            style={{
              width: '400px',
            }}
            value='password'
            type='password'
            placeholder={'Password'}
          />
        </div>
      </div>
      <div className={`${styles['wrapper']}`}>
        <h4>Status</h4>
        <div>
          <Input
            style={{
              width: '400px',
            }}
            status='warning'
            placeholder={'Warning'}
          />
          <Input
            style={{
              width: '400px',
            }}
            status='error'
            placeholder={'Error'}
          />
        </div>
      </div>
    </>
  )
}

export default InputTest
