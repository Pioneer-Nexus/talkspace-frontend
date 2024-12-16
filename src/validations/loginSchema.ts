import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }).min(5, { message: 'Too short' }).max(20, { message: 'Too long' }),
  password: z.string().min(1, { message: 'Password is required' }).min(5, { message: 'Too short' }).max(20, { message: 'Too long' }),
})

export const validateLogin = <T>(data: T) => {
  const result = loginSchema.safeParse(data)

  if (!result.success) {
    const formattedError = result.error.format()
    return {
      username: formattedError.username?._errors[0] || '',
      password: formattedError.password?._errors[0] || '',
    }
  }
  return null // No errors
}
