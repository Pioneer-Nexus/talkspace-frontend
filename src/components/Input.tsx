import PasswordImage from '@/assets/images/svgs/passowrd_icon.svg'
import { ChangeEvent, FC } from 'react'
import styles from './Input.module.css'

type InputType = 'text' | 'number' | 'email' | "password";
type Status = "default" | "error" | "warning" | "success"
type Size = "default" | "large" | "small"
interface InputProps {
  type?: InputType
  placeholder?: string
  errorMessage?: string
  status?: Status
  value?: string,
  size?: Size,
  style?:  object,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  onFocus?: () => void
}

export const Input: FC<InputProps> = (props) => {
  const {
    type = "text",
    placeholder = 'text',
    errorMessage = '',
    status = "default",
    value,
    style,
    size = "default",
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
  } = props

  return (
    <>
      <div style={style} className={`${styles['input__wrapper']} ${styles[size]} ${status ? styles[status] : ''}`}>
        <PasswordImage className='h-3.5 w-auto' />
        <input
          className={styles['input']}
          onChange={onChange}
          value={value}
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        />
        {/* <div className={styles['placeholder']}>{placeholder}</div> */}
      </div>
      <p className={styles['error-msg']}>{errorMessage ? errorMessage : ''}</p>
    </>
  )
}
