import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6a003d142b7ab349603029d5.mockapi.io/";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const fetchData = await axios.get(`/contacts`);

      const data = fetchData.data;
console.log(data);
      return data;
    } catch (error) {}
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (payload, thunkAPI) => {
    try {
      const fetchData = await axios.post(`/contacts`, payload);

      const data = fetchData.data; 
console.log(data);
      return data;
    } catch (error) {}
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (payload, thunkAPI) => {
    try { 
        console.log(payload);
      const fetchData = await axios.delete(`/contacts/${payload}`, payload);

      const data = fetchData.data;
console.log(data);
      return data;
    } catch (error) {}
  }
);
