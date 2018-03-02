import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, Button } from 'react-native';
import { Constants } from 'expo';

import styles from '../styles/Styles';
import map from '../styles/Map';

export default class Galaxy extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/galaxy.jpg')}
          style={styles.backgroundImg}
        />

          <TouchableOpacity style={positions.sAlpha} onPress={() => this.props.navigation.navigate('Sector', {sector:'Alpha'})}>
            <Text style={positions.sectorText}>Alpha Sector</Text>
          </TouchableOpacity>
          <TouchableOpacity style={positions.sDelta} onPress={() => this.props.navigation.navigate('Sector', {sector:'Detla'})}>
            <Text style={positions.sectorText}>Delta Sector</Text>
          </TouchableOpacity>
          <TouchableOpacity style={positions.sEpsilon} onPress={() => this.props.navigation.navigate('Sector', {sector:'Epsilon'})}>
            <Text style={positions.sectorText}>Epsilon Sector</Text>
          </TouchableOpacity>
          <TouchableOpacity style={positions.sGamma} onPress={() => this.props.navigation.navigate('Sector', {sector:'Gamma'})}>
            <Text style={positions.sectorText}>Gamma Sector</Text>
          </TouchableOpacity>
          <TouchableOpacity style={positions.sSigma} onPress={() => this.props.navigation.navigate('Sector', {sector:'Sigma'})}>
            <Text style={positions.sectorText}>Sigma Sector</Text>
          </TouchableOpacity>

        <View style={styles.rowly}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.button}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const boxy = {
  position: 'absolute',
  width: '20%',
  height: '20%'
}

const positions = StyleSheet.create({
  sAlpha: {
    top: '15%',
    left: '25%',
    ...boxy,
  },
  sDelta: {
    top: '45%',
    left: '12%',
    ...boxy,
  },
  sEpsilon: {
    bottom: '20%',
    right: '40%',
    ...boxy,
  },
  sGamma: {
    top: '30%',
    right: '25%',
    ...boxy,
  },
  sSigma: {
    bottom: '25%',
    right: '15%',
    ...boxy,
  },
  sectorText: {
    width: '100%',
    height: '100%',
    borderWidth: 0.5,
    borderColor: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.1)',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  },
});
