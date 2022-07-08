import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {Text, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// import {Tab2Screen} from '../screens/Tab2Screen';
// import {Tab3Screen} from '../screens/Tab3Screen';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../themes/appTheme';
import {TabTopNav} from './TopTabNavigation';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <MyTabsIos /> : <MyTabsAndroid />;
};

const TabAndriodButton = createMaterialBottomTabNavigator();

function MyTabsAndroid() {
  return (
    <TabAndriodButton.Navigator
      sceneAnimationEnabled={true}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          //borderTopColor: colores.primary,
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string;
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'albums';
              break;
            case 'Tab2Screen':
              iconName = 'attach';
              break;
            case 'StackNavigator':
              iconName = 'bar-chart';
              break;
            default:
              break;
          }
          return (
            <Text style={{color: color}}>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <TabAndriodButton.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <TabAndriodButton.Screen
        name="Tab2Screen"
        options={{
          title: 'Tab2',
        }}
        component={TabTopNav}
      />
      <TabAndriodButton.Screen
        name="StackNavigator"
        options={{title: 'Stack options'}}
        component={StackNavigator}
      />
    </TabAndriodButton.Navigator>
  );
}

const TabIosButton = createBottomTabNavigator();

const MyTabsIos = () => {
  return (
    <TabIosButton.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          //borderTopColor: colores.primary,
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string;
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'Stack';
              break;
            default:
              break;
          }
          return <Text style={{color: color}}>{iconName}</Text>;
        },
      })}>
      <TabIosButton.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <TabIosButton.Screen
        name="Tab2Screen"
        options={{
          title: 'Tab2',
        }}
        component={TabTopNav}
      />
      <TabIosButton.Screen
        name="StackNavigator"
        options={{title: 'Stack options'}}
        component={StackNavigator}
      />
    </TabIosButton.Navigator>
  );
};
