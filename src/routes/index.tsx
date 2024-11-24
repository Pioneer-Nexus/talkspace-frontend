import { useKeyboardShortcut } from '@/hooks'
import { Key } from '@/interfaces'
import { AvatarTestPage, ButtonTestPage, InputTestPage, TestPage } from '@/pages'
import { useHashedURL } from '@/stores'
import { Outlet, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import { InitialLayout } from '../layouts/InitialLayout'
import { NotFound } from '../pages'
import { InitialPage } from '../pages/InitialPage'
import { LoginPage } from '../pages/login/LoginPage'
import Profile from '@/pages/profile/Profile'

const RouteComponent = () => {
  const navigate = useNavigate()
  const testURL = useHashedURL((state) => state.testURL)
  useKeyboardShortcut([Key.THREE, Key.FOUR], () => {
    navigate(`/${testURL}`)
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
        <Route element={<LoginPage />} path='/sign-in' />
        <Route element={<Profile />} path='/profile'/>
        <Route path={testURL}>
          <Route index element={<TestPage />} />
          <Route path='button' element={<ButtonTestPage />} />
          <Route path='avatar' element={<AvatarTestPage />} />
          <Route path='input' element={<InputTestPage />} />
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
