import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { submitNewContact, handleDelete, filterContacts,} from "./contactFormActions";

const itemsReducer = createReducer(
 [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
 ],
 {
  [submitNewContact]: (state, action) => [...state, action.payload],
  [handleDelete]: (state, action) =>
   state.filter((contact) => contact.id !== action.payload),
 }
);

const filterItemsReducer = createReducer("", {
 [filterContacts]: (_, action) => action.payload,
});

const contactFormCartReduser = combineReducers({
 items: itemsReducer,
 filter: filterItemsReducer,
});

export default contactFormCartReduser;