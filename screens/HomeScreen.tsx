import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/routers';

type HomeScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Bem-vindo ao Home Screen</Text>
      <Button
        title="Ir para Produto"
        onPress={() => navigation.navigate('ProductScreen')}
      />
    </View>
  );
};

export default HomeScreen;
