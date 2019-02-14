import React, { Component } from 'react';
import {StyleSheet, View, Text,Image, KeyboardAvoidingView,TouchableOpacity,TextInput,StatusBar,ImageBackground} from 'react-native';


export default class DaftarFacebook extends Component {
    constructor(){
        super()
        this.state={
          email:'',
          password:'',
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLoginPress = this.handleLoginPress.bind(this);
        this.buatAkun = this.buatAkun.bind(this);
      }
      handleLoginPress() {  
        if (this.state.email==="rico" && this.state.password==="123456"){
            this.props.navigation.navigate('home')
        }  else{
          alert("user dan password salah");
        }
          
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
    buatAkun() {    
        alert("dalam proses pengembangan")
    } 
    static navigationOptions = {
        title:'Facebook',
        headerStyle: {
          backgroundColor: '#2980b9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
  render() {
    return (
        
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
               <View style={styles.logoFb}>
               <Image
                    style={styles.logo}
                    source={require('../Images/fblogo.png')}/>
               </View>
               
               <TextInput 
                style={styles.input}
                placeholder="Telepeon atau Email"
                placeholderTextColor='#353b48'
                returnKeyType="next"
                onSubmitEditing={()=> this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.handleChangeEmail} />
                <TextInput 
                style={styles.input}
                placeholder="Kata Sandi"
                placeholderTextColor='#353b48'
                returnKeyType="go"
                ref={(input)=> this.passwordInput = input}
                onChangeText={this.handleChangePassword}/>
                            
                <TouchableOpacity style={styles.buttonContainerC} onPress={this.handleLoginPress}>
                        <Text style={styles.buttonTextA}>MASUK</Text>
                </TouchableOpacity>             
                <Text style={styles.title3}>LUPA KATA SANDI</Text>
                <Text style={styles.title3}>------------------ atau --------------------</Text>
                <TouchableOpacity style={styles.buttonContainerB} onPress={this.buatAkun}>
                        <Text style={styles.buttonTextB}>BUAT AKUN FACEBOOK BARU</Text>
                </TouchableOpacity>  
        
        </View>
       
        
      </KeyboardAvoidingView>
     
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:'#2980b9'
    },
    
    input:{
        height:50,
        backgroundColor:'white',
        marginBottom:10,
        marginTop:30,
        color:'black',
        borderRadius:10,
        paddingHorizontal:10,
        
    },
    logoFb:{
        alignItems: 'center',
        marginTop:20,
       
    },
    logo:{
        marginTop:0,
        width:100,
        height:100,
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
        marginTop:20,
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
    buttonContainerB:{
        backgroundColor:'#4cd137',
        paddingVertical:12,
        marginTop:40,
        borderColor:'#ecf0f1',
    },
    buttonTextB:{
        textAlign:'center',
        color:'white',
        fontWeight:'700',
    },
})