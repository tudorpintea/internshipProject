import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Icon} from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

class OrderItem extends Component {

    onRowPressed() {
        Actions.orderDetails({order: this.props.order});
    }

    render() {

        const {pickupDate, pickupLocation, destination, distance} = this.props.order

        return (

            <TouchableWithoutFeedback
                onPress={this
                .onRowPressed
                .bind(this)}>
                <View style={styles.containerStyle}>
                    <View style={styles.leftViewStyle}>
                        <Text style={styles.textStyle}>{pickupDate}</Text>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>{pickupLocation}</Text>
                        <Text style={styles.textStyle}>{destination}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.textStyle}>{distance + 'Km'}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderColor: '#adccff',
        margin: 10,
        alignContent: 'center',
        padding: 5,
        backgroudColor: '#adccff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative',
        flex: 1
    },
    leftViewStyle: {
        //  borderRightWidth: 0.5,  borderColor: '#999ea8',
        justifyContent: 'center',
        alignContent: 'center'
    },
    rightViewStyle: {
        //  borderLeftWidth: 0.5, borderColor: '#999ea8',
        justifyContent: 'center',
        alignContent: 'center'
    },
    centerViewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    textStyle: {
        color: '#999ea8',
        fontSize: scale(13),
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: scale(10),
        paddingBottom: scale(10)
    }

}

export {OrderItem};