import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
export default EStyleSheet.create({
  bitcoinImageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bitcoinImage: {
    width: '80rem',
    height: '80rem',
    resizeMode: 'contain'
  },
  bitcoinImageBottomText: {
    fontSize: '16rem',
    ...Fonts.style.mediumDarkGrey,
    marginTop: '15rem'
  },
  btcTextView: {
    width: '100%-50rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15rem'
  },
  btcText: {
    fontSize: '14rem',
    ...Fonts.style.boldFontOrange,
    width: '60%'
  },
  usdText: {
    fontSize: '14rem',
    ...Fonts.style.boldFontBlue
  },
  btcTextValueView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8rem'
  },
  btcTextValue: {
    fontSize: '16rem',
    ...Fonts.style.mediumDarkGrey,
    width: '60%'
  },
  usdTextValue: {
    fontSize: '16rem',
    width: '20%',
    ...Fonts.style.mediumDarkGrey
  },
  separatorLine: {
    width: '84%',
    height: 1,
    backgroundColor: Colors.bluedarkColor,
    top: '3rem'
  },
  circle: {
    width: '33rem',
    height: '33rem',
    borderRadius: '19rem',
    backgroundColor: '#F2F6F6',
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '13rem'
  },
  circleInnerText: {
    fontSize: '10rem',
    alignItems: 'center',
    ...Fonts.style.boldFontWhite
  },
  networkText: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldDarkGrey,
    marginTop: '8rem'
  },
  networkTextValue: {
    fontSize: '14rem',
    ...Fonts.style.mediumDarkGrey,
    marginTop: '8rem'
  },
  networkTextSeparatorLine: {
    width: '70%',
    height: 1,
    backgroundColor: Colors.bluedarkColor,
    marginTop: '15rem'
  },
  RemainingText: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldDarkGrey,
    marginTop: '15rem'
  },
  RemainingTextValue: {
    fontSize: '14rem',
    ...Fonts.style.mediumDarkGrey,
    marginTop: '8rem'
  },
  addIconStyle: {
    width: '80rem',
    height: '80rem',
    resizeMode: 'contain',
    marginTop: '8rem',
    left: '5rem'
  },
  bitCoinAddressView: {
    width: '100%-45rem',
    height: '40rem',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: '5rem',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: '5rem'
  },
  bitCoinAddressTxtInput: {
    ...Fonts.style.regularBlack,
    fontSize: '14rem',
    width: '70%',
    height: '45rem',
    alignSelf: 'center',
    left: '20rem'
  },
  qrCodeIcon: {
    width: '20rem',
    height: '20rem',
    resizeMode: 'contain'
  },
  qrCodeButtonView: {
    right: '30rem',
    position: 'absolute'
  },
  nextBtn: {
    height: '35rem',
    width: '130rem',
    borderRadius: '20rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25rem'
  }
});
