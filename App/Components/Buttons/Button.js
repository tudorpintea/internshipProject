import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import ButtonStyles from './Styles/ButtonStyles'

const Button = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[ButtonStyles.buttonStyle, style]}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export { Button };
