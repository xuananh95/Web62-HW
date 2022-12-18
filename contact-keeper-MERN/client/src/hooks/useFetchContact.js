import React, { useState, useEffect } from "react";
import ContactService from "../services/contactServices";

const useFetchContacts = (props) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchContacts = async () => {
        setLoading(true);
        try {
            const contactResponse = await ContactService.getAll();
            const contactData = contactResponse.data;
            setContacts(contactData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    useEffect(() => {
        fetchContacts();
    }, []);
    return {
        contacts,
        loading,
        error,
    };
};

export default useFetchContacts;
