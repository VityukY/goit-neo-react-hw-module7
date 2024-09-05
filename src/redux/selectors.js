import { createSelector } from "@reduxjs/toolkit";

export const selectContacts  = (state)=> state.contacts.items;
export const selectNameFilter  = (state)=> state.filter.filters.name;
export const selectedIsLoading = (state)=> state.contacts.isLoading;
export const selectedError = (state)=> state.contacts.error;

export const selectFilteredContacts  = createSelector(
   [selectContacts, selectNameFilter],
   (contacts, nameFilter) =>
   contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter)
    )
 );