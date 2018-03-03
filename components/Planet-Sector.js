import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';

import styles from '../styles/Styles';

export default class SPlanet extends React.Component {
  constructor(props) {
   super(props)
   }

  render() {
    return (
      <View style={[b.planetBox, this.props.style]}>

        <Image
          source={require('../assets/planet-alien.png')}
          style={[b.planetImg]}
        />

          <Image
            source={require('../assets/interface-agent.png')}
            style={[b.agent, b.icon]}
          />
          <Image
            source={require('../assets/interface-ship.png')}
            style={[b.ship, b.icon]}
          />
          <Image
            source={require('../assets/interface-shipyard.png')}
            style={[b.shipyard, b.icon]}
          />
          <Image
            source={require('../assets/interface-barracks.png')}
            style={[b.barracks, b.icon]}
          />
          <Image
            source={require('../assets/interface-conyard.png')}
            style={[b.conyard, b.icon]}
          />


        <Text style={b.name}>{this.props.name}</Text>
        <Text style={b.economy}>E:{this.props.economy}</Text>
        <Text style={b.resources}>R:{this.props.resources}</Text>

      </View>
    );
  }

}


const b = StyleSheet.create({
  planetBox : {
    width: 100,
    height: 100,
  },
  planetImg : {
    width: "70%",
    height: "70%",
    position:'absolute',
    top: "15%",
    left: "15%",
  },
  name : {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: "100%",
    color: "white",
  },
  economy : {
    position: 'absolute',
    bottom: "18%",
    right: "15%",
    textAlign: 'left',
    color: "white",
    fontSize: 10,
  },
  resources : {
    position: 'absolute',
    bottom: "28%",
    right: "8%",
    textAlign: 'left',
    color: "white",
    fontSize: 10,
  },
  icon : {
    width: "12%",
    height: "12%",
    position: 'absolute',
  },
  agent : {
    bottom: "65%",
    left: "10%",
  },
  ship : {
    bottom: "55%",
    left: "5%",
  },
  shipyard : {
    bottom: "45%",
    left: 0,
  },
  barracks : {
    bottom: "35%",
    left: "5%",
  },
  conyard : {
    bottom: "25%",
    left: "10%",
  }

});
