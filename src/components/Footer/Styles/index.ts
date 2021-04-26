import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';

export default EStyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    minHeight: 60,
    width: '100%',
    elevation: 10,
    position: 'absolute',
    bottom: 0
  }
});
