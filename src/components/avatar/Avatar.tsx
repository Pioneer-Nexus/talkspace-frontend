import clsx from 'clsx'
import { CSSProperties, FC, PropsWithChildren, ReactNode, useEffect, useRef } from 'react'
import styles from './styles.module.css'
interface Props extends PropsWithChildren {
  icon?: ReactNode
  size?: number
  src?: string | ReactNode
  shape?: 'circle' | 'square'
  style?: CSSProperties
}

export const Avatar: FC<Props> = (props) => {
  const { children, icon, size = 16, src, shape = 'circle', style } = props
  const textRef = useRef<HTMLSpanElement>(null)

  const defaultIconSize = src === undefined ? size / 2 : size
  useEffect(() => {
    if (textRef.current) {
      const scale = size / (textRef.current.offsetWidth || size) - 0.05
      if (scale >= 1) return
      textRef.current.style.transform = `scale(${Math.min(scale, 1)})`
    }
  }, [children, size])
  return (
    <div
      style={{ width: size, height: size, fontSize: defaultIconSize, ...style }}
      className={clsx(styles['avatar'], styles[`shape-${shape}`], !!src && styles['src'])}
    >
      {icon && icon}
      <span className='whitespace-nowrap' ref={textRef}>
        {children}
      </span>
      {src && (typeof src === 'string' ? <img src={src} /> : src)}
    </div>
  )
}
