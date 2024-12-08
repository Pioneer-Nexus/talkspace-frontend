import { useKeyboardShortcut } from '@/hooks'
import { AvatarTestPage, BadgeTestPage, ButtonTestPage, InputTestPage, TestPage } from '@/pages'
import ProfilePage from '@/pages/profile/ProfilePage'
import { useHashedURL } from '@/stores'
import { Outlet, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import { InitialLayout } from '../layouts/InitialLayout'
import { NotFound } from '../pages'
import { InitialPage } from '../pages/InitialPage'
import { LoginPage } from '../pages/login/LoginPage'

const RouteComponent = () => {
  const navigate = useNavigate()
  const testURL = useHashedURL((state) => state.testURL)

  useKeyboardShortcut(['F1'], () => {
    navigate(`/${testURL}`)
  })

  useKeyboardShortcut(['F2'], () => {
    navigate('/')
  })
  useKeyboardShortcut(['F3'], () => {
    navigate('/sign-in')
  })

  return (
    <Routes>
      <Route
        path='/'
        element={
          <InitialLayout>
            <Outlet />
          </InitialLayout>
        }
      >
        <Route element={<InitialPage />} index />
        <Route element={<LoginPage />} path='sign-in' />
        <Route element={<ProfilePage />} path='profile' />

        <Route path={testURL}>
          <Route index element={<TestPage />} />
          <Route path='button' element={<ButtonTestPage />} />
          <Route path='avatar' element={<AvatarTestPage />} />
          <Route path='input' element={<InputTestPage />} />
          <Route path='badge' element={<BadgeTestPage />} />
        </Route>

        <Route element={<NotFound />} path='*' />
      </Route>
    </Routes>
  )
}

export const BaseRoutes = () => {
  return (
    <Router>
      <RouteComponent />
    </Router>
  )
}
