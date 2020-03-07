import {StyleSheet} from 'react-native'; 
import {Metrics, Fonts, Colors} from "../../Themes"

export default StyleSheet.create({
    backButtonWrapper: { 
        flexDirection: 'row',
        padding: Metrics.paddingButtonWrapper,
        marginTop: Metrics.tinyMargin
    },
    viewStyle: { 
        marginTop: Metrics.marginTopBackButton, 
        marginLeft: Metrics.baseMargin
    },
    textStyle: { 
        color: Colors.blue,
        fontSize: Fonts.size.medium
    }
})