import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ContactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {},
  },
});

export const { addContacts } = ContactsSlice.actions;

export default ContactsSlice.reducer;
