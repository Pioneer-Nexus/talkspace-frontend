import moment from 'moment'

export const getRemainingTime = (time: moment.MomentInput) => {
  const now = moment()
  const targetTime = moment(time)
  const diffInMinutes = now.diff(targetTime, 'minutes')
  const diffInHours = now.diff(targetTime, 'hours')
  const diffInDays = now.diff(targetTime, 'days')

  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`
  } else if (diffInHours < 24) {
    return `${diffInHours}h`
  } else {
    return `${diffInDays}d`
  }
}

export const randomizeTime = (start: string, end: string): string => {
  const parseTime = (timeStr: string): number => {
    const unit = timeStr.slice(-1) // Get the last character (m, h, or d)
    const value = parseInt(timeStr.slice(0, -1)) // Get the numeric value
    let minutes = 0
    if (unit === 'm') {
      minutes = value // If it's minutes
    } else if (unit === 'h') {
      minutes = value * 60 // Convert hours to minutes
    } else if (unit === 'd') {
      minutes = value * 24 * 60 // Convert days to minutes
    }
    return minutes
  }

  const startInMinutes = parseTime(start)
  const endInMinutes = parseTime(end)

  // Generate a random number of minutes within the given range
  const randomMinutes = Math.floor(Math.random() * (endInMinutes - startInMinutes + 1)) + startInMinutes
  // Get the current time
  const originalTime = new Date().getTime()
  // Calculate the randomized time
  const randomizedTime = new Date(originalTime - randomMinutes * 60000)
  return randomizedTime.toISOString()
}
export const validatePhoneNumber = (phoneNumber: string) => {
  const pattern = /^\d{10,11}$/
  const isPhone = pattern.test(phoneNumber)
  if (isPhone) return true
  return false
}
