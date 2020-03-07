
import { Metrics, Colors, Fonts } from "../../../Containers/Styles/themes"
import {scale, verticalScale} from 'react-native-size-matters';
import { StyleSheet } from 'react-native'


export default styles= StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    position: "relative",
    flex: 1,
    alignSelf: "center",
    bottom: 50
  },
  imageStyle: {
    alignSelf: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    overflow: "hidden",
    borderWidth: Metrics.borderWidth,
    borderColor: Colors.lightGrey,
    marginBottom: scale(Metrics.size_20)
  
    },
    buttonStyle: {
    flex: 1,
    backgroundColor: "#EB505D",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    height: verticalScale(45),
    borderRadius: 50,
    marginLeft: scale(30),
    marginRight: scale(30)
  },
  textStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: scale(16),
    fontWeight: "600",
    paddingTop: scale(10),
    paddingBottom: scale(10)
  },
  saveButtonStyle: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    height: verticalScale(45),
    borderRadius: 50,
    marginLeft: scale(30),
    marginRight: scale(30)
  },
   textButtonStyle: {
        color: '#EB505D',
        fontSize: scale(13),
        fontWeight: '600',
        paddingTop: scale(10),
        paddingBottom: scale(10)
    },
    labelButton: {
        color: '#999ea8',
        fontSize: scale(13),
        fontWeight: '600',
        paddingTop: scale(10),
        paddingBottom: scale(10)
    },
    buttonTextStyle: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'stretch'
    }
})