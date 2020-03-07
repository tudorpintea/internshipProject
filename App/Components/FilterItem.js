import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {Metrics, Colors} from '../../themes';
import {connect} from 'react-redux';
import {addType, removeType} from '../../actions';

class FilterItem extends Component {

    constructor()
    {
        super();
        this.state = {
            clicked: false
        }
    }

    changeState()
    {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    onRowPressed()
    {
        const types = this.props.types;
        const element = this.props.type;

        this.changeState();
        if (!this.state.clicked) {
            this
                .props
                .addType(types, element)
        } else {
            this
                .props
                .removeType(types, element)
        }

    }

    render() {

        return (

            <TouchableWithoutFeedback
                onPress={this
                .onRowPressed
                .bind(this)}>
                <View style={styles.containerStyle}>
                    <View style={styles.leftViewStyle}>
                        <Text style={styles.textStyle}>{this.props.type}</Text>
                    </View>
                    <View>
                        {this.state.clicked
                            ? <Icon name="ios-checkbox" size={30} color={Colors.pink}></Icon>
                            : <Icon name="ios-square-outline" size={30} color={Colors.pink}></Icon>
}
                    </View>
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = {
    containerStyle: {

        alignContent: 'center',
        padding: 10,
        backgroudColor: '#adccff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
    },
    secondContainerStyle: {
        backgroundColor: Colors.darkGrey,
        alignContent: 'center',
        padding: 10,
        backgroudColor: '#adccff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
    },
    leftViewStyle: {
        //  borderRightWidth: 0.5,  borderColor: '#999ea8',
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



export default connect(mapStateToProps, {addType, removeType})(FilterItem);