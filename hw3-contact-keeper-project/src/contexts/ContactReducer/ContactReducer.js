const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_CONTACT": {
            const newContact = {
                ...payload,
                id: state.contacts.length,
            };
            let newContacts = [newContact, ...state];
            return {
                ...state,
                contacts: newContacts,
            };
        }

        case "EDIT_CONTACT": {
            const selectedContact = { ...payload };

            return {
                ...state,
                selectedContact,
            };
        }

        case "SUBMIT_EDIT_CONTACT": {
            const selectedContact = { ...payload };
            const newContacts = [...state.contacts];
            const selectedIndex = newContacts.findIndex(
                (el) => el.id === selectedContact.id
            );
            newContacts[selectedIndex] = selectedContact;

            return {
                ...state,
                contacts: newContacts,
            };
        }

        case "DELETE_CONTACT": {
            const newContacts = state.contacts.filter(
                (el) => el.id !== payload.id
            );
            return {
                ...state,
                contacts: newContacts,
            };
        }

        default:
            return state;
    }
};

export default reducer;
