import { AvatarTestPage } from '@/pages/test/avatar'
import { ButtonTestPage } from '@/pages/test/button'
import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { InitialLayout } from '../layouts/InitialLayout'
import { NotFound } from '../pages'
import { InitialPage } from '../pages/InitialPage'
import { LoginPage } from '../pages/login/LoginPage'

export const BaseRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <InitialLayout>
              <Outlet />
            </InitialLayout>
          }
        >
          <Route element={<InitialPage />} path='/' />
          <Route element={<LoginPage />} path='/sign-in' />
          <Route path='test'>
            <Route path='button' element={<ButtonTestPage />} />
            <Route path='avatar' element={<AvatarTestPage />} />
          </Route>
          <Route element={<NotFound />} path='*' />
        </Route>
      </Routes>
    </Router>
  )
}
