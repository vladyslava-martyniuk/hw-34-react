import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("register", {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);