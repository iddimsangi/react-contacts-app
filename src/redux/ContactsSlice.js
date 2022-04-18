import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Api/api";
export const getContacts = createAsyncThunk("contactsAsyc", async () => {
  const response = await api.get("/contacts");
  return response.data;
});

const initialState = [];

const ContactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { addContacts } = ContactsSlice.actions;

export default ContactsSlice.reducer;
