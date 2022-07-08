import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/auth/AuthContext';
import {RootStackParams} from '../navegacion/StackNavigator';
import {styles} from '../themes/appTheme';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  const {changeUserName} = useContext(AuthContext);
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre as any,
    });
    changeUserName(params.nombre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMArgin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
