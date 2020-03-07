import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Input, PhoneNumberInput} from '../Components'
import { connect } from 'react-redux'
import PhoneInput from 'react-native-phone-input'
import { Actions } from 'react-native-router-flux'
import ModalPickerImage from '../Components/ModalPickerImage'
import {Button, TextButton} from '../Components/Buttons'
import SafeAreaView from 'react-native-safe-area-view';
import styles from './Styles/AuthStyles'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import {Header} from '../Components/Header';
import Navigation from "react-navigation";
import * as fromSign from "../Redux/SignUp";
import Metrics from '../Themes/Metrics';




class PhoneNumberForm extends Component {
  constructor(props) {
    super(props);
    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.state = {
      pickerData: null,
      phoneNumberState: "",
      responseState: "",
      countryCode: ''
    };
  }
 

  onPressFlag() {
    this
        .myCountryPicker
        .open();
}


  
  componentDidMount() {
      this.setState({
          pickerData: this
              .phone
              .getPickerData()
      });
  }

  selectCountry(country) {
    this
        .phone
        .selectCountry(country.iso2);
}



 // onChangePhoneNumber = phoneNumber => {
   // this.setState({ phoneNumberState: phoneNumber });
  //};
  onPhoneNumberChanged(phoneNumber)
    {
        this.setState({ phoneNumberState: phoneNumber})
    }


   onSendPress = () => {
    const { phoneNumberState } = this.state;
    const { savePhoneNumber, response } = this.props;
    const { navigate } = this.props.navigation;
    savePhoneNumber(phoneNumberState);
    if (response.message === "Code was sent") {
      this.props.navigation.navigate("ConfirmationScreen")
    } else {
      alert("INVALID NUMBER");
    }
      this.props.navigation.navigate("ConfirmationScreen")
    console.log(response.message,' INTRA IN RESP');
   }


   onLoginPress = () => {
    const { navigate } = this.props.navigation;
    navigate("SignUpForm");
  };


  onChangePhoneNumberFromPhoneInput = phoneNumber => {
    this.setState({ phoneNumberState: phoneNumber });
  };


  render () {
    return (
      <View >
        <Card>
        <SafeAreaView>
             <Header
                headerTitle="Phone Confirmation"
                backButtonTitle="Register"
                onPress={this.onLoginPress}
             />
        </SafeAreaView>

        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>
              {'Confirm your number'}
            </Text>
        </View>

        <View style={styles.inputContainer}>
          <View>
          <PhoneInput
                                initialCountry='ro'
                                ref={(ref) => {
                                this.phone = ref;
                            }}
                                onPressFlag={this.onPressFlag}/>
              
              <ModalPickerImage
                                ref={(ref) => {
                                this.myCountryPicker = ref;
                            }}
                                data={this.state.pickerData}
                                onChange={(country) => {
                                this.selectCountry(country);
                            }}
                                cancelText="Cancel"/>
          </View>
          <PhoneNumberInput
                            placeholder='Enter Phone Number'
                            onChangeText={this
                            .onPhoneNumberChanged
                            .bind(this)}
                            value={this.state.phoneNumberState}></PhoneNumberInput>        
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionStyle}>
              {'A one-time confirmation code will be sent to \n the number provider'}
            </Text>
          </View>
          <CardSection>
            <Button
            onPress={this.onSendPress}>
              {'Send'}
            </Button>
          </CardSection>
          </Card>
      </View>
    )
  }
}
const mapStateToProps = state => ({
  phoneNumber: fromSign.phoneNumber(state),
  response: fromSign.response(state)
});

const mapDispatchToProps = dispatch => ({
   savePhoneNumber: phoneNumber => 
     dispatch(fromSign.SignUpActions.savePhoneNumber({phoneNumber}))
}
);

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumberForm)
