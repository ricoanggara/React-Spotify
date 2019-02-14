import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import DaftarGratis from '../screens/DaftarGratis';
import DaftarEmail from '../screens/DaftarEmail';
import DaftarFacebook from '../screens/DaftarFacebook';
import Login from '../screens/Login'
import HomeScreen from '../navigation/AppTabNavigator';
import CariScreen from '../screens/CariScreen';
import KoleksiScreen from '../screens/Koleksi';
import PremiumScreen from '../screens/Premium';
export const RootStack = createStackNavigator({
      Login: {
        screen: Login,
      },
     daftargratis: {
        screen: DaftarGratis,
      },
      daftarfacebook: {
        screen: DaftarFacebook,
      },
      daftaremail: {
        screen: DaftarEmail,
      },
      home: {
        screen: HomeScreen,
        navigationOptions: {
          header: null,
        }
      },
      Cari: {
        screen: CariScreen,
      },
      Koleksi: {
        screen: KoleksiScreen,
      },
      Premium: {
        screen: PremiumScreen,
      },
    },
    {
      initialRouteName: 'home',
    }
  );

  

