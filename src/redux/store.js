import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

const rootReducer = {
  contacts: contactReducer,
  filter: filterReducer,
}

export const store = configureStore({
  reducer:rootReducer,
})

// Redux
// 1. (один раз на весь проект) Розгорнути стор
// 2. Створити стан
// 3. Зарендерити стан в jsx
// 4. Створити екшени для оновлення стану
// 5. Обробити екшени