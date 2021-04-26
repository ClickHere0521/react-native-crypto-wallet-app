import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';
import { isIphoneX } from '../../../libs/Utils';
const styles = EStyleSheet.create({
  linearGradientView: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '10rem'
  },

  linearGradientLine: {
    width: '30%',
    height: 5,
    top: Platform.OS === 'ios' ? (isIphoneX() ? 0 : '3rem') : 0
  }
});

export default styles;
