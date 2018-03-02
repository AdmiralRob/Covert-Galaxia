import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, Button } from 'react-native';
import { Constants } from 'expo';

import styles from '../styles/Styles';

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
            <Text style={styles.sector}>Planet</Text>
            <Image
              source={require('../assets/planet-garden.png')}
              style={positions.planet}
            />
            <Image
              source={require('../assets/interface-planet.png')}
              style={positions.intface}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[positions.sDelta, positions.box]}>
            <Image
              source={require('../assets/planet-dark.png')}
              style={positions.planet}
            />
            <Image
              source={require('../assets/interface-planet.png')}
              style={positions.intface}
            />
            <Text style={styles.sector}>Planet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[positions.sEpsilon, positions.box]}>
            <Image
              source={require('../assets/planet-gas.png')}
              style={positions.planet}
            />
            <Image
              source={require('../assets/interface-planet.png')}
              style={positions.intface}
            />
            <Text style={styles.sector}>Planet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[positions.sGamma, positions.box]}>
            <Image
              source={require('../assets/planet-garden.png')}
              style={positions.planet}
            />
            <Image
              source={require('../assets/interface-planet.png')}
              style={positions.intface}
            />
            <Text style={styles.sector}>Planet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[positions.sSigma, positions.box]}>
            <Image
              source={require('../assets/planet-alien.png')}
              style={positions.planet}
            />
            <Image
              source={require('../assets/interface-planet.png')}
              style={positions.intface}
            />
            <Text style={styles.sector}>Planet</Text>
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
