import { useKeyboardShortcut } from '@/hooks'
import { AvatarTestPage, BadgeTestPage, ButtonTestPage, InputTestPage, TestPage } from '@/pages'
import ProfilePage from '@/pages/profile/ProfilePage'
import { useHashedURL } from '@/stores'
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import { InitialLayout } from '../layouts/InitialLayout'
import { NotFound } from '../pages'
import { InitialPage } from '../pages/InitialPage'
import { LoginPage } from '../pages/login/LoginPage'
import { Authenticated } from './Authenticated'

const RouteComponent = () => {
  const navigate = useNavigate()
  const testURL = useHashedURL((state) => state.testURL)

  useKeyboardShortcut(['z', 1], () => {
    navigate(`/${testURL}`)
  })

  useKeyboardShortcut(['z', 2], () => {
    navigate('/')
  })
  useKeyboardShortcut(['z', 3], () => {
    navigate('/sign-in')
  })
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Authenticated type='token' fallback={<Navigate to='/sign-in' />}>
            <InitialLayout>
              <Outlet />
            </InitialLayout>
          </Authenticated>
        }
      >
        <Route element={<InitialPage />} index />
        <Route element={<ProfilePage />} path='profile' />

        <Route path={testURL}>
          <Route index element={<TestPage />} />
          <Route path='button' element={<ButtonTestPage />} />
          <Route path='avatar' element={<AvatarTestPage />} />
          <Route path='input' element={<InputTestPage />} />
          <Route path='badge' element={<BadgeTestPage />} />
        </Route>
      </Route>
      <Route
        element={
          <Authenticated type='public' fallback={<Navigate to='/' />}>
            <LoginPage />
          </Authenticated>
        }
        path='/sign-in'
      />
      <Route element={<NotFound />} path='*' />
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
