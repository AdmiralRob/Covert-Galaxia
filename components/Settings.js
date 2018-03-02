import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

import styles from '../styles/Styles';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/screen-settings.jpg')}
          style={styles.backgroundImg}
        />

        <View style={styles.columnly}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Galaxy')}>
            <Text style={styles.button}>New Game</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
             <Text style={styles.button}>Load Game</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
             <Text style={styles.button}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
             <Text style={styles.button}>Log Out</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
