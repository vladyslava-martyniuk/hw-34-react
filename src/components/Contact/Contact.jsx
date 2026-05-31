import { deleteContacts } from "../../redux/contacts/contactsOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectContactById } from "../../redux/contacts/contactsSlice";
export const Contact = ({ id }) => {
const dispatch = useDispatch();
  const contact = useSelector((state) => selectContactById(state, id));
  return(
    <li >
        {contact.name}: {contact.number}
        <button onClick={() => dispatch(deleteContacts(id))}>Delete</button>
    </li>
  )
};