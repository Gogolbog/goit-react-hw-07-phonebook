import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './reducer';

const contactsPersistConfig = {
  key: 'contactsLocal',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(contactsPersistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
