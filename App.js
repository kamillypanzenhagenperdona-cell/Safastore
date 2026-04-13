import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import { CartProvider } from './screens/context/CardContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0D1B2A' }, headerTintColor: '#fff' }}>
          <Tab.Screen name="Produtos" component={ProdutosScreen} />
          <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
