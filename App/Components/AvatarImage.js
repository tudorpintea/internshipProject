import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import ImagePicker from "react-native-image-picker";
import { TouchableOpacity } from "react-native";
import imageStyle from "./Styles/ImageUploadStyle";
import profilePicture from "./Buttons/assets/profile-picture.png";
import styles from "../Components/Styles/ViewStyle";

class AvatarImage extends Component {
  constructor() {
    super();
    this.state = {
      photo: null,
      showAvatar: true
    };
  }



  handleChoosePhoto = () => {
    const options = {
      noData: true
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response ,showAvatar: false});
        this.props.callBackFromSignUpScreen(response); 
      }
      
    });
  };
  render() {
    const { photo, showAvatar } = this.state;
    return (
      <View style={styles.imageUpload}>
        <TouchableOpacity onPress={this.handleChoosePhoto}>
          <Image
            style={imageStyle.imageUpload}
            source={showAvatar === true ? profilePicture : { uri: photo.uri }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export {AvatarImage};