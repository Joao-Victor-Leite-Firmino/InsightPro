import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { GlobalContext } from '../hooks/EstadoGlobal'; // Ajuste o caminho conforme necessário
import { RootStackParamList } from '../types/types';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const context = useContext(GlobalContext);

  if (!context) {
    return <Text>Erro: Contexto não encontrado.</Text>;
  }

  const { setUser } = context;
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica de registro, como chamadas de API.
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ borderWidth: 1, marginBottom: 16, padding: 8 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 16, padding: 8 }}
      />
      <Button title="Cadastrar" onPress={handleRegister} />
      <Button title="Voltar para Login" onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
};

export default RegisterScreen;
