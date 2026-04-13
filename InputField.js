import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputField({ placeholder, secureTextEntry, onChangeText }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e7e7ef',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
  },
});
