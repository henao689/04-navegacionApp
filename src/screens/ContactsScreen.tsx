import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/auth/AuthContext';
import {styles} from '../themes/appTheme';

export const ContactsScreen = () => {
  const {sigIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMArgin}>
      <Text style={styles.title}>Contact</Text>

      {!authState.isLogin && <Button title="Sign In" onPress={sigIn} />}
    </View>
  );
};
