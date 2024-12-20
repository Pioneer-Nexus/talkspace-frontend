import { appConfig } from '@/configs'

export const LOCAL_STORAGE = {
  THEME: 'theme',
  ACCESS_TOKEN: 'access_token',
}
export const APP_TITLE = {
  TEST_PAGE: {
    1: appConfig.title + ' | Input Test',
    2: appConfig.title + ' | Button Test',
    3: appConfig.title + ' | Avatar Test',
  },
}

export const ERROR_CODE = {
  LOGIN_FAIL: 'LOGIN_FAIL',
  REGISTER_FAIL: 'REGISTER_FAIL',
  LOGOUT_FAIL: 'lOGOUT_FAIL',
}
