import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

class Input extends Component {
    render() {
     const {
         placeholder,
         defaultValue,
         onChangeText,
         secureTextEntry,
         maxLength
     } = this.props;
    return (

        <View style={styles.containerStyle}>
            <TextInput
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                defaultValue={defaultValue}
                onChangeText={onChangeText}
                style={styles.textInputStyle}></TextInput>
        </View>
    );
}
}

const styles = {
    containerStyle: {
        marginLeft: scale(30),
        marginRight: scale(30),
        padding: 5,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: "#999ea8",
        height: verticalScale(45),
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50
    },
    textInputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: scale(16),
        lineHeight: scale(23),
        flex: 2
    }
}

export {Input};