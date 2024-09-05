import React from 'react';
import { FlatList, View, Text, Button } from 'react-native';

interface Product {
  id: string;
  name: string;
  average_rating: string;
  comments: string[];
}

interface Props {
  products: Product[];
  onPress: (id: string) => void;
}

const ProductList: React.FC<Props> = ({ products, onPress }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: { item: Product }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.average_rating}</Text>
          <Button title="Ver Detalhes" onPress={() => onPress(item.id)} />
        </View>
      )}
    />
  );
};

export default ProductList;
