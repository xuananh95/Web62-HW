const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_CONTACT": {
            const newContact = {
                ...payload,
                id: state.contacts.length,
            };
            let newContacts = [newContact, ...state.contacts];
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newContact),
            };
            console.log("sending data");
            fetch("http://127.0.0.1:5000", requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log("data added: ", data);
                    return {
                        ...state,
                        contacts: data,
                        displayContacts: data,
                    };
                })
                .catch((e) => {
                    console.log(e);
                });
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
                displayContacts: newContacts,
            };
        }

        case "DELETE_CONTACT": {
            const newContacts = state.contacts.filter(
                (el) => el.id !== payload.id
            );
            return {
                ...state,
                contacts: newContacts,
                displayContacts: newContacts,
            };
        }

        case "SEARCH": {
            const newContacts = state.contacts.filter((el) =>
                el.name.toLowerCase().includes(payload.toLowerCase())
            );
            return {
                ...state,
                displayContacts: newContacts,
            };
        }

        case "FETCH_DATA": {
            let newContacts = [...payload];
            return {
                ...state,
                contacts: newContacts,
                displayContacts: newContacts,
            };
        }

        default:
            return state;
    }
};

export default reducer;
