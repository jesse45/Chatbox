

const authReducer = (state = null, action) => {
    switch (action.type) {
        case 'SIGNUP_USER':
            return {
                ...state,
                auth: action.payload
            }
        case 'SIGNOUT_USER':
            return {
                ...state,
                auth: null

            }
        case 'SIGNIN_USER':
            return {
                ...state,
                auth: action.payload
            }

        default:
            return state;
    }
}


export default authReducer;