import EStyleSheet from 'react-native-extended-stylesheet';
import { isIphoneX } from '../../../libs/Utils';
import { Colors } from '../../../theme';
import { Fonts } from '../../../theme';
import { Platform } from 'react-native';
export default EStyleSheet.create({
  container: {
    flex: 1,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  flatListHeaderView: {
    width: '100%',
    paddingHorizontal: '40rem'
  },
  flatListHeaderText: {
    fontSize: '15rem',
    ...Fonts.style.mediumDarkGrey,
    textAlign: 'center'
  },
  noteImageAddingViewText: {
    width: '100%',
    paddingHorizontal: '40rem',
    marginTop: isIphoneX() ? '30rem' : '15rem'
  },
  noteImageAddingText: {
    ...Fonts.style.mediumDarkGrey,
    textAlign: 'center',
    bottom: '3rem',
    fontSize: '14rem'
  },
  holdButtonView: {
    width: '100%-100rem',
    height: '38rem',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgb(60,71,102)',
    borderWidth: 1,
    borderRadius: '20rem',
    borderColor: Colors.darkGreyBlue
  },
  holdButtonText: {
    ...Fonts.style.semiBoldWhite,
    textAlign: 'center',
    fontSize: '16rem'
  },
  cardShape: {
    width: '100%'
  },
  textView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: '4rem',
    top: '10rem',
    marginTop: '5rem'
  },
  labelTxt: {
    fontSize: '16rem',
    color: Colors.white,
    width: '7%',
    ...Fonts.style.mediumDarkGrey
  },
  valueTxt: {
    fontSize: '16rem',
    width: Platform.OS === 'ios' ? '20%' : '22%',
    ...Fonts.style.mediumDarkGrey
  },
  flatList: {
    width: '100%-30rem',
    alignSelf: 'center',
    //  top: isIphoneX() ? '25rem' : 0,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.blueBorder
  },
  paddingBottom: {
    paddingBottom: '22rem'
  },
  shadowContainer: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  textMarginTop: {
    marginTop: isIphoneX() ? '15rem' : '10rem'
  },
  buttonButtonMarginTop: {
    marginTop: isIphoneX()
      ? '30rem'
      : Platform.OS === 'ios'
      ? '20rem'
      : '35rem',
    marginBottom: Platform.OS === 'ios' ? 0 : '15rem'
  },
  bottomView: {
    marginTop: isIphoneX() ? '50rem' : Platform.OS === 'ios' ? '38rem' : '40rem'
  }
});
