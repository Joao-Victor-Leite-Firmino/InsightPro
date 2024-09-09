import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  login: (email: string, password: string) => void;
  user: { email: string; company: string } | null;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<{ email: string; company: string } | null>(null);

  const login = (email: string, password: string) => {
    setUser({ email, company: 'Empresa Exemplo' });
  };

  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

