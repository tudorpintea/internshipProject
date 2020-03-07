import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Card, CardSection, Input} from "../Components";
import {Header} from '../Components/Header';
import  {Button} from "../Components/Buttons";
import {ImageButton} from '../Components/Buttons/ImageButton'
import {SaveButton} from "../Components/Buttons/SaveButton"
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text
} from "react-native";
import Navigation from "react-navigation";
import { AvatarImage } from '../Components/AvatarImage';
import { connect } from "react-redux";
import styles from "./Styles/AuthStyles";
import * as fromSignUp from "../Redux/SignUp";
import Icon from "react-native-ionicons";
import { emailValidation } from "../utils";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ImagePicker  from "react-native-image-picker";
import SafeAreaView from 'react-native-safe-area-view';
import stylesH from '../Components/Styles/HeaderStyles'
import { Colors } from "../Themes";
import saveButtonStyle from '../Components/Buttons/Styles/ButtonStyles'

class SignUpForm extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        regState: {
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          confirmPassword: "",
          avatarSource: ""

        },
        photo:"",
        checkedTerms: false,
      });
  }
  onSendButtonChange = () => {
    console.log("INTRA IN BUTON")
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword
    } = this.state.regState;
    const { checkedTerms } = this.state;
    if (
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      confirmPassword !== "" &&
      checkedTerms === true
    ) {
      return true;
    }
    return false;
  };
  onFirstNameChanged = firstName => {
    const { password, email, lastName, confirmPassword } = this.state.regState;
    const newReg = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      firstName,
      lastName: lastName
    };
    this.setState(() => ({ regState: newReg }));
  };

  onLastNameChanged = lastName => {
    const { password, email, firstName, confirmPassword } = this.state.regState;
    const newReg = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName
    };
    this.setState(() => ({ regState: newReg }));
  };
  onEmailSignChanged = email => {
    const {
      password,
      firstName,
      lastName,
      confirmPassword
    } = this.state.regState;
    const newReg = {
      email,
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName
    };
    this.setState(() => ({ regState: newReg }));
  };

  onPasswordSignChanged = password => {
    const { firstName, email, lastName, confirmPassword } = this.state.regState;
    const newReg = {
      email: email,
      password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName
    };
    this.setState(() => ({ regState: newReg }));
  };

  onChangeIconPress = () => {
    const { checkedTerms } = this.state;
    this.setState({ checkedTerms: !checkedTerms });
  };

  uploadImageToAPI = photo => {
    const { uploadImage } = this.props;
    uploadImage({ photo });
  };

  renderCheckBox = () => {
    const { checkedTerms } = this.state;

    return checkedTerms ? (
      <Icon name={"ios-checkbox"} size={30} color={"#000"} />
    ) : (
      <Icon name={"ios-square-outline"} size={30} color={"#000"} />
    );
  };

  onConfirmPasswordChanged = confirmPassword => {
    const { password, email, lastName, firstName } = this.state.regState;
    const newReg = {
      email: email,
      password: password,
      confirmPassword,
      firstName: firstName,
      lastName: lastName
    };
    this.setState(() => ({ regState: newReg }));
  };
 
onSavePress = () => {
  const { regState, checkedTerms } = this.state;
  const { registerUser } = this.props;
  const { firstName, lastName, email, password } = this.state.regState;
  const { navigate } = this.props.navigation;

  this.setState({ regState });
  registerUser(regState);
  if (
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "" &&
    regState.confirmPassword !== "" &&
    password === regState.confirmPassword &&
    checkedTerms === true
  ) {
    navigate("PhoneNumberForm");
  }
};


  
  onLoginPress = () => {
    const { navigate } = this.props.navigation;
    navigate("LoginForm");
  };

  render() {
    const { regState } = this.state;
    return (
      // view is for wrapping all comp
      <View style={styles.containerStyles}>
        <SafeAreaView>
             <Header
                headerTitle="Sign Up"
                backButtonTitle="Login"
                onPress={this.onLoginPress}
             />
        </SafeAreaView>
        <View>
          <AvatarImage callBackFromSignUpScreen={this.uploadImageToAPI} />
        </View>

          <CardSection>
            <Input
              placeholder="First Name"
              onChangeText={this.onFirstNameChanged}
              value={this.state.regState.firstName}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="Last Name"
              onChangeText={this.onLastNameChanged}
              value={this.state.regState.lastName}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="Email"
              onChangeText={this.onEmailSignChanged}
              value={this.state.regState.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={this.onPasswordSignChanged}
              value={this.state.regState.password}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="Confirm Password"
              onChangeText={this.onConfirmPasswordChanged}
              value={this.state.regState.confirmPassword}
            />
          </CardSection>

          <CardSection>
            <View style={styles.termsContainer}>
              <TouchableOpacity
                style={{
                  justifyContent: "center"
                }}
              >
                <Text>I agree to the terms & conditions</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.checkBoxButton}
                onPress={this.onChangeIconPress}
              >
                {this.renderCheckBox()}
              </TouchableOpacity>
            </View>
          </CardSection>
          <CardSection>
            <SaveButton
              disabled={this.onSendButtonChange() ? false : true}
              onPress={this.onSavePress}
              backGroundColor={
                this.onSendButtonChange() ? Colors.magenta : Colors.lightGrey
              }
              customStyle={saveButtonStyle}
              > Save
            </SaveButton>
          </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    regi: fromSignUp.regi(state),
    photo: fromSignUp.photo(state)
  };
};

const mapDispatchToProps = dispatch => ({
  emailSignChanged: email =>
    dispatch(fromSignUp.SignUpActions.emailSignChanged({ email })),
  passwordSignChanged: password =>
    dispatch(fromSignUp.SignUpActions.passwordSignChanged({ password })),
  firstNameChanged: firstName =>
    dispatch(fromSignUp.SignUpActions.firstNameChanged({ firstName })),
  lastNameChanged: lastName =>
    dispatch(fromSignUp.SignUpActions.lastNameChanged({ lastName })),
  confirmPasswordChanged: confirmPassword =>
    dispatch(
      fromSignUp.SignUpActions.confirmPasswordChanged({ confirmPassword })
    ),
  registerUser: regi =>
    dispatch(fromSignUp.SignUpActions.registerUser({ regi })),
  uploadImage: photo =>
   dispatch(fromSignUp.SignUpActions.uploadImage(photo) )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
