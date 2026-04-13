import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

export default function ProdutoCard({ produto, onAdicionar }) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{produto.emoji}</Text>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
      <Button 
        label="Adicionar" 
        onPress={() => onAdicionar(produto)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#1B2A3B', borderRadius: 19, padding: 16, margin: 10, alignItems: 'center' },
  emoji: { fontSize: 48 },
  nome: { fontSize: 18, color: '#fff' },
  preco: { color: '#A020F0', marginBottom: 10 },
});
