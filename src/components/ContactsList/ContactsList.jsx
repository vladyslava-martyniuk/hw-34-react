
import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import {selectVisibleContacts} from '../../redux/filters/filtersSelectors';
import {selectContactIds} from '../../redux/contacts/contactsSlice';


export const ContactsList = () => {
  
  const contactsId = useSelector(selectContactIds);
  return (
    <ul>
      {contactsId.map((id) => (
        <Contact key={id} id={id} />
      ))}
    </ul>
  );
};