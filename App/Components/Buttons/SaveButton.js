import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import styles from './Styles/ButtonStyles'
import textStyle from './Styles/TextStyle'
const SaveButton = ({ onPress, children, style, backGroundColor, activeOpacity,  disabled}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.saveButtonStyle, style]} activeOpacity={activeOpacity} disabled={disabled}>
        <View style={ styles.saveButtonStyle} backgroundColor={backGroundColor}>
      <Text style={textStyle.normalWhiteText }>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { SaveButton };
