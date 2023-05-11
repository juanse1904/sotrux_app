import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import publicWindows from './publicCopies';
import Tabs from './tabs';
import modalTabs from './modalData';
import { userData } from './userData';
import activeView from './activeView';

const persistConfig = {
  key: 'sotrux-local-store',
  storage,
};

const reducer = combineReducers({
  publicWindows,
  userData,
  Tabs,
  activeView,
  modalTabs,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);
