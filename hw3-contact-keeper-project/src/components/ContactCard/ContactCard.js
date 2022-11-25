import React, { useContext } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { PERSONAL } from "../../configs/constants";
import contactContext from "../../contexts/ContactContext/ContactContext";

const ContactCard = ({ contact, setSelectedContact }) => {
    const contactCtx = useContext(contactContext);
    const { dispatch } = contactCtx;

    const onEditHandler = (contact) => {
        // console.log("edit", contact);
        setSelectedContact(contact);
    };

    const onDeleteHandler = (contact) => {
        const action = {
            type: "DELETE_CONTACT",
            payload: contact,
        };
        dispatch(action);
    };
    return (
        <div>
            <div className="card mb-3" style={{ width: "30em" }}>
                <div className="card-body">
                    <div className="d-flex flex-row justify-content-between">
                        <h5 className="card-title">{contact.name}</h5>
                        {contact.type === PERSONAL ? (
                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                disabled
                            >
                                Personal
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-dark btn-sm"
                                disabled
                            >
                                Professional
                            </button>
                        )}
                    </div>
                    <p className="card-text">
                        <AiOutlineMail /> Email: {contact.email}
                    </p>
                    <p className="card-text">
                        <AiOutlinePhone />
                        Phone: {contact.phone}
                    </p>
                    <div>
                        <button
                            type="button"
                            className="btn btn-success me-2"
                            onClick={() => onEditHandler(contact)}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => onDeleteHandler(contact)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
