import { View, Text } from "react-native";
import React, { Component } from "react";
import {BackButton} from "./BackButton";

//Styles
import styles from "./Styles/HeaderStyles";
import stylesBack from './Styles/BackButtonStyle'

class Header extends Component {
  render() {
    const { backButtonTitle, headerTitle, onPress, customViewStyle, customTitleStyle } = this.props;
    return (
      <View style={styles.header}>
        <BackButton style={stylesBack}title={backButtonTitle} icon={"arrow-back"} onPress={onPress}/>
        <View style={ customViewStyle || styles.headerTitleWrapper}>
          <Text style={ customTitleStyle ||styles.headerTitle}>{headerTitle}</Text>
        </View>
      </View>
    );
  }
}

export {Header};