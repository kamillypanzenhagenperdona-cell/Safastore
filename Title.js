import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title({ text, bold }) {
  return (
    <Text style={[styles.title, bold && styles.bold]}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 33, color: '#A020F0', padding: 18, textAlign: 'center' },
  bold: { fontWeight: 'bold' }
});
