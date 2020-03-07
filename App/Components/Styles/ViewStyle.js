import { StyleSheet } from "react-native";
import { Metrics, Images, Fonts, Colors } from "../../Containers/Styles/themes";


export default StyleSheet.create({
  
  loginButtonStyle: {
    padding: Metrics.paddingSmallButton,
    paddingHorizontal: Metrics.paddingHorizontalButton,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Metrics.borderRadiusView,
    borderColor: Colors.snow,
    borderWidth: Metrics.borderViewWidth,
    marginHorizontal: Metrics.marginHorizontalView
    
  }, 
  imageUpload: { 
    padding: Metrics.paddingSmallButton,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignSelf: 'center'
  }
});
