import React, { Component } from 'react'
import {
  Card,
  CardSection,
  Input
} from '../Components';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/AuthStyles'
import { Button, TextButton } from '../Components/Buttons'
import Navigation from "react-navigation";
import {Header} from '../Components/Header';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import * as fromSign from "../Redux/SignUp";
import * as styleH from '../Components/Styles/HeaderStyles'
class ConfirmationScreen extends Component {
  constructor(props) {
    super(props);
    this.focusNextField = this.focusNextField.bind(this);

    (this.inputs = []),
      (this.state = {
        digit1: null,
        digit2: null,
        digit3: null,
        digit4: null
      });
  }
  onLoginPress = () => {
    const { navigate } = this.props.navigation;
    navigate("PhoneNumberForm");
  };

  onDigit1Changed = text => {
    this.focusNextField("2");
    this.setState({ digit1: text });
  };
  onDigit2Changed = text => {
    this.focusNextField("3");
    this.setState({ digit2: text });
  };
  onDigit3Changed = text => {
    this.focusNextField("4");
    this.setState({ digit3: text });
  };
  onDigit4Changed = text => {
    this.setState({ digit4: text });
  };

  focusNextField(id) {
    this.inputs[id].focus();
  };
  onSendPress = () => {
    const { digit1, digit2, digit3, digit4 } = this.state;
    const digits = [digit1, digit2, digit3, digit4];
    const { verifyCode, response } = this.props;
    const { navigate } = this.props.navigation;
    verifyCode(digits.join(""));
    console.log(response.message, "MESAJJJJJ")
    if (response.message === "Success") {
      navigate("FirstScreen");
    } else {
      alert("invalid code");
    }
  };
  onResendPress = () => {
    const { phoneNumber, savePhoneNumber } = this.props;
    savePhoneNumber(phoneNumber);
    alert(Strings.CodeSent);
  };
  render () {
    return (
      <View style={styles.container}>
           <SafeAreaView>
             <Header
                headerTitle="Sign Up"
                backButtonTitle="Phone Confirmation"
                onPress={this.onLoginPress}
                customViewStyle={styleH.headerStyle}
                customTitleStyle={styleH.headerTitleStyle}
             />
        </SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{'Confirmation code'}</Text>
        </View>

        <CardSection style={styles.inputContainerStyle}>
          <TextInput
            style={styles.textInputStyles}
            placeholder="1"
            keyboardType={'numeric'}
            returnKeyType={'next'}
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="2"
            keyboardType={'numeric'}
            returnKeyType={'next'}
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="3"
            keyboardType={'numeric'}
            returnKeyType={'next'}
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="4"
            keyboardType={'numeric'}
            returnKeyType={'done'}
          />
        </CardSection>

        <View styles={styles.descriptionContainer}>
          <Text style={styles.descriptionStyles}>{`Please enter the verification code \nsent to `}
          </Text>
        </View>

        <CardSection>
          <Button
          onPress={this.onSendPress}
          >
            {'Send'}
          </Button>
        </CardSection>

        <CardSection>
          <TextButton
            onPressText={'Resend Code'}
          >
          </TextButton>
        </CardSection>
      </View>
    )
  }
}
const mapStateToProps = state => ({
  phoneNumber: fromSign.phoneNumber(state),
  response: fromSign.response(state)
});

const mapDispatchToProps = dispatch => ({
  verifyCode: code => dispatch(fromSign.SignUpActions.verifyCode({ code })),
  savePhoneNumber: phoneNumber =>
    dispatch(fromSign.SignUpActions.savePhoneNumber({ phoneNumber }))
});
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationScreen)
