import { StyleSheet } from "react-native";
import {Metrics,  Colors} from "../../Themes"; 

export default StyleSheet.create({
  imageUpload: {
    alignSelf: 'center', 
    borderRadius: Metrics.borderRadiusImageUpload,
    borderColor: Colors.steel,
    borderWidth: Metrics.borderViewWidth,
    width: Metrics.images.large,
    height: Metrics.images.large
  }
});