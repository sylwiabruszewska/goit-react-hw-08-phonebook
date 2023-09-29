import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, contactsReducer } from './slices';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
