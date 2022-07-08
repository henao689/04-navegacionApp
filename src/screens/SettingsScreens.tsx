/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';
import {AuthContext} from '../context/auth/AuthContext';

export const SettingsScreens = () => {
  //Personalizar safeArea
  const insets = useSafeAreaInsets();

  //usar context
  const {authState} = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top}}>
      <Text>{JSON.stringify(authState, null, 2)}</Text>
      {
        authState.favoriteIcon &&
        <TouchableIcon iconName={authState.favoriteIcon} />
      }
    </View>
  );
};
