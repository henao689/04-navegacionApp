import * as React from 'react';

import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {AlbumsScreen} from '../screens/AlbumsScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {colores} from '../themes/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TabTopNav = () => {
  //hacer que tenga un espaciado-top en ios
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      style={{paddingTop: top}}
      screenOptions={({route}) => ({
        tabBarStyle: {
          shadowColor: '#fff',
        },
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string;
          switch (route.name) {
            case 'Chats':
              iconName = 'chatbubbles';
              break;
            case 'Albumes':
              iconName = 'albums';
              break;
            case 'Contacts':
              iconName = 'people';
              break;
            default:
              break;
          }
          return (
            <Text style={{color: colores.primary}}>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Albumes" component={AlbumsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  );
};
