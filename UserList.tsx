import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './store';

const UserList: FunctionComponent = () => {
  const screenState = useSelector((state: RootState) => state.userList);

  return (
    <>
      {screenState.loading && <Text>LOADING</Text>}
      {screenState.error && <Text>ERROR</Text>}
      {!screenState.loading && !screenState.error && <Text>DEFAULT</Text>}
    </>
  );
};

export default UserList;
