import {createSlice} from '@reduxjs/toolkit';

export type User = {
  name: string;
};

export type UserListState = {
  users: User[];
  loading: boolean;
  error: boolean;
};

const initialState: UserListState = {
  users: [],
  loading: false,
  error: true,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
});

export default userListSlice.reducer;
