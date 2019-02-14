import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView,TouchableOpacity,TextInput,StatusBar,ImageBackground} from 'react-native';



export default class Login extends Component {
    static navigationOptions = {
        header: null,
      };
  render() {
    return (
    <ImageBackground source={require('../Images/background.png')} style={{width: '100%', height: '100%'}}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                source={require('../Images/Spotifylogo2.png')}/>
                <Text style={styles.title2}>Jutaan lagu.</Text>
                <Text style={styles.title1}>Gratis di Spotify.</Text>
        </View>
                <View style={styles.formContainer}>
                <View style={styles.containerform}>
                <StatusBar
                barStyle="light-content"/>
               

                <TouchableOpacity style={styles.buttonContainerA} onPress={() => this.props.navigation.navigate('daftargratis')}>
                        <Text style={styles.buttonText}>DAFTAR GRATIS</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.buttonContainerB} onPress={() => this.props.navigation.navigate('daftarfacebook')}>
                        <Text style={styles.buttonText}>LANJUTKAN DENGAN FACEBOOK</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonContainerC} onPress={() => this.props.navigation.navigate('daftaremail')}>
                        <Text style={styles.buttonTextA}>MASUK</Text>
                </TouchableOpacity>  
                
                </View>
        
        </View>
       
        
      </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow:1,
        paddingTop:5,
    },
    logo:{
        marginTop:0,
        width:200,
        height:80,
    },
    title2:{
        color:'white',
        marginTop:50,
        width:160,
        textAlign:'center',
        fontSize:28,
        fontWeight:'700',

    },
    title1:{
        color:'white',
        marginTop:10,
        width:300,
        textAlign:'center',
        fontSize:28,
        fontWeight:'700',
    },
    containerform:{
        padding:20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        color:'#FFF',
        padding:10,

    },
    buttonContainerA:{
        backgroundColor:'#2ecc71',
        paddingVertical:10,
        marginBottom:20,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#2ecc71',
    },
    buttonContainerB:{
        backgroundColor:'#2980b9',
        paddingVertical:10,
        marginBottom:20,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#2980b9',
    },
    buttonContainerC:{
        backgroundColor:'#ecf0f1',
        paddingVertical:10,
        marginBottom:20,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#ecf0f1',
    },
    buttonText:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700',
    },
    buttonTextA:{
        textAlign:'center',
        color:'black',
        fontWeight:'700',
    }
    
})
