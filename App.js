import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Constants } from 'expo';
import { DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'; // 1.1.2
Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);

// Import Components from local files
import styles from './styles/Styles';
import Galaxy from './components/Galaxy';
import Sector from './components/Sector';
import SPlanet from './components/Planet-Sector';
import Settings from './components/Settings';

// Pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // 0.18.5

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/title-screen.jpg')}
          style={styles.backgroundImg}
        />
        <SPlanet />
        <View style={styles.rowly}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
            <Text style={styles.button}>G Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
             <Text style={styles.button}>Start Without Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
             <Text style={styles.button}>FB Login</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const DrawerOptions = {
  drawerWidth: 300,
  drawerBackgroundColor: '#000000',
  drawerColor: "#ffffff",
};

const CustomDrawerContentComponent = props => (
  <ScrollView style={styles.drawerContainer}>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }} style={{height:"100%"}}>
      <View style={styles.DrawerHeader}>
        <Text>Header One</Text>
      </View>
      <DrawerItems {...props} activeTintColor='#2196f3' activeBackgroundColor='rgba(0, 0, 0, .04)' inactiveTintColor='rgba(0, 0, 0, .87)' inactiveBackgroundColor='transparent' style={{backgroundColor: '#000000'}} labelStyle={{color: '#ffffff'}}/>
      <View>
        <Text style={{color:'#f00'}}>0.1.0 - This version of the app is currently being developed for navigation purposes only.</Text>
      </View>
    </SafeAreaView>
  </ScrollView>
);

const RootStack = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: Settings },
    Galaxy: { screen: Galaxy },
    Sector: { screen: Sector },
  },
  {
    contentComponent: CustomDrawerContentComponent,
    contentOptions: DrawerOptions,
  }
);

export default class App extends React.Component {

  render() {
    return <RootStack />;
  }
}
