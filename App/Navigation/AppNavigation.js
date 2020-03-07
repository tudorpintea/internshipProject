import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginForm from '../Containers/LoginForm'
import SignUpForm from '../Containers/SignUpForm'
import ForgotPassword from '../Containers/ForgotPassword'
import PhoneNumberForm from '../Containers/PhoneNumberForm'
import ConfirmationScreen from '../Containers/ConfirmationScreen'
import FirstScreen from '../Containers/FirstScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LoginForm: { screen: LoginForm },
  SignUpForm: { screen: SignUpForm },
  ForgotPassword: { screen: ForgotPassword },
  PhoneNumberForm: { screen: PhoneNumberForm },
  ConfirmationScreen: { screen: ConfirmationScreen },
  FirstScreen: { screen: FirstScreen}

}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginForm',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
