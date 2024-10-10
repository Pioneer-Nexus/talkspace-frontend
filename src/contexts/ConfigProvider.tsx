import { FC, PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

export const ConfigProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}