import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66d9c25a4ad2f6b8ed55eefa.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
   "contacts/fetchAll",

   async (_, thunkAPI) => {
     try {
       const response = await axios.get("/contacts");
       return response.data;
     } catch (e) {
       return thunkAPI.rejectWithValue(e.message);
     }
   }
 );

 export const deleteContact = createAsyncThunk(
   "contacts/deleteContact",

   async (id, thunkAPI) => {
     try {
       const response = await axios.delete(`/contacts/${id}`);
       return response.data;
     } catch (e) {
       return thunkAPI.rejectWithValue(e.message);
     }
   }
 );
 


 export const addContact = createAsyncThunk(
   "contacts/addContact",

   async (data, thunkAPI) => {
     try {
       const response = await axios.post(`/contacts`, data);
       return response.data;
     } catch (e) {
       return thunkAPI.rejectWithValue(e.message);
     }
   }
 );
 

