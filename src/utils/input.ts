const validatePhoneNumber = (phone: string) => {
    const pattern = /^\d{10,11}$/
    const isPhone = pattern.test(phone)
    if (isPhone) {
        return true
    }
    return false;
}

export {
    validatePhoneNumber
}