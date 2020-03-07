import {StyleSheet}  from 'react-native'; 
import font from "../../Themes/Fonts"; 
import Fonts from '../../Themes/Fonts';
import { Metrics, Colors } from "../../Themes"

export default StyleSheet.create({ 
    header: { 
        marginTop: Metrics.marginTopHeader,
        alignItems: 'center', 
        borderBottomWidth: Metrics.borderViewWidth,
        borderBottomColor: Colors.steel,
        flexDirection: 'row'
    },
    headerTitleWrapper: { 
        flex: Metrics.flex,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: Metrics.marginRightHeader
    },
    
    headerTitle: { 
        color: Colors.charcoal, 
        fontSize: Fonts.size.regular,
        alignItems: 'center'

    },
    headerBackButton: { 
        alignContent: 'flex-start', 
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    headerStyle: {
        flex: Metrics.flex,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginRight: Metrics.screenWidth/3
      },
      headerTitleStyle: {
        fontSize: Fonts.size.regular,
        color: Colors.charcoal,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }
})