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
  squareShapeView: {
    width: '180rem',
    height: '180rem',
    borderRadius: '15rem',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15rem',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8
  },
  squareShapeBottomText: {
    marginTop: '15rem',
    fontSize: '18rem',
    ...Fonts.style.semiBoldDarkGrey
  },
  copyUrlIconStyle: {
    width: '18rem',
    height: '18rem',
    resizeMode: 'contain'
  },
  copyUrlIconView: {
    right: '10rem',
    position: 'absolute'
  },
  qrCodeUrlTextView: {
    width: '100%-45rem',
    height: '30rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: '5rem',
    marginTop: '15rem'
  },
  qrCodeUrlText: {
    fontSize: '14rem',
    ...Fonts.style.mediumDarkGrey
  },
  qrCodeTextWidth: {
    width: '80%',
    left: '20rem',
    position: 'absolute'
  },
  qrCodeTextBottomText: {
    fontSize: '12rem',
    ...Fonts.style.mediumDarkGrey,
    marginTop: '15rem'
  },
  shareBtn: {
    height: '35rem',
    width: '130rem',
    borderRadius: '20rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20rem'
  }
});
