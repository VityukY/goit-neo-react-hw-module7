import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
   items: []
}

const contactSlice = createSlice({
   name:'contacts',
   initialState,
   reducers:{
      addContact:{
         prepare:(data)=>{
            const newContact = {
               ...data,
               id:nanoid(),
            }
            return {
               payload:newContact
            }
      },
      reducer:(state,{payload})=>{state.items.push(payload)}
      },
      removeContact: (state, { payload }) => {
         state.items = state.items.filter(item => item.id !== payload); // Update state.items with the filtered array
      },
      selectContact:()=>{},
   }
})

export const {addContact, removeContact, selectContact} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;