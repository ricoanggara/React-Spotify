import React, { Component } from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView,TouchableOpacity,TextInput,ImageBackground} from 'react-native';

export default class DaftarEmail extends Component {
    static navigationOptions = {
      title:"DaftarEmail",
        headerStyle: {
          backgroundColor: '#b717fa',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
      constructor(){
        super()
        this.state={
          email:'',
          password:'',
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLoginPress = this.handleLoginPress.bind(this);
      }
      handleChangeEmail(text) {    
        this.setState({      
            email: text    
        });  
    }  
      
      handleChangePassword(text) {    
        this.setState({      
            password: text    
        });  
    }  
    handleLoginPress() {    
      if (this.state.email==="rico" && this.state.password==="123456"){
        this.props.navigation.navigate('home')
    }  else{
      alert("user dan password salah");
    }
    }    
  render() {
    return (
        <ImageBackground source={require('../Images/background.png')} style={{width: '100%', height: '100%'}}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.title1}>Masuk</Text>
                <Text style={styles.title2}>Email atau nama pengguna</Text>
                <TextInput 
                            style={styles.input}
                            placeholder="Username or Email"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="next"
                            onSubmitEditing={()=> this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={this.handleChangeEmail}   
                            />
                <Text style={styles.title2}>Kata sandi</Text>
                <TextInput 
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="go"
                            ref={(input)=> this.passwordInput = input}
                            onChangeText={this.handleChangePassword} 
                            />
                            
                <TouchableOpacity style={styles.buttonContainerC} onPress={this.handleLoginPress}>
                        <Text style={styles.buttonTextA}>MASUK</Text>
                </TouchableOpacity>             
                <Text style={styles.title3}>Mengalami masalah saat masuk? Dapatkan batuan di sini</Text>
        </View>
       
        
      </KeyboardAvoidingView>
      </ImageBackground>
    )
    
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    
    input:{
        height:50,
        backgroundColor:'white',
        marginBottom:10,
        color:'black',
        borderRadius:10,
        
    },
    title1:{
        color:'white',
        marginTop:80,
        marginBottom:40,
        width:300,
        textAlign:'center',
        fontSize:28,
        fontWeight:'700',
    },
    title2:{
        color:'white',
        marginTop:10,
        width:300,
        textAlign:'left',
        fontSize:15,
        fontWeight:'500',
       
    },
    title3:{
        color:'white',
        marginTop:30,
        width:300,
        textAlign:'center',
        fontSize:15,
        fontWeight:'500',
       
    },
    buttonTextA:{
        textAlign:'center',
        color:'black',
        fontWeight:'700',
    },
    buttonContainerC:{
        backgroundColor:'#ecf0f1',
        paddingVertical:12,
        marginTop:40,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#ecf0f1',
    },
})