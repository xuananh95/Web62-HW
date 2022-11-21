import React, { useContext } from "react";
import contactContext from "../../contexts/ContactContext/ContactContext";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
    const contactCtx = useContext(contactContext);
    const { state } = contactCtx;
    return (
        <div>
            <div>
                <form>
                    <input type="text" />
                </form>
            </div>
            <div>
                {state.contacts.length > 0
                    ? state.contacts.map((item, index) => (
                          <ContactCard
                              key={`contact-${index}`}
                              contact={item}
                          />
                      ))
                    : "Empty"}
            </div>
        </div>
    );
};

export default ContactList;
