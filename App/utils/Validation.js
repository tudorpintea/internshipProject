export const emailValidation = (email) => {
    const reg = re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if (reg.test(email) === false) {
        return false;
    } else {
        return true;
    }
}