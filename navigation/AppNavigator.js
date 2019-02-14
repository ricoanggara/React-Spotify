import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {RootStack} from './MainStackNavigator'
import MainTabNavigator from './MainTabNavigator';
import Apptabnavigator from './AppTabNavigator'

const AppContainer = createAppContainer(RootStack);

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));

export default class AppNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// export default class AppNavigator extends React.Component {
//   render() {
//     return <Apptabnavigator />;
//   }
// }