import React, {Children} from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navegacion/StackNavigator';
// import {MenuLateralBasico} from './src/navegacion/MenuLateralBasico';
import {MenuLateral} from './src/navegacion/MenuLateral';
import {AuthProvider} from './src/context/auth/AuthContext';
// import {MyTabs} from './src/navegacion/Tabs';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <MyTabs /> */}
      </AuthProvider>
    </NavigationContainer>
  );
};

// const AppState = ({children}: any) => {
//   return <AuthProvider>{Children}</AuthProvider>;
// };

export default App;
