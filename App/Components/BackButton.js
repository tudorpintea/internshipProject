import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./Styles/BackButtonStyle";
import Icon from "react-native-ionicons";
import {Metrics, Fonts, Colors} from "../Themes/";


class BackButton extends React.Component {
  render() {
    const { title, onPress, icon, customStyle } = this.props;
    return (
      <TouchableOpacity onPress={onPress} color={"#006FFF"}>
        <View style={styles.backButtonWrapper}>
          <Icon
            name={icon}
            size={Metrics.icons.medium}
            color={Colors.blue}
          />
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {title} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export {BackButton}; 