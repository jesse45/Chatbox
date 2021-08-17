const contactReducer = (chatContacts = null, action) => {
    switch (action.type) {
        case "SETUSER":
            return {
                ...chatContacts,
                contacts: action.user
            }

        default:
            return chatContacts;
    }
}

export default contactReducer;