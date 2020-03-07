import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import ProfileScreen from './ProfileScreen';
import PlusScreen from './PlusScreen';
import OrderDetailsScreen from './OrderDetailsScreen';
import OrderHistoryScreen from './OrderHistoryScreen';


 class FirstScreen extends Component {
   render() { 
        return (   
           <View>
           
           </View>
             ); 
             }}

export default connect(null, null)(FirstScreen)
