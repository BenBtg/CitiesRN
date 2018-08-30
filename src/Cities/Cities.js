import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback} from 'react-native'

import {colors} from '../theme'

export default class Cities extends React.Component{
    static navigationOptions = {
        title: 'Cities',
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400',
        }
    }

    viewCity = (city) => {
        console.log('Navigating to :', city);
        this.props.navigation.navigate('City', {city})
    }

    render() {
        return (
                <FlatList 
                    data={ this.props.screenProps.cities }
                    renderItem={({item}) => 
                    <View>
                        <TouchableWithoutFeedback onPress={() => this.viewCity(item)}>
                        <View style={styles.cityContainer}>
                            <Text style={styles.city}>{item.city}</Text>
                            <Text style={styles.country}>{item.country}</Text>
                        </View>
                        </TouchableWithoutFeedback>
                    </View>}
                    ListEmptyComponent={<View style={styles.emptyTextContainer}>
                        <Text style={styles.emptyText}>No cities added</Text>
                    </View>}
                /> 
        )
    }
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth : 2,
        borderBottomColor: colors.primary
    },
    emptyTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    city: {
        fontSize: 20
    },
    country: {
        color: '#536'
    }
}
)