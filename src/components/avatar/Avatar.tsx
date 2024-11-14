import clsx from 'clsx'
import { FC, PropsWithChildren, ReactNode, useEffect, useRef } from 'react'
import styles from './styles.module.css'
interface AvatarProps extends PropsWithChildren {
  icon?: ReactNode
  size?: number
  src?: string
  shape?: 'circle' | 'square'
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { children, icon, size = 16, src, shape = 'circle' } = props
  const textRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (textRef.current) {
      const scale = size / (textRef.current.offsetWidth || size) - 0.1
      textRef.current.style.transform = `scale(${Math.min(scale, 1)})`
    }
  }, [children, size])
  return (
    <div style={{ width: size, height: size, fontSize: size / 2 }} className={clsx(styles['avatar'], styles[`shape-${shape}`])}>
      {icon && icon}
      <span ref={textRef}>{children}</span>
      {src && <img src={src} />}
    </div>
  )
}
