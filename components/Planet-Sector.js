import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';

import styles from '../styles/Styles';

export default class SPlanet extends React.Component {

  render() {
    return (
      <View style={b.planetBox}>
      <Text>{this.props.message}</Text>
        <Image
          source={require('../assets/planet-alien.png')}
          style={b.planetImg}
        />

        <View style={b.meter}>
          <Image
            source={require('../assets/interface-innerring.png')}
            style={b.resources}
          />
        </View>
        <View style={b.meter}>
          <Image
            source={require('../assets/interface-outterring.png')}
            style={b.resources}
          />
        </View>

        <Text style={b.name}>Planet</Text>

      </View>
    );
  }
}


const b = StyleSheet.create({
  planetImg : {
      width: "65%",
      height: "65%",
      position:'absolute',
      top: "20%",
      left: "15%",
  },
  planetBox : {
    width: 100,
    height: 100,
  },
  meter : {

  },
  resources : {

  },
  economy : {

  },
  name : {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: "100%",
  },
});
