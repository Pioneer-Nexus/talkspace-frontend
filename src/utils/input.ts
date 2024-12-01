const isEmptyInput = (input: string) => {
    if (input.trim()) {
        return true;
    }
    return false;
}

const validatedEmail = (input: string) => {
    const pattern = /^[a-zA-z0-9]+@([a-z]+\.)+[\w-]{2,4}$/;
    if (input.trim()) {
        const result: boolean = pattern.test(input);
        return result;
    }
    return false;

}

const validPassword = (input: string) => {
    if (input.trim().length >= 8) {
        return true;
    }
    return false;
}

const validatePhoneNumber = (phone: string) => {
    const pattern = /^\d{10,11}$/
    const isPhone = pattern.test(phone)
    if (isPhone) {
        return true
    }
    return false;
}


export {
    isEmptyInput,
    validatedEmail,
    validatePhoneNumber,
    validPassword,
}