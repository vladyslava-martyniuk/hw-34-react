import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filtersSlice";
import { userReducer } from "./users/usersSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
const persistConfig = {
    key: 'token',
    storage,
    // whitelist: ['token']
}
const persistedReducer = persistReducer(persistConfig, userReducer)
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
        users: persistedReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
 export let persistor = persistStore(store)