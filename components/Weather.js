import React, { useState } from 'react';
import { ImageBackground, Text, StyleSheet, View} from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    });
    return (
            <ImageBackground source={require("../bg.png")} style = {styles.backdrop}>
                <View style = {styles.highlight}>
                    <Text style = {styles.fontsize}>Zip Code is {props.zipCode}</Text> 
                    <Forecast {...forecastInfo} />
                </View>
                
            </ImageBackground>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,

    },

    fontsize: {
        fontSize: 16,
        textAlign: 'center',
    },



});
   