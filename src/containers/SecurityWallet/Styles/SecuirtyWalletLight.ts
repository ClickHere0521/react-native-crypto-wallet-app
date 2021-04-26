import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
export default EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: '15rem',
    height: '15rem',
    borderRadius: '50rem',
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotStyle: {
    width: '100%',
    paddingHorizontal: '18rem',
    height: '10rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30rem'
  },
  circleShapeView: {
    width: '100rem',
    height: '100rem',
    borderRadius: '50rem',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8
  },
  securityScreenRoundIcon: {
    width: '85rem',
    height: '85rem',
    resizeMode: 'contain'
  },
  shadowLogoContainer: {
    width: '50rem',
    height: '50rem',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  textView: {
    width: '50%',
    marginTop: '15rem'
  },
  walletText: {
    fontSize: '18rem',
    textAlign: 'center',
    ...Fonts.style.semiBoldDarkGrey,
    paddingVertical: '10rem'
  },
  passwordText: {
    fontSize: '16rem',
    textAlign: 'center',
    ...Fonts.style.boldFontBlue
  },
  firstNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '15rem'
  },
  numberView: {
    marginTop: '20rem'
  },
  numberText: {
    textAlign: 'center',
    fontSize: '24rem',
    ...Fonts.style.boldFontBlue
  },
  touchableView: {
    width: '40rem',
    height: '30rem'
  },
  imgIcon: {
    height: '18rem',
    width: '18rem',
    resizeMode: 'contain',
    left: '7rem'
  },
  crossImgIcon: {
    height: '18rem',
    width: '18rem',
    resizeMode: 'contain',
    left: '4rem'
  },
  qrCodeImage: {
    width: '50rem',
    height: '50rem',
    resizeMode: 'contain'
  },
  separatorLine: {
    width: '10%',
    height: 1,
    backgroundColor: Colors.bluedarkColor,
    top: '7rem'
  },
  zeroNumberText: {
    textAlign: 'center',
    fontSize: '24rem',
    bottom: '5rem',
    right: '3rem',
    ...Fonts.style.boldFontBlue
  }
});
