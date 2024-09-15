import React, { ReactNode, createContext, useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  user: { name: string; company: string } | null;
  setUser: React.Dispatch<React.SetStateAction<{ name: string; company: string } | null>>;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, company: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string; company: string } | null>(null);

  // Verificação automática ao abrir o app
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // Fazer uma requisição ao backend para validar o token
          const response = await axios.get('http://localhost:3000/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const { name, company } = response.data;
          setUser({ name, company });
        }
      } catch (error) {
        console.error('Erro ao verificar token', error);
        // Caso o token não seja válido, remove-o
        await AsyncStorage.removeItem('token');
      }
    };

    checkLoginStatus();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      const { token, company } = response.data;

      // Armazenar o token
      await AsyncStorage.setItem('token', token);
      setUser({ name: email, company });
    } catch (error) {
      console.error('Erro ao fazer login', error);
      throw new Error('Credenciais inválidas. Tente novamente.');
    }
  };

  const register = async (email: string, password: string, company: string) => {
    try {
      await axios.post('http://localhost:3000/registro', { email, password, company });
      // Realiza o login automaticamente após o registro
      await login(email, password);
    } catch (error) {
      console.error('Erro ao fazer registro', error);
      throw new Error('Erro no registro. Tente novamente.');
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
