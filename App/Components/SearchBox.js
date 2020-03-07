import React from 'react';
import { TextInput, View} from 'react-native';

const SearchBox = ({value, onChangeText, placeholder,secureTextEntry, onFocus}) => {

    return (

        <View style={styles.containerStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                style={styles.textInputStyle}></TextInput>
        </View>
    )
}

const styles = {
    containerStyle: {
        backgroundColor:'white',
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    textInputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    }
}

export  {SearchBox};