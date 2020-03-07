import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  zero: 0, 
  flex: 1, 
  flex2: 2, 
  marginTopLarge: 100,
  tiniestMarginTop: 1,
  marginHorizontal: 10,
  marginTop: 20,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  tinyMargin: 3,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  buttonRadius: 4,
  //For views with text input like email
  borderRadiusView: 50,
  paddingView: 15,
  borderViewWidth: 1,
  //ImageUpload border Radius
  borderRadiusImageUpload: 30,
  marginHorizontalView: 20,
  //For the buttons
  paddingSmallButton: 10,
  paddingHorizontalButton: 20,
  paddingBiggerButton: 15,
  //Metrics fro back button
  //MargiTopForBackButton
  marginTopBackButton: 6,
  paddingButtonWrapper: 5,
  //Sign UP screen
  termsTextHeight: 30,

  //ConfirmationScreen
  marginHorizontalDescription: 40,
  marginLeftCenteredTitle: 50,
  marginTopTitle: 130,

  //ForHeader
  marginTopHeader: 30,
  marginRightHeader: 70,
  //Custom heights
  customInputTextHeight: 20,

  //For phoneNumberStyle
  marginRightHeaderPhone: 80,

  //Metrics for modal image picker
  imagePadding: 8,
  imageBorderRadius: 5,
  containerHeight: 400,
  imagePadding: 8,

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
