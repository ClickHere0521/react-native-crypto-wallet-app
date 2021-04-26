import EStyleSheet from 'react-native-extended-stylesheet';
import { isIphoneX } from '../../../libs/Utils';
import { Fonts } from '../../../theme';
import { Platform } from 'react-native';
export default EStyleSheet.create({
  mainView: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerImage: {
    height: '320rem',
    width: '330rem',
    resizeMode: 'contain'
  },
  innerTextView: {},
  innerText: {
    fontSize: '25rem',
    ...Fonts.style.robootBoldBlue,
    textAlign: 'center',
    paddingVertical: isIphoneX() ? '25rem' : '13rem'
  },
  innerDescriptionText: {
    fontSize: '14rem',
    ...Fonts.style.mediumDarkGrey,
    textAlign: 'center',
    paddingHorizontal: '50rem'
  },
  getStartBtn: {
    height: '50rem',
    width: '330rem',
    borderRadius: '25rem',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20rem'
  },
  shadowStyle: {
    marginTop: '70rem',
    marginBottom: Platform.OS === 'ios' ? '15rem' : '13rem'
  },
  bottomText: {
    ...Fonts.style.mediumDarkGrey,
    textAlign: 'center',
    fontSize: '15rem'
  },
  buttonView: {
    bottom: isIphoneX() ? '40rem' : '20rem',
    position: 'absolute'
  },
  top: {
    top: Platform.OS === 'ios' ? 0 : '20rem'
  }
});
