import React from "react";
import { useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contacts/contactsOperations";
import { useDispatch } from "react-redux";
import {selectVisibleContacts} from '../../redux/filters/filtersSelectors';


export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
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