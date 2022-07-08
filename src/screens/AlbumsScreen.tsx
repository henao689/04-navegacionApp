/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/auth/AuthContext';

export const AlbumsScreen = () => {
  const {authState, logOut} = useContext(AuthContext);
  return (
    <View>
      <Text>Albumes</Text>
      {
        authState.isLogin 
        && <Button title="Log Out" onPress={logOut} />
      }
    </View>
  );
};
