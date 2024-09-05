// types.ts
export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;  // Adicione a rota de cadastro
  HomeScreen: undefined;
  ProductDetailScreen: { productId: string };
};
