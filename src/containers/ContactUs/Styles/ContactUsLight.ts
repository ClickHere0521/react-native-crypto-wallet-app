import EStyleSheet from 'react-native-extended-stylesheet';
import { Fonts, Colors } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';
import { Platform } from 'react-native';
export default EStyleSheet.create({
  flex: {
    flex: 1
  },
  titleText: {
    fontSize: '18rem',
    textAlign: 'center',
    ...Fonts.style.boldFontBlue
  },
  descriptionText: {
    width: '100%',
    fontSize: '15rem',
    textAlign: 'center',
    paddingHorizontal: '50rem',
    ...Fonts.style.mediumDarkGrey,
    top: isIphoneX() ? '15rem' : '12rem'
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
  marginTop: {
    marginTop: Platform.OS == 'ios' ? '15rem' : '18rem',
    top: '25rem'
  },
  emailLabelText: {
    top: Platform.OS == 'ios' ? 0 : '13rem',
    fontSize: '13rem',
    textAlign: 'center',
    ...Fonts.style.mediumDarkGrey
  },
  emailTextInput: {
    textAlign: 'center',
    fontSize: '14rem',
    ...Fonts.style.mediumDarkGrey,
    marginTop: '8rem',
    '@media android': {
      bottom: '5rem'
    }
  },

  emailView: {
    padding: Platform.OS == 'ios' ? '20rem' : 0,
    width: '100%-24rem',
    borderWidth: 1,
    borderRadius: '13rem',
    borderColor: Colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  InnerViewTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: isIphoneX() ? '280rem' : Platform.OS == 'ios' ? '240rem' : '320rem'
  },
  textInputValue: {
    fontSize: '14rem',
    width: '100%',
    height: Platform.OS == 'ios' ? '50rem' : '80rem',
    textAlign: 'center',
    ...Fonts.style.mediumDarkGrey,
    top: Platform.OS == 'ios' ? '5rem' : 0
  },
  shadowStyle: {
    marginTop: '70rem',
    marginBottom: '15rem'
  },
  sendBtn: {
    height: '50rem',
    width: '150rem',
    borderRadius: '12rem',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50rem'
  }
});
