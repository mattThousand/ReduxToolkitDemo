import React, {FunctionComponent, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';
import {fetchUsers, User} from './userListSlice';

const UserList: FunctionComponent = () => {
  const dispatch = useDispatch();

  const screenState = useSelector((state: RootState) => state.userList);

  useEffect(() => {
    dispatch(fetchUsers({page: 1}));
  }, []);

  const handleOnEndReached = () => {
    if (!screenState.loading) {
      dispatch(fetchUsers({page: screenState.nextPage}));
    }
  };

  return (
    <>
      {screenState.loading && <Text>LOADING</Text>}
      {screenState.error && <Text>ERROR</Text>}
      {!screenState.loading && !screenState.error && <Text>DEFAULT</Text>}
      <FlatList
        data={screenState.users}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({item}) => <UserListItem user={item} />}
        onEndReached={handleOnEndReached}
      />
    </>
  );
};

const UserListItem: FunctionComponent<{user: User}> = ({user}) => {
  return (
    <View style={style.container}>
      <Image style={style.thumbnail} source={{uri: user.picture.thumbnail}} />
      <Text style={style.nameText}>{user.name.first}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  nameText: {
    padding: 15,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'purple',
    borderWidth: 3,
  },
});

export default UserList;
