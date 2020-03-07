import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>{props.children}</View>
    )
}

const styles = {
    containerStyle: {
        alignContent: 'center',
        padding: 5,
        backgroudColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
}
export {CardSection};