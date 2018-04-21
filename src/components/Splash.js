import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle}
                    source={require('../Images/Logo.png')}>
                </Image>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    imageStyle:{
        flex:1
    }
})