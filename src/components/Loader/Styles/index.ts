import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)'
  },
  loader: {
    height: 90,
    width: 90
  },
  loaderText: {
    ...Fonts.style.bodyBlack,
    // paddingTop: 5,
    textAlign: 'center',
    color: Colors.black
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  horizontal: {
    flexDirection: 'row'
  },
  horizontalTxt: {
    paddingTop: 0
  }
});
