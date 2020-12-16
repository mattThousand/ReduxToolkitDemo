import React, {FunctionComponent, useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';
import {fetchUsers} from './userListSlice';

const UserList: FunctionComponent = () => {
  const dispatch = useDispatch();

  const screenState = useSelector((state: RootState) => state.userList);

  useEffect(() => {
    dispatch(fetchUsers({page: 1}));
  }, []);

  return (
    <>
      {screenState.loading && <Text>LOADING</Text>}
      {screenState.error && <Text>ERROR</Text>}
      {!screenState.loading && !screenState.error && <Text>DEFAULT</Text>}
      <Text>{JSON.stringify(screenState.users)}</Text>
    </>
  );
};

export default UserList;
