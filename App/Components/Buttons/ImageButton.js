import React , {Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Metrics, Colors } from "../../Containers/Styles/themes";
import { scale } from "react-native-size-matters";
import ButtonStyles from './Styles/ButtonStyles'


const  ImageButton =({ onPress, path }) => {
  
    //const { onPress, path } = this.props
    return (
      <TouchableOpacity onPress={onPress} >
        <Image
          style={ButtonStyles.imageStyle}
          source={require("./assets/profile-picture.png")}
        >
        </Image>  
      </TouchableOpacity>
    );
  }



export { ImageButton }
