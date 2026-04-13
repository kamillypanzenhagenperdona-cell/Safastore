import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ label, onPress }) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.txt}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0F3460',
    padding: 14,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  txt: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
