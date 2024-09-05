// LoginScreen.tsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { GlobalContext } from '../hooks/EstadoGlobal';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const context = useContext(GlobalContext);

  if (!context) {
    return <Text>Erro: Contexto não encontrado.</Text>;
  }

  const { setUser } = context;
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const handleLogin = () => {
    setUser({ name, company });
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 16, padding: 8 }}
      />
      <TextInput
        placeholder="Empresa"
        value={company}
        onChangeText={setCompany}
        style={{ borderWidth: 1, marginBottom: 16, padding: 8 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Cadastrar" onPress={() => navigation.navigate('RegisterScreen')} />
    </View>
  );
};

export default LoginScreen;
