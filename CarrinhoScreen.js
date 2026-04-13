import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useCart } from './context/CardContext';
import Button from '../components/Button'; // Importe o componente [cite: 312]

export default function CarrinhoScreen() {
  const { carrinho, finalizarCompra } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCarrinho}>
            <Text style={{color: '#fff'}}>{item.nome} - R$ {item.preco}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Carrinho vazio</Text>}
      />
      <Button 
        label="Finalizar Compra" 
        onPress={finalizarCompra} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1B2A', padding: 20 },
  itemCarrinho: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#A020F0' },
  vazio: { color: '#fff', textAlign: 'center', marginTop: 50 },
});
