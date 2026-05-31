 import { createSelector } from '@reduxjs/toolkit'
 import { selectContacts } from '../contacts/contactsSlice'

  export const selectedContacts = (state) => selectContacts(state);
 export const selectFilter = (state) => state.filter;
 

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
// );
// console.log(selectVisibleContacts);
