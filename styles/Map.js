import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Constants } from 'expo';

const map = StyleSheet.create({
    sector: {
      width: '100%',
      height: '100%',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000',
    },
        sAlpha: {
          position: 'absolute',
          top: '15%',
          left: '25%',
          width: 50,
          height: 50,
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
    planet: {
      position: 'absolute',
    }
});

export default map;
