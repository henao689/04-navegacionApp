import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMArgin}>
      <Text style={styles.title}> Pagina3screen </Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a Pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
