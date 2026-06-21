import { createSlice,  createEntityAdapter } from "@reduxjs/toolkit";
import { addContacts, fetchContacts, deleteContacts } from "./contactsOperations";

const contactsAdapter = createEntityAdapter();
const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsAdapter.getInitialState({
    loading: false,
    error: null,
  }),
 
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      console.log(action);
      contactsAdapter.setAll(state, action.payload);
    });
     builder.addCase(fetchContacts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addContacts.fulfilled, (state, action) => {
      contactsAdapter.addOne(state, action.payload);
    });
     builder.addCase(deleteContacts.fulfilled, (state, action) => {
      contactsAdapter.removeOne(state, action.payload.id);
    });
  },

});
const contactsSelectors = contactsAdapter.getSelectors((state) => state.contacts);
console.log(contactsSelectors);
export const { selectAll: selectContacts } = contactsSelectors;
export const { selectById: selectContactById } = contactsSelectors;
export const { selectIds: selectContactIds } = contactsSelectors;
export const contactsReducer = contactsSlice.reducer;