import React from "react";
import{View,Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function Forecast(props) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.fontsize}>{props.main}</Text>

            <View style = {styles.container}>
                <Text >{props.description}</Text>
            </View>
            
            <View style = {styles.container}>
                <Text style = {styles.fontsize}>{props.temp}°C</Text>
            </View>

            <View style = {styles.container}>
                <Text style = {styles.fontsize}>{props.humidity} %</Text>
            </View>

            <View style = {styles.container}>
                <Text style = {styles.fontsize}>{props.pressure} hPa</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },

    fontsize: {
        fontSize: 36
    }
})