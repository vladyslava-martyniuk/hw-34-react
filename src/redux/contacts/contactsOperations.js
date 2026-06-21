import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const fetchData = await axios.get(`/contacts`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${state.users.token}`
      }});

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
      const state = thunkAPI.getState();
      const fetchData = await axios.post(`/contacts`, {...payload, userId: state.users.user.id}, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${state.users.token}`
      }});

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
      const state = thunkAPI.getState();
      const fetchData = await axios.delete(`/contacts/${payload}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${state.users.token}`
      }
      });

      const data = fetchData.data;
console.log(data);
      return data;
    } catch (error) {}
  }
);
