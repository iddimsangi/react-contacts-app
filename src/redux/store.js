import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/ContactsSlice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
