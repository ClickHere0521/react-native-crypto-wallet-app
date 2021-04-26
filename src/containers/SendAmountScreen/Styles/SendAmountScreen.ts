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
    ...Fonts.style.mediumWhite,
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
    ...Fonts.style.boldCloudyBlue
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
    ...Fonts.style.mediumWhite,
    width: '60%'
  },
  usdTextValue: {
    fontSize: '16rem',
    width: '20%',
    ...Fonts.style.mediumWhite
  },
  separatorLine: {
    width: '84%',
    height: 1,
    backgroundColor: Colors.cloudyBlue,
    top: '3rem'
  },
  circle: {
    width: '30rem',
    height: '30rem',
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
    ...Fonts.style.semiBoldWhite,
    marginTop: '8rem'
  },
  networkTextValue: {
    fontSize: '14rem',
    ...Fonts.style.mediumCloudyBlue,
    marginTop: '8rem'
  },
  networkTextSeparatorLine: {
    width: '70%',
    height: 1,
    backgroundColor: Colors.cloudyBlue,
    marginTop: '15rem'
  },
  RemainingText: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldWhite,
    marginTop: '15rem'
  },
  RemainingTextValue: {
    fontSize: '14rem',
    ...Fonts.style.mediumCloudyBlue,
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
    backgroundColor: Colors.darkTwo,
    flexDirection: 'row',
    borderRadius: '5rem',
    alignSelf: 'center',
    alignItems: 'center',
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
    ...Fonts.style.regularCloudyBlue,
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
    height: '32rem',
    width: '80rem',
    borderRadius: '8rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25rem'
  }
});
