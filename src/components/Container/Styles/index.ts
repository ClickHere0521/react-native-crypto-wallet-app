import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
import { Colors } from '../../../theme';

const styles = EStyleSheet.create({
  safeViewcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.statusBarColor,
    '@media android': {
      marginTop: StatusBar.currentHeight
    }
  },
  safeViewLightcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    '@media android': {
      marginTop: StatusBar.currentHeight
    }
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  statusBarMarginTop: {
    marginTop: StatusBar.currentHeight
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
});

export default styles;
