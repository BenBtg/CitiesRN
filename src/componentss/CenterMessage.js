import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import {colors} from '../theme'

export default function CenterMessage ({ message }) {
    <View style={styles.container}>
        <Text style={styles.container}>{message}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 11,
        borderBottomColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})