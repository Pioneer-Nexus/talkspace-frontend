import PasswordImage from '@/assets/images/svgs/passowrd_icon.svg'
import { ChangeEvent, FC } from 'react'
import styles from './Input.module.css'

type InputType = 'text' | 'number' | 'email'
interface InputProps {
  type: InputType
  placeholder?: string
  errorMessage?: string
  isError?: boolean
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  onFocus?: () => void
}

export const Input: FC<InputProps> = (props) => {
  const {
    type,
    placeholder = '',
    errorMessage = '* đá',
    isError = false,
    value,
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
  } = props

  return (
    <>
      <div className={`${styles['input__wrapper']} ${isError ? styles['error'] : ''}`}>
        <PasswordImage className='h-3.5 w-auto' />
        <input
          className={styles['input']}
          onChange={onChange}
          value={value}
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <div className={styles['placeholder']}>{placeholder}</div>
      </div>
      <p className={styles['error-msg']}>{errorMessage ? errorMessage : ''}</p>
    </>
  )
}
