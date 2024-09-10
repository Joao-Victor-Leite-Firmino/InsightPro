import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { GlobalContext } from '../hooks/EstadoGlobal';

// Defina as interfaces para garantir consistência
interface Comment {
  id: number;
  text: string;
}

interface Product {
  id: string;
  name: string;
  average_rating: string; // Certifique-se de que o tipo corresponda ao contexto global
  comments: Comment[];
}

const ProductDetail = () => {
  const context = useContext(GlobalContext);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const route = useRoute();
  const { productId } = route.params as { productId: string };

  // Verifique se o contexto não é undefined
  if (!context) {
    return (
      <View>
        <Text>Error: Global context is undefined.</Text>
      </View>
    );
  }

  const { products } = context;

  useEffect(() => {
    if (products && productId) {
      const product = products.find((p) => p.id === productId);
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [products, productId]);

  if (!selectedProduct) {
    return (
      <View>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Product Name: {selectedProduct.name}</Text>
      <Text>Average Rating: {selectedProduct.average_rating}</Text>
      <Text>Comments:</Text>
      {selectedProduct.comments.map((comment) => (
        <View key={comment.id}>
          <Text>{comment.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default ProductDetail;
