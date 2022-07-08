import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import {StackNavigator} from './StackNavigator';
import {SettingsScreens} from '../screens/SettingsScreens';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../themes/appTheme';
import {createStackNavigator} from '@react-navigation/stack';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreens} />
    </Stack.Navigator>
  );
};

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsStackScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
          }}
          style={styles.avatar}
        />
        <Text>Image</Text>
      </View>

      {/* {opciones de menu} */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuText}>Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
