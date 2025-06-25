import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)).catch((error) => {
      console.error("Error deleting contact:", error);
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading contacts: {error}</p>;
  }

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
