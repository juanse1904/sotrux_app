import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import publicWindows from './publicCopies';
import Tabs from './tabs';
import modalTabs from './modalData';
import { userData } from './userData';
import activeView from './activeView';

const reducer = combineReducers({
  publicWindows,
  userData,
  Tabs,
  activeView,
  modalTabs,
});

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
