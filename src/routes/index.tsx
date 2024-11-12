import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { InitialLayout } from '../layouts/InitialLayout'
import { NotFound } from '../pages'
import { InitialPage } from '../pages/InitialPage'
import { LoginPage } from '../pages/LoginPage'
import { Input } from '@/components'

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
          <Route element={<NotFound />} path='*' />
          <Route element={<Input
            handleValidation={() => {}}
            onChange={() => {}}
            placeholder='Name'
            type='text'
            style={{
              width: "50%"
            }}
          />} path='/input' />
        </Route>
      </Routes>
    </Router>
  )
}
