import { StyleSheet, Dimensions } from "react-native";
import { Metrics, Colors, Fonts } from "../../Containers/Styles/themes"

import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
    containerStyle: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderColor: "#999ea8",
    height: 45,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  textInputStyle: {
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 16,
    lineHeight: 23,
    flex: 2
  }
});