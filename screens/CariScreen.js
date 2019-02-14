import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    ImageBackground,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './Category'

const { height, width } = Dimensions.get('window')

class CariScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <ImageBackground source={require('../Images/Homebackground.png')} style={{width: '100%', height: '100%'}}>
            <SafeAreaView style={{ flex: 1,backgroundColor: '' }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 25 }}>
                            <Text style={{ fontSize: 25, fontWeight: '700', paddingHorizontal: 10, textAlign:'center',color:'white',marginBottom:20, }}>
                               Cari
                            </Text>
                            <TextInput 
                            style={styles.input}
                            placeholder="Username or Email"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="next"
                            onSubmitEditing={()=> this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={this.handleChangeEmail}  />

                            <View style={{ height: 250, marginTop: 0 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/marshmello.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/brunomars.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/sheila.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 5, textAlign:'center',color:'white' }}>
                               Lagu Sedih
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', paddingHorizontal: 20,textAlign:'center',color:'white' }}>
                              Musik untuk hari kelam
                            </Text>

                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 20, textAlign:'center',color:'white' }}>
                               Masuk Kembali
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', paddingHorizontal: 20,textAlign:'center',color:'white' }}>
                               Yang paling sering kamu dengarkan beberapa bulan terakhir
                            </Text>

                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 20, textAlign:'center',color:'white' }}>
                               Chill
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', paddingHorizontal: 20,textAlign:'center',color:'white' }}>
                               Rileks denga playlist menyenangkan ini
                            </Text>

                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 20, textAlign:'center',color:'white' }}>
                               Musik untuk segala moment
                            </Text>
                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 20, textAlign:'center',color:'white' }}>
                               Daftar Putar Populer
                            </Text>
                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 20, textAlign:'center',color:'white' }}>
                               Pertahankan suasananya
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', paddingHorizontal: 20,textAlign:'center',color:'white' }}>
                               Terinspirasi oleh aktifitas terkini kamu
                            </Text>

                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 20, textAlign:'center',color:'white' }}>
                               Lainya seperti lagu Barat Hits 2018
                            </Text>
                            

                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: '', paddingTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', paddingHorizontal: 20, textAlign:'center',color:'white' }}>
                               Lainya yank kamu sukai
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', paddingHorizontal: 20,textAlign:'center',color:'white' }}>
                               Dengarkan cuplikan segalanya yang kamu sukai
                            </Text>

                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            
                            
                        </View>
                    </ScrollView>
                    

                </View>
            </SafeAreaView>
            </ImageBackground>
        );
    }
}
export default CariScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        height:50,
        backgroundColor:'white',
        marginBottom:30,
        color:'black',
        borderRadius:10,
        marginLeft:15,marginRight:15,
        
    },
});

