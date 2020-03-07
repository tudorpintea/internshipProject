import React, { Component } from "react";
import {  Card, CardSection, Input } from "../Components";
import { View, Image, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import * as fromLogin from "../Redux/Login";
import { Alert, AsyncStorage } from "react-native";
import styles from "./Styles/AuthStyles";
import { emailValidation } from "../utils";
import {Button, TextButton} from '../Components/Buttons';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Navigation from "react-navigation";


class LoginForm extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        authState: {
          email: "",
          password: "",
          loginFailed: null
        },
        loginPressed: false
      });
  }
  componentDidUpdate(prevProps, prevState) { 
    const {email, password, loginFailed} = this.props.auth; 
    const { navigate } = this.props.navigation; 
    console.log(this.props, "props in componentDidUpdate");
    if(email !== "" && password !== "" && loginFailed === false){ 
      navigate("FirstScreen"); 
    }
  }

  onEmailChange = email => {
    const { password, loginFailed } = this.state.authState;
    const newAuth = {
      email,
      password: password,
      loginFailed: loginFailed
    };
    this.setState(() => ({ authState: newAuth }));
  };
  onPasswordChange = password => {
    const { email, loginFailed } = this.state.authState;
    const newAuth = {
      email: email,
      password,
      loginFailed: loginFailed
    };
    this.setState(() => ({ authState: newAuth }));
  };
  onLoginPress = () => {
    const { authState } = this.state;
    const { loginFailed, email, password } = this.state.authState;
    const { login } = this.props;
    const { navigate } = this.props.navigation;
    login(authState);
    console.log("OARE MERGE", authState.loginFailed,"  ",authState.email,'  ',authState.password);
    if (loginFailed === null && email !== "" && password !== "") {
         () => this.props.navigation.navigate("FirstScreen")
     }
    
  };
  onSignUpPress = () => {
    this.props.navigation.navigate("SignUpForm")
    
  };
  onForgotPress = () => {
    this.props.navigation.navigate("ForgotPassword")
  }

  render() {
    console.log(this.props, 'props');
    const { authState } = this.state;

    return (
      <View style={styles.containerStyle}>
        <Image
          style={styles.logoStyle}
          source={require("../Images/Screen-Logo.jpg")}
        />

        <Card>
          <CardSection>
            <Input
              placeholder="Email"
              onChangeText={this.onEmailChange}
              defaultValue={authState.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={this.onPasswordChange}
              defaultValue={authState.password}
            />
          </CardSection>
          <CardSection>
            <Button onPress={this.onLoginPress}> Login</Button>
          </CardSection>

          <CardSection>
            <TextButton onPressText="FORGOT PASSWORD?" 
             onPress={this.onForgotPress.bind(this)}
            />
          </CardSection>
        </Card>

        <CardSection>
          <TextButton
            onPress={this.onSignUpPress.bind(this)}
            label="Don't have an account? "
            onPressText="Sign Up"
          />
        </CardSection>
      </View>
    );
  }
}
const mapStateToProps = state => ({
           auth: fromLogin.auth(state)
            
});

const mapDispatchToProps = dispatch => ({
  saveEmail: email => dispatch(fromLogin.LoginActions.saveEmail({ email })),
  savePassword: password =>
    dispatch(fromLogin.LoginActions.savePassword({ password })),
  login: auth =>
    dispatch(fromLogin.LoginActions.login({auth}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
