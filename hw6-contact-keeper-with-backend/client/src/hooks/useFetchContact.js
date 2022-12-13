import { useState, useEffect } from "react";
import ContactService from "../services/ContactService";

const useFetchContact = (props) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchContacts = async () => {
        setLoading(true);
        try {
            const contactResponse = await ContactService.getAll();
            const contactsData = contactResponse.data.data;
            setContacts(contactsData);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            setError(error.response.data);
        }
    };
    const setContactsData = (newContacts) => setContacts(newContacts);

    useEffect(() => {
        fetchContacts();
    }, []);
    return {
        contacts,
        loading,
        error,
        setContactsData,
    };
};

export default useFetchContact;
