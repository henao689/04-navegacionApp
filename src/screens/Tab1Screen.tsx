import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMArgin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="boat" />
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="ribbon-outline" />
      </Text>
    </View>
  );
};
