import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState = {
   items: [],
   isLoading: false,
   error: null,
}
const handlePending = (state) => {
   state.isLoading = true;
 };
 
 const handleRejected = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
 };
 
const contactSlice = createSlice({
   name:'contacts',
   initialState,
   extraReducers: builder => {
      builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
       state.isLoading=false;
       state.error = null;
       state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending,handlePending)
      .addCase(deleteContact.fulfilled, (state, payload ) => {
         state.items = state.items.filter(item => 
             item.id!==payload.meta.arg)
         state.isLoading=false;
         state.error = null;
        })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending,handlePending)
      .addCase(addContact.fulfilled, (state, {payload} ) => {
         state.items.push(payload)
         state.isLoading=false;
         state.error = null;
        })
      .addCase(addContact.rejected, handleRejected)
      ;
    },
   }
)

export const {fetchingInProgress, fetchingSuccess, fetchingError} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;