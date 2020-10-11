import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet} from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';
import {Provider as LocationProvider} from './src/context/LocationContext'; 


const switchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }), 
    CreateTrack: TrackCreateScreen,
    Account: AccountScreen
  }),
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => {setNavigator(navigator)}}/>
      </AuthProvider>
    </LocationProvider>
  );
};