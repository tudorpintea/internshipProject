import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Input, Card, CardSection} from '../Components';
import {connect} from 'react-redux';
import styles from './Styles/AuthStyles';
import { Button, TextButton } from '../Components/Buttons';
import SafeAreaView from 'react-native-safe-area-view';
import {Header} from '../Components/Header';



class ForgotPassword extends Component {
  onBackPress = () => {
    const { navigate } = this.props.navigation;
    navigate("LoginForm");
  };

    render () {
        return (
            <View styles={styles.containerStyle}>
                <SafeAreaView>
             <Header
                headerTitle="Forgot Password"
                backButtonTitle="Login"
                onPress={this.onBackPress}
             />
        </SafeAreaView>
        <View style={styles.forgotContainer}>

                     <Text style={styles.forgotTitle}>
                     {"Enter your e-mail address and we'll \n help you reset your password"}
                     </Text>
                     <Card>
                         <CardSection>
                            <Input
                              placeholder="E-mail"
                              
                            >
                            </Input>
                         </CardSection>
                       <View style={styles.forgotButton}>
                         <CardSection>
                             <Button
                              
                             >
                             {"SEND ME THE LINK"}
                             </Button>
                         </CardSection>
                       </View>  
                     </Card>
                </View>
            </View>
        )
    }
}

export default connect(null,null)(ForgotPassword);