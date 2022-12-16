import React from "react";
import ContactContext from "../../contexts/ContactContext/ContactContext";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageContainer from "../../components/PageContainer/PageContainer";
import useFetchContacts from "../../hooks/useFetchContact";
import ContactList from "../../components/ContactList/ContactList";
import ContactService from "../../services/contactServices";

const HomePage = () => {
    const { contacts, loading, error } = useFetchContacts();
    const onAddContact = async (contact) => {
        // setContacts((prev) => [...prev, contact]);
        const response = await ContactService.create(contact);
    };
    return (
        <PageContainer
            title="Contact Keeper | Help you to keep all contacts"
            description="Easy to use | The best app of the world"
        >
            <ContactContext.Provider
                value={{
                    contacts,
                }}
            >
                <div className="row">
                    <div className="col-12 col-md-6">
                        <ContactForm onAddContact={onAddContact} />
                    </div>
                    <div className="col-12 col-md-6">
                        <ContactList contacts={contacts} />
                    </div>
                </div>
            </ContactContext.Provider>
        </PageContainer>
    );
};

export default HomePage;
