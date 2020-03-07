import React, {Component} from 'react';
import { View, Text, TextInput} from 'react-native';
import {CardSection, Input, TextButton, Button, Card} from './common';
import styles from './Styles/ConfirmationScreenStyles';
import {connect} from 'react-redux';



class ConfirmationScreen extnds Component {
    constructor(props)
    {
        super(props);
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }
    
    render() {
        return (
            <View style={styles.container}>
                 <View>
                   <View style={styles.titleContainer}>
                      <Text style={styles.titleStyle}
                       >{"Confirmation code"}</Text>  
                   </View>

                   <CardSection style={styles.inputContainerStyles}>
                     <TextInput
                        style={styles.textInputStyle}
                        placeholder="1"
                        maxLength={1}
                        blurOnSubmit={false}
                        keyboardType={'numeric'}
                        returnKeyType={"next"}
                     >
                     </TextInput>

                     <TextInput
                     style={styles.textInputStyle}
                      placeholder="2"
                      maxLength={1}
                      blurOnSubmit={false}
                      keyboardType={'numeric'}
                      returnKeyType={'next'}
                     >
                     </TextInput>

                     <TextInput
                     style={styles.textInputStyle}
                      placeholder="3"
                      maxLength={1}
                      blurOnSubmit={false}
                      keyboardType={'numeric'}
                      returnKeyType={'next'}>
                     </TextInput>

                     <TextInput
                     style={styles.textInputStyle}
                      placeholder="4"
                      maxLength={1}
                      blurOnSubmit={false}
                      keyboardType={'numeric'}
                      returnKeyType={'done'}>
                     </TextInput>
                   </CardSection>

                   <View style={styles.descriptionContainer}>
                      <Text style={styles.descriptionStyle}>
                      {`Please enter the verification code\nsent to ${this.props.phoneNumber}`}</Text>
                   </View>

                   <CardSection>
                       <TextButton    />
                   </CardSection>

                 </View>
            </View>
        )
    }
}