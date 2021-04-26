import EStyleSheet from 'react-native-extended-stylesheet';
import { isIphoneX } from '../../../libs/Utils';
import { Fonts } from '../../../theme';
import { Platform } from 'react-native';
export default EStyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  innerImageView: {
    margin: isIphoneX() ? '70rem' : '22rem',
    top: Platform.OS === 'ios' ? 0 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  innerImage: {
    height: '300rem',
    width: '290rem',
    resizeMode: 'contain'
  },
  innerText: {
    fontSize: '24rem',
    ...Fonts.style.semiBoldWhite,
    textAlign: 'center',
    paddingVertical: isIphoneX() ? '22rem' : '15rem'
  },
  innerDescriptionText: {
    fontSize: '14rem',
    ...Fonts.style.mediumCloudyBlue,
    textAlign: 'center',
    paddingHorizontal: '60rem'
  },
  getStartBtn: {
    height: '40rem',
    width: '140rem',
    borderRadius: '25rem',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20rem'
  },
  learnMoreText: {
    fontSize: '18rem',
    ...Fonts.style.semiBoldBlue,
    textAlign: 'center',
    paddingVertical: isIphoneX() ? '25rem' : '15rem',
    marginTop: '10rem'
  }
});
