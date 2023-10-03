import *as React from 'react';
import { ImageBackground, SafeAreaView, Touchable, TouchableOpacity, View, StyleSheet, TextInput, Button, Text } from 'react-native';


export default class InicialScreen extends React.Component{
    render(){
        return( 
                <ImageBackground source={require("../assets/bg.png")}>
                    <View style = {styles.container}>
                        <View style = {styles.tilteContainer}>
                            <Text style = {styles.titleText}> 
                            Cadastro
                            </Text>
                        </View>
                        <Text style={styles.inputText}>Nome:</Text>
                         <TextInput
                            style={styles.inputBox}
                            placeholder="Jose"
                            placeholderTextColor="#2B2B2B"
                        />
                        <Text style={styles.inputText}>E-mail:</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="josefa@hotmail.com"
                            placeholderTextColor="#2B2B2B"
                        />
                        <Text style={styles.inputText}>Senha:</Text>
                         <TextInput
                            style={styles.inputBox}
                            placeholder="Josefa123"
                            placeholderTextColor="#2B2B2B"
                        />
                        <Text style={styles.inputText}>Comfirmar senha:</Text>
                         <TextInput
                            style={styles.inputBox}
                            placeholder="Josefa123"
                            placeholderTextColor="#2B2B2B"
                        />
                            <View>
                           

                            <TouchableOpacity  onPress={() => navigation.navigate('./screens/LoginScren')} style={styles.buttonContainer}>
                              <Text>"Cadastrar!"</Text>

                            </TouchableOpacity>
                           
                            </View>
                    </View>
                </ImageBackground>
        )
    }
    }


    const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding:20,
    borderRadius:12,
    marginTop: 50,
  },
  inputText:{
    fontSize:18,
    padding:5
  },
  inputBox:{
    borderWidth:1,
    borderColor:"2B2B2B",
    padding:10,
    borderRadius:12,
    backgroundColor:"white"
  }
  
});
