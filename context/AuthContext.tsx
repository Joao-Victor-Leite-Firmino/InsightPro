import React, { ReactNode, createContext, useState } from 'react';

interface AuthContextType {
  user: { name: string; company: string } | null;
  setUser: React.Dispatch<React.SetStateAction<{ name: string; company: string } | null>>;
  login: (username: string, password: string) => void;
}

const defaultContext: AuthContextType = {
  user: null,
  setUser: () => { },
  login: () => { },
};

export const AuthContext = createContext<AuthContextType>(defaultContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string; company: string } | null>(null);

  const login = (username: string, password: string) => {
    // Implementação do login
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
