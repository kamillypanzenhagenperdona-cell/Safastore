import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ProdutoCard from '../components/ProdutoCard';
import { useCart } from './context/CardContext'; 
import produtos from '../data/produtos';
import Title from '../components/Title';

export default function ProdutosScreen() {
  const { adicionarAoCarrinho } = useCart();
  return (
    <View style={styles.container}>
      <Title text="Safastore" bold={true} />
      <FlatList
        data={produtos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProdutoCard produto={item} onAdicionar={adicionarAoCarrinho} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1B2A' },
});
