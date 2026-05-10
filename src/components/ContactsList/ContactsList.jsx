import React from "react";
import { useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contacts/contactsOperations";
import { useDispatch } from "react-redux";
import {getVisibleContacts} from '../../redux/filters/filtersSelectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContacts(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};