import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '@/screens/RegisterScreen';
import { GlobalProvider } from '../hooks/EstadoGlobal';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GlobalProvider>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </GlobalProvider>
  );
};

export default App;



