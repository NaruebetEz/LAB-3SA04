import React, { useState ,useEffect} from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=f64db5994141cbe3ca115dd0799fa05f`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        humidity: json.main.humidity,
                        pressure: json.main.pressure,

                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])



    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        humidity: 0,
        pressure: 0,

    });
    return (
        <ImageBackground source={require("../bg.png")} style={styles.backdrop}>
            <View style={styles.highlight}>
                <Text style={styles.fontsize}>Zip Code is{props.zipCode}</Text>
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
        backgroundColor: 'rgba(238, 130, 238, 0.5)',
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,

    },

    fontsize: {
        fontSize: 16,
        textAlign: 'center',
    },



});
