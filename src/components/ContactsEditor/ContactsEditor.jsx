import { useState } from "react";
import { addContacts } from "../../redux/contacts/contactsOperations";
import { useDispatch } from "react-redux";

export const ContactsEditor = () => {
  const [contact, setContact] = useState({ name: "", number: "" });

  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContacts(contact));
    setContact({ name: "", number: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Number:
        <input
          type="text"
          name="number"
          value={contact.number}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Add contact</button>
    </form>
  );
};