import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ProductDetails: { id: string };
  Login: undefined;
};

type ProductDetailsProps = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
  navigation: StackNavigationProp<RootStackParamList, 'ProductDetails'>;
};

type Product = {
  name: string;
  average_rating: number;
  comments: { id: number; text: string }[];
};

const ProductDetails = ({ route, navigation }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.example.com/product/${route.params.id}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError('Erro ao buscar dados do produto');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [route.params.id]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!product) {
    return <Text>Produto não encontrado</Text>;
  }

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>Avaliação média: {product.average_rating}</Text>
      <View>
        {product.comments.map((comment) => (
          <Text key={comment.id}>{comment.text}</Text>
        ))}
      </View>
    </View>
  );
};

export default ProductDetails;
