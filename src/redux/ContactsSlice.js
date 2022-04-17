import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ContactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addContacts } = ContactsSlice.actions;

export default ContactsSlice.reducer;
