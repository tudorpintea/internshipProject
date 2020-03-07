import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from './Styles/PhoneNumberInputStyle';
const PhoneNumberInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInputStyle}
      />
    </View>
  );
};


export { PhoneNumberInput };
