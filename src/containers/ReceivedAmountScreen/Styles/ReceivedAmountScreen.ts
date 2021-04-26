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
    ...Fonts.style.semiBoldWhite
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
    backgroundColor: Colors.darkTwo,
    marginTop: '15rem'
  },
  qrCodeUrlText: {
    fontSize: '14rem',
    ...Fonts.style.mediumCloudyBlue
  },
  qrCodeTextWidth: {
    width: '80%',
    left: '20rem',
    position: 'absolute'
  },
  qrCodeTextBottomText: {
    fontSize: '12rem',
    ...Fonts.style.regularCloudyBlue,
    marginTop: '15rem'
  },
  shareBtn: {
    height: '35rem',
    width: '100rem',
    borderRadius: '8rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20rem'
  }
});
