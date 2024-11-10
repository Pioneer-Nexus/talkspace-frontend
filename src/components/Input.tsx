import { FC } from 'react'
import styles from './Input.module.css'
import PasswordImage from '@/assets/images/svgs/passowrd_icon.svg';
interface InputProps {
  type: string
  value: string
  placeholder: string
  handleValidation: () => void
  onChange: () => void,
  className: string
}

export const Input: FC<InputProps> = (props) => {
  const {
    type = 'text',
    value = "",
    placeholder = '',
    handleValidation = () => {},
    onChange = () => {},
    className = ""
  } = props;


  return (
    <div className={`${styles['input__wrapper']} ${className}`}>
      <PasswordImage className='h-3.5 w-auto'/>
      <input className={`${styles["input"]}`} onChange={onChange}  type={type}/>
      <div className={`${styles['placeholder']}`}>{placeholder}</div>
    </div>
  )
}