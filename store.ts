import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userListSlice from './userListSlice';

const rootReducer = combineReducers({
  userList: userListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
