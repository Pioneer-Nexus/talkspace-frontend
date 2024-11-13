import { Input } from '@/components'
import React from 'react'
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
        <h4>Icon</h4>
        <div>
        <Input
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
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Default Size'}
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Small Size'}
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
            placeholder={'Warning'}
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Error'}
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Warning Icon'}
          />
          <Input
            style={{
              width: '400px',
            }}
            placeholder={'Error Icon'}
          />
        </div>
      </div>
    </>
  )
}

export default InputTest
