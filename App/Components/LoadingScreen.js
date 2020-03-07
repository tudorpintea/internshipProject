import React, { Component } from "react";
import { View } from "react-native";
import { Colors, Metrics } from "../Themes";
const Spinner = require("react-native-spinkit");
import ModalPickerImage from '../Components/ModalPickerImage';
class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.loaderBackground}>
        <Spinner
          type={"ThreeBounce"}
          isVisible={true}
          color={Colors.pink}
          size={Metrics.size_60}
        />
      </View>
    );
  }
}

const styles = {
  loaderBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
};

export { LoadingScreen };
