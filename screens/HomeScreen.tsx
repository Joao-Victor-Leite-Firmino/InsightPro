import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { GlobalContext } from '../hooks/EstadoGlobal';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types'; // Importa os tipos das rotas

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const context = useContext(GlobalContext);

  if (!context) {
    return <Text>Erro: Contexto não encontrado.</Text>;
  }

  const { user, products } = context;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bem-vindo, {user.name}!</Text>
      <Text style={{ marginBottom: 16 }}>Empresa: {user.company}</Text>
      
      <Text style={{ fontSize: 20, marginBottom: 8 }}>Produtos</Text>
      {products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18 }}>Produto: {item.name}</Text>
              <Text>Avaliação: {item.average_rating}</Text>
              <Text>Comentários:</Text>
              {item.comments.map((comment, index) => (
                <Text key={index} style={{ marginLeft: 8 }}>- {comment}</Text>
              ))}
            </View>
          )}
        />
      ) : (
        <Text>Nenhum produto encontrado.</Text>
      )}
    </View>
  );
};

export default HomeScreen;




