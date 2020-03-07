import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import ButtonStyles from './Styles/ButtonStyles'

const TextButton = ({onPress, label, onPressText}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonTextStyle}>
            <Text style={styles.labelButton}>{label}</Text>
            <Text style={styles.textButtonStyle}>{onPressText}</Text>
        </TouchableOpacity>
    )
}
export {TextButton};