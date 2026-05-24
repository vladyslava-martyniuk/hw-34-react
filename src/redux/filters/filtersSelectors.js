 import { createSelector } from '@reduxjs/toolkit'

  export const selectContacts = (state) => state.contacts.contacts;
 export const selectFilter = (state) => state.filter;
 

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
);
console.log(selectVisibleContacts);