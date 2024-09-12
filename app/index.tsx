import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { GlobalProvider } from '../hooks/EstadoGlobal'; // Ajuste o caminho conforme necessário
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GlobalProvider>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </GlobalProvider>
  );
};

export default App;
