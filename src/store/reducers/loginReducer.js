
const initialState = {
    email: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return {
                ...state,
                email: 'js@mail.com'
            }
        default: return state;

    }
}

export default reducer;