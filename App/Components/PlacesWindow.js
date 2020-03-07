import React from 'react';
import {Text, View, Modal, FlatList} from 'react-native';
import {CardSection} from './CardSection';


const PlacesWindow = ({data}) => {

    const {containerStyle, textStyle} = styles;

    return (

        <View style={containerStyle}>

            <FlatList
                data={data}
                renderItem={({item}) => <CardSection style={{
                flexDirection: 'column'
            }}>
                <Text>{item.primaryText}</Text>
                <Text>{item.secondaryText}</Text>
            </CardSection>}
                keyExtractor={(item, index) => index.toString()}></FlatList>

        </View>

    )
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'Center',
        backgroundColor: 'white'
    },
    textStyle: {
        flex: 1,
        fontSize: 15,
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'white',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        padding: 10
    }
}

export {PlacesWindow};