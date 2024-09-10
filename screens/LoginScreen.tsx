import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { RootStackParamList } from '../types/types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Text>Erro: Contexto não encontrado</Text>;
  }

  const { login } = authContext;

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text style={styles.registerButtonText}>Cadastrar novo usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  registerButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#007bff',
    alignItems: 'center',
    borderRadius: 5,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginScreen;
