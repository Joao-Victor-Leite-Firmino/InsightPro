import React, { createContext, useState, ReactNode } from 'react';

// Define a estrutura dos produtos, incluindo 'comments'
interface Product {
  id: string;
  name: string;
  average_rating: string;
  comments: string[]; // Inclui a propriedade 'comments'
}

// Define a estrutura do contexto global
interface GlobalContextType {
  user: { name: string; company: string };
  setUser: React.Dispatch<React.SetStateAction<{ name: string; company: string }>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string; company: string }>({ name: '', company: '' });
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <GlobalContext.Provider value={{ user, setUser, products, setProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};



