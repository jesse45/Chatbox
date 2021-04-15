const currentReducer = (currentUser = null, action) => {
    switch (action.type) {
        case 'SETCURRENTUSER':
            currentUser = action.currentUser
            return { ...currentUser }


        default:
            return currentUser;
    }
}

export default currentReducer;