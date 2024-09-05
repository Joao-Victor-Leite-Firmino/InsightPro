import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { GlobalContext } from '../hooks/EstadoGlobal';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type ProductDetailScreenProps = StackScreenProps<RootStackParamList, 'ProductDetailScreen'>;

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route }) => {
  const { productId } = route.params;
  const context = useContext(GlobalContext);

  if (!context) {
    return <Text>Erro: Contexto não encontrado.</Text>;
  }

  const { products } = context;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <Text>Produto não encontrado.</Text>;
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{product.name}</Text>
      <Text>Avaliação: {product.average_rating}</Text>
      <Text>Comentários:</Text>
      {product.comments.map((comment, index) => (
        <Text key={index} style={{ marginLeft: 8 }}>- {comment}</Text>
      ))}
    </View>
  );
};

export default ProductDetailScreen;

