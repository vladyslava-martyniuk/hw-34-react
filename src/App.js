import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { ContactsEditor } from "./components/ContactsEditor/ContactsEditor";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { use, useEffect } from "react";
import { addContact, deleteContact } from "./redux/contacts/contactsSlice";
import { setFilter } from "./redux/filters/filtersSlice";
import { fetchContacts } from "./redux/contacts/contactsOperations";
import {selectFilter } from "./redux/filters/filtersSelectors";
import { selectContacts } from "./redux/contacts/contactsSlice";
import { AuthForm } from "./components/AuthForm/AuthForm";


function App() {
 
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
   

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  console.log(contacts);

  

  const filteredContacts = contacts.filter((contact) =>
    console.log(contact.name, filter),
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <AuthForm />
      <ContactsEditor  />

      <h2>Contacts</h2>

      <Filter
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />

      <ContactsList
       
      />
    </div>
  );
}

export default App;