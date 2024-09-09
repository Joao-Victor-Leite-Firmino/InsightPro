import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/routers';

type ProductScreenProps = {
  route: RouteProp<ParamListBase, 'ProductScreen'>;
  navigation: StackNavigationProp<ParamListBase>;
};

type Product = {
  name: string;
  average_rating: number;
  comments: string[];
};

const ProductScreen: React.FC<ProductScreenProps> = ({ route, navigation }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulação de busca de produto
    try {
      const fetchedProduct: Product = {
        name: 'Produto Teste',
        average_rating: 4.5,
        comments: ['Ótimo produto!', 'Vale a pena!']
      };
      setProduct(fetchedProduct);
    } catch {
      setError('Erro ao buscar dados do produto');
    }
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      {product ? (
        <>
          <Text>{product.name}</Text>
          <Text>{product.average_rating}</Text>
          {product.comments.map((comment, index) => (
            <Text key={index}>{comment}</Text>
          ))}
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default ProductScreen;
