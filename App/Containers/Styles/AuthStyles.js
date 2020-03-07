import { StyleSheet, Dimensions } from "react-native";
import { Metrics, Colors, Fonts } from "./themes";
import { scale, verticalScale } from "react-native-size-matters";

export default  styles=StyleSheet.create({
  //style for every component
 
  logoStyle: {
    alignSelf: "center",
    width: Dimensions.get("window").width,
    height: verticalScale(3500),
    marginBottom: scale(Metrics.marginBottomLogo),
    flex: 1
  },
  containerStyle: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    
  },
    phoneNumberPickerStyle: {
      flex: Metrics.flex,
      alignItems: "center",
      padding: Metrics.paddingHorizontalButton,
      marginTop: Metrics.marginTop
  },

  forgotContainer: {
    marginTop: verticalScale(100)
  },
  textStyle: {
    color: Colors.lightGrey,
    fontSize: Metrics.size_13,
    fontWeight: Fonts.w_600,
    paddingTop: Metrics.paddingTop,
    paddingBottom: Metrics.paddingBottom
  },
  imageStyle: {
    height: Metrics.size_80,
    width: Metrics.size_80,
    borderRadius: Metrics.imageRadius,
    overflow: "hidden",
    alignSelf: "center",
    borderWidth: Metrics.borderWidth,
    borderColor: Colors.lightGrey,
    marginBottom: scale(Metrics.size_20)
  },
  checkBox: {
    flex: 1,
    padding: Metrics.paddingTop
  },
  container: {
    marginRight: Metrics.size_10,
    alignItems: "center",
    paddingTop: Metrics.size_20
  },
  termsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(Metrics.size_10),
    flex: 1
  },
  termsText: {
    textAlign: "center",
    alignSelf: "center"
  },
  checkBoxButton: {
    alignContent: "center"
  },
  termsClick: {
    justifyContent: "center"
  },
  forgotTitle: {
    color: Colors.darkGrey,
    fontSize: Metrics.size_16,
    fontWeight: "300",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: verticalScale(20)
  },
  forgotButton: {
    marginTop: verticalScale(20)
  },
  titleStyle: {
    fontWeight: "600",
    fontSize: Metrics.size_18,
    color: Colors.darkGrey
  },
  titleContainer: {
    marginHorizontal: scale(Metrics.size_30),
    marginTop: verticalScale(Metrics.size_100),
    marginBottom: scale(Metrics.size_20)
  },
  desciptionStyle: {
    textAlign: "center",
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: scale(Metrics.size_30),
    marginBottom: scale(Metrics.size_20)
  },
  disableButton: {
    backgroundColor: Colors.lightGrey
  },
  termsViewStyle: {
    height: Metrics.termsTextHeight,
    flexDirection: "row",
    justifyContent: 'flex-start'
  },
  termsTextStyle: {
    flex: Metrics.flex, 
    alignSelf: 'flex-end',
    paddingLeft: Metrics.paddingHorizontalButton,
    paddingTop: Metrics.smallMargin
  },
  checkBoxStyle: {
    flex: Metrics.flex,
    alignItems: 'flex-end',
    paddingRight: Metrics.paddingHorizontalButton
  }

});
