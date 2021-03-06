import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./app-actions";
import operations from "./app-operations";



const contacts = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.addContactSuccess]: (state, { payload }) => {
    const contactExists = state.find(contact => contact.name === payload.name);

    if (contactExists) {
      alert(`${payload.name} - уже есть в списке :)`);
      return state;
    }
    return [...state, payload];
  },
  [operations.addContactError]: (state, { type, payload }) => {
    let nameArray = state.map((cur) => cur.name);
    if (!nameArray.includes(payload.name)) {
      return [...state, payload];
    } else {
      alert(`${payload.name} - уже есть в списке :)`);
      return state;
    }
  },
  [actions.deleteContactSuccess]: (state, { types, payload }) => {
    let newArrAfterDel = state.filter((elem) => elem.id !== payload);
    return [...newArrAfterDel];
  },
});

const loading = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,
});

const filters = createReducer("", {
  [actions.filterSet]: (state, { payload }) => {
    return payload;
  },
});


export default combineReducers({ contacts, filters, loading });