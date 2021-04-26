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
    margin: isIphoneX() ? '45rem' : '8rem',
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
    paddingVertical: isIphoneX() ? '22rem' :Platform.OS === 'ios'?'15rem':'14rem'
  },
  innerDescriptionFirstText: {
    fontSize: '16rem',
    ...Fonts.style.mediumDarkGray,
    textAlign: 'center',
    paddingHorizontal: '50rem'
  },
  innerDescriptionText: {
    fontSize: '14rem',
    ...Fonts.style.mediumCloudyBlue,
    textAlign: 'center',
    paddingHorizontal: '60rem',
    paddingVertical: isIphoneX() ? '5rem' : '3rem',
    marginTop: '10rem'
  },
  getBackBtn: {
    height: '40rem',
    width: '140rem',
    borderRadius: '25rem',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10rem'
  },
  continueBtn: {
    height: '60rem',
    width: '160rem',
    borderRadius: '25rem',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  continueText: {
    fontSize: '18rem',
    ...Fonts.style.semiBoldBlue,
    textAlign: 'center',
    bottom: '5rem'
  },
  bottomButton: {
    marginTop: '15rem'
  }
});
