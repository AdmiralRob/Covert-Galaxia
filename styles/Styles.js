import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  titleOne: {
    color: '#fff',
    fontSize: 32,
  },
  titleTwo: {
    color: '#fff',
    fontSize: 24,
  },
  paragraph: {
    margin: 24,
    padding: 6,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  backgroundImg: {
    width: "100%",
    height: "110%",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  rowly: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  columnly: {
    flexDirection: 'column',
  },
  button: {
    padding: 16,
    width: 200,
    margin: 6,
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0.75)',
    color: 'white',
    textAlign: 'center',
  },
  sector: {
    position:'absolute',
    bottom: 0,
    color: '#ffffff',
    textAlign: 'center',
    width: '100%',
  },
  drawerContainer: {
    backgroundColor: '#000000',
    height: '100%',
  },
});

export default styles;
