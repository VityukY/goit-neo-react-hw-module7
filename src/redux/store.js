import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactReducer = persistReducer(persistConfig, contactReducer);

const rootReducer = combineReducers({
  contacts: persistedContactReducer,  
  filter: filterReducer,  
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Redux
// 1. (один раз на весь проект) Розгорнути стор
// 2. Створити стан
// 3. Зарендерити стан в jsx
// 4. Створити екшени для оновлення стану
// 5. Обробити екшени