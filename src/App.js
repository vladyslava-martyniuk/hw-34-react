import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { ContactsEditor } from "./components/ContactsEditor/ContactsEditor";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { use, useEffect } from "react";
import { addContact, deleteContact } from "./redux/contacts/contactsSlice";
import { setFilter } from "./redux/filters/filtersSlice";
import { fetchContacts } from "./redux/contacts/contactsOperations";


function App() {
  const dispatch = useDispatch();

   const contacts = useSelector((state) => state.contacts.contacts);
   const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>

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