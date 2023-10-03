import *as React from 'react';
import { ImageBackground, SafeAreaView, Touchable, TouchableOpacity, View } from 'react-native';



export default class InicialScreen extends React.Component{
render(){
    return( 
            <ImageBackground source={require("../assets/bg.png")}>
                <View style = {styles.container}>
                    <View style = {styles.tilteContainer}>
                        <Text style = {styles.titleText}> 
                        LuminApp 
                        </Text>
                    </View>
                        <View style = {styles.initialContainer}>
                            <TouchableOpacity style = { styles.buttonInicial} > 
                            COMEÇAR
                            </TouchableOpacity>
                        </View>
                </View>
            </ImageBackground>
    )
}
}