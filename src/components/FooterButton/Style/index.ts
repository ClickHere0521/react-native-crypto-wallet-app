import EStyleSheet from 'react-native-extended-stylesheet';
const { width } = Dimensions.get('window');
import { Dimensions } from 'react-native';
import { isIphoneX } from '../../../libs/Utils';
import { Colors } from '../../../theme';
export default EStyleSheet.create({
  rootContainer: { flex: 1 },
  Footer: {
    width: width,
    height: isIphoneX() ? '60rem' : '50rem',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: isIphoneX() ? 115 : 0
  },
  footerImage: {
    width: '100%-24rem',
    height: '50rem'
  },
  circleShapeView: {
    width: '100rem',
    height: '100rem',
    borderRadius: '50rem',
    backgroundColor: Colors.lightBlueGrey,
    justifyContent: 'center',
    alignItems: 'center',
    top: isIphoneX() ? '20rem' : '10rem'
  }
});
