import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, Button } from 'react-native';
import { Constants } from 'expo';

import styles from '../styles/Styles';
import SPlanet from './Planet-Sector';

export default class Sector extends React.Component {

  render() {
    const { params } = this.props.navigation.state;
    const sector = params ? params.sector : null;
    const test = params ? params.test : null;

    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/nebula.jpg')}
          style={styles.backgroundImg}
        />

          <TouchableOpacity style={[positions.sAlpha, positions.box]}>
            <SPlanet planet="Atraxia"/>
          </TouchableOpacity>
          <TouchableOpacity style={[positions.sDelta, positions.box]}>
            <SPlanet planet="Dylthan" economy="10" resources="5"/>
          </TouchableOpacity>
          <TouchableOpacity style={[positions.sEpsilon, positions.box]}>
            <SPlanet planet="Episteen" economy="10" resources="5"/>
          </TouchableOpacity>
          <TouchableOpacity style={[positions.sGamma, positions.box]}>
            <SPlanet planet="Gorram" economy="10" resources="5"/>
          </TouchableOpacity>
          <TouchableOpacity style={[positions.sSigma, positions.box]}>
            <SPlanet planet="Sssla" economy="10" resources="5"/>
          </TouchableOpacity>

        <View style={styles.rowly}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Galaxy')}>
            <Text style={styles.button}>Galaxy</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18, color: "white"}}>{sector} Sector</Text>
          <TouchableOpacity>
            <Text style={styles.button}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function planDB(inputObj) {
  var i=0, arr=[];
  for (var ob in inputObj)
    arr[i++]=inputObj[ob];
  return arr;
}


const positions = StyleSheet.create({
  planet: {
    width: 65,
    height: 65,
    position:'absolute',
    top: 20,
    left: 15,
  },
  intface: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 2,
    left: 0,
    right: 0,
    bottom: 0,
  },
  box: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  sAlpha: {
    top: '15%',
    left: '25%',
  },
  sDelta: {
    position: 'absolute',
    top: '45%',
    left: '12%',
    width: 50,
    height: 50,
  },
  sEpsilon: {
    position: 'absolute',
    bottom: '20%',
    right: '40%',
    width: 50,
    height: 50,
  },
  sGamma: {
    position: 'absolute',
    top: '30%',
    right: '25%',
    width: 50,
    height: 50,
  },
  sSigma: {
    position: 'absolute',
    bottom: '25%',
    right: '15%',
    width: 50,
    height: 50,
  },
  sector: {
    width: '100%',
    height: '100%',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  }
});
