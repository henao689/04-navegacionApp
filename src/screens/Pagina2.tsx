import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

export const Pagina2 = () => {
  //otra forma de acceder a la propiedad de navegacion aunque es menos eficiente
  const navigator = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atrás',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMArgin}>
      <Text style={styles.title}> Pagina2screen </Text>
      <Button
        title="Ir a Pagina 3"
        onPress={() => navigator.navigate('Pagina3')}
      />
    </View>
  );
};
