import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../../helpers/colors";

const InputForm = ({ label, keyboardType, secure, onUpdateValue, value, isInvalid }) => {
  return (
    <View>
      {/* <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text> */}
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        // autoCapitalize={false}
        placeholder={label}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "white",
    marginBottom: 4,
  },
  labelInvalid: {
    color: COLORS.error500,
  },
  input: {
    // width: "80%",
    height: 50,
    minWidth:250,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    // paddingHorizontal: 16,
    marginBottom: 16,
  },
  inputInvalid: {
    backgroundColor: COLORS.error100,
  },
});
export default InputForm;
//ehabreda04@gmail.com
//ehabred04@gmail.com