const SETCURRENTUSER = 'SETCURRENTUSER';

export const setCurrentUser = (currentUser) => {
    return {
        type: SETCURRENTUSER,
        currentUser
    }
}