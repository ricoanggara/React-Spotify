import React from 'react';
import { Text, View,Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CariScreen from '../screens/CariScreen';
import KoleksiScreen from '../screens/Koleksi';
import PremiumScreen from '../screens/Premium';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image  source={require('../Images/iconhome.png')} style={{width: '24%', height: '48%'}}/>
      )
    }
   },
  Cari: { screen: CariScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Cari',
      tabBarIcon: ({ tintColor }) => (
        <Image  source={require('../Images/search.png')} style={{width: '24%', height: '48%'}}/>
      ),
      
    } },
  Koleksi: { screen: KoleksiScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Koleksi Kamu',
      tabBarIcon: ({ tintColor }) => (
        <Image  source={require('../Images/koleksi.png')} style={{width: '24%', height: '48%'}}/>
      )
    } },
  Premium: { screen: PremiumScreen,
    navigationOptions: {
      headerVisible:false,
      tabBarLabel: 'Premium',
      tabBarIcon: ({ tintColor }) => (
        <Image  source={require('../Images/premium.png')} style={{width: '24%', height: '48%'}}/>
      )
    } },
    
},
{
  tabBarOptions: {
    header: null,
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: '#4b4b4b',
    activeBackgroundColor:'#808e9b',
  },
  style: {
    BackgroundColor: 'red',
  },
});

export default createAppContainer(TabNavigator);

  
