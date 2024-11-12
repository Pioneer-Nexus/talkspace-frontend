import { FC } from 'react'
import styles from './Input.module.css'
import PasswordImage from '@/assets/images/svgs/passowrd_icon.svg';
interface InputProps {
  type?: string
  state?: string
  placeholder?: string
  handleValidation?: () => void
  onChange?: () => void,
  className?: string,
  onBlur?: () => {},
  onFocus?: () => {},
  errorMessage?: string,
  isError?: boolean,
  style?: object
}

export const Input: FC<InputProps> = (props) => {
  const {
    type = 'text',
    state = "",
    placeholder = '',
    onChange = () => {},
    className = "",
    onBlur = () => {},
    onFocus = () => {},
    errorMessage = "* đá",
    isError = false,
    style = {}
  } = props;

  return (
    <>
      <div style={style} className={`${styles['input__wrapper']} ${className} ${isError ? styles["error"] : ""}`}>
        <PasswordImage className='h-3.5 w-auto'/>
        <input className={`${styles["input"]}`} onChange={onChange} value={state}  type={type} onBlur={onBlur} onFocus={onFocus}/>
        <div className={`${styles['placeholder']}`}>{placeholder}</div>
      </div>
      <p className={`${styles["error-msg"]}`}>{errorMessage ? errorMessage : ""}</p>
    </>
  )
}