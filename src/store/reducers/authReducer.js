
const initialState = {
    auth: null
}

const reducer = (state = initialState, action) => {
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


export default reducer;