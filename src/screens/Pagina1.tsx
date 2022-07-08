import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../themes/appTheme';

//StackScreenProps= lib que trae las propiedades de navegacion
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1 = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMArgin}>
      <Text style={styles.title}> Pagina1screen </Text>
      <Button
        title="Ir a Pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />
      <Text>Navegar con argumentos</Text>

      <View style={styles.containerButtons}>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonLong,
            backgroundColor: '#883bcc',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Peter',
            })
          }>
          <Text style={styles.botonLongText}>Hola Peter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonLong}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Text style={styles.botonLongText}>Hola Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
