import React, { useEffect, useReducer, useState } from "react";
import ContactContext from "../../contexts/ContactContext/ContactContext";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import reducer from "../../contexts/ContactReducer/ContactReducer";
import { PERSONAL } from "../../configs/constants";
const contactData = [
    {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        type: "personal",
    },
    {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-2222",
        type: "personal",
    },
    {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "professional",
    },
];

const initialValues = {
    name: "",
    email: "",
    phone: "",
    type: PERSONAL,
};

const HomePage = () => {
    // const [contacts, setContacts] = useState([]);

    // useEffect(() => {
    //     setContacts(contactData);
    // }, []);
    const initialState = {
        contacts: contactData,
        displayContacts: contactData,
        // selectedContact: { name: "", email: "", phone: "", type: PERSONAL },
    };

    const [selectedContact, setSelectedContact] = useState(initialValues);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="container mt-4">
            <ContactContext.Provider
                value={{
                    state,
                    dispatch,
                }}
            >
                <div className="row">
                    <div className="col-12 col-md-6">
                        <ContactForm
                            selectedContact={selectedContact}
                            setSelectedContact={setSelectedContact}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <ContactList setSelectedContact={setSelectedContact} />
                    </div>
                </div>
            </ContactContext.Provider>
        </div>
    );
};

export default HomePage;
