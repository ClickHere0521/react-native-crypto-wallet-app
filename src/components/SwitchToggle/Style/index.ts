import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
const styles = EStyleSheet.create({
  switchToggleView: {
    right: '35rem',
    position: 'absolute'
  },
  containerStyle: {
    width: '30rem',
    height: '10rem',
    borderRadius: '8rem',
    backgroundColor: '#ccc',
    padding: 0
  },
  circleStyle: {
    width: '16rem',
    height: '16rem',
    borderRadius: '8rem',
    backgroundColor: Colors.lightBlueGrey
  }
});

export default styles;
