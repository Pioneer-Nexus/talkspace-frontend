import { AvatarTestPage, ButtonTestPage, InputTestPage, TestPage } from '@/pages'
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
          <Route element={<InitialPage />} index />
          <Route element={<LoginPage />} path='/sign-in' />

          <Route path='test'>
            <Route index element={<TestPage />} />
            <Route path='button' element={<ButtonTestPage />} />
            <Route path='avatar' element={<AvatarTestPage />} />
            <Route path='input' element={<InputTestPage />} />
          </Route>

          <Route element={<NotFound />} path='*' />
        </Route>
      </Routes>
    </Router>
  )
}
