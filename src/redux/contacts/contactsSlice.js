import { createSlice } from "@reduxjs/toolkit";
import { addContacts, fetchContacts, deleteContacts } from "./contactsOperations";
const initialState = {
error: null,
loading: false,
contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
 
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
     builder.addCase(fetchContacts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addContacts.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
    });
     builder.addCase(deleteContacts.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
    });
  },

});

export const contactsReducer = contactsSlice.reducer;