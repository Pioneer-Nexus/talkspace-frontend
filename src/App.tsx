import { appConfig } from './configs'
import { ConfigProvider } from './contexts/ConfigProvider'
import { useKeyboardShortcut } from './hooks'
import { Key } from './interfaces'
import { BaseRoutes } from './routes'
import './styles'

function App() {
  document.title = appConfig.title
  useKeyboardShortcut([Key.THREE], () => {
    console.log('show')
  })

  return (
    <ConfigProvider>
      <BaseRoutes />
    </ConfigProvider>
  )
}

export default App
