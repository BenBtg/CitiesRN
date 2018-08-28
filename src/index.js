import React from 'react'

import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'

import {createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { colors } from './theme';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const CitiesNav = createStackNavigator({
    Cities: {screen: Cities },
    City: {screen: City}
    },
    {
    navigationOptions: {headerStyle: {backgroundColor: colors.primary}, headerTintColor: '#fff'}
})


const Tabs = createBottomTabNavigator({
    Cities: {screen: CitiesNav},
    AddCity: {screen: AddCity}
},)

export default Tabs