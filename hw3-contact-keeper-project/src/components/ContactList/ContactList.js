import React, { useContext, useEffect, useState } from "react";
import contactContext from "../../contexts/ContactContext/ContactContext";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ setSelectedContact }) => {
    const contactCtx = useContext(contactContext);
    const { state, dispatch } = contactCtx;
    const [searchText, setSearchText] = useState("");

    console.log("list", state.displayContacts);
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);
        const action = {
            type: "SEARCH",
            payload: value,
        };
        dispatch(action);
    };

    return (
        <div>
            <div>
                <form>
                    <div className="row g-3 align-items-center mb-2">
                        <div className="col-auto">
                            <label
                                htmlFor="inputPassword6"
                                className="col-form-label"
                            >
                                Search Contact
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                value={searchText}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                {state.displayContacts.length > 0
                    ? state.displayContacts.map((item, index) => (
                          <ContactCard
                              key={`contact-${index}`}
                              contact={item}
                              setSelectedContact={setSelectedContact}
                          />
                      ))
                    : "Contact Empty"}
            </div>
        </div>
    );
};

export default ContactList;
