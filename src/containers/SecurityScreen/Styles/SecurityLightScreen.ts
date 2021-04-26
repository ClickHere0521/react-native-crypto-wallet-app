import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';
import { Fonts } from '../../../theme';
export default EStyleSheet.create({
  securityFlatListView: {
    padding: '20rem',
    width: '100%-24rem',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  paddingBottom: {
    paddingBottom: '90rem'
  },
  securityInnerTextView: {
    flexDirection: 'row'
  },
  securityInnerImage: {
    width: '40rem',
    height: '40rem',
    right: 0,
    position: 'absolute',
    top: '5rem',
    resizeMode: 'contain'
  },
  securityInnerSubTitleView: {
    width: '80%'
  },
  separatorLine: {
    left: '5rem',
    width: '80%',
    height: 1,
    backgroundColor: Colors.black,
    top: '8rem'
  },
  securityInnerTitleText: {
    ...Fonts.style.boldFontBlue,
    fontSize: '18rem',
    fontWeight: '600'
  },
  securityInnerSubTitleText: {
    ...Fonts.style.mediumDarkGrey,
    fontSize: '13rem',
    marginTop: '10rem',
    top: '5rem'
  },
  containerStyle: {
    width: '40rem',
    height: '10rem',
    borderRadius: '8rem',
    backgroundColor: '#ccc',
    padding: 0
  },
  circleStyle: {
    width: '20rem',
    height: '20rem',
    borderRadius: '10rem',
    backgroundColor: Colors.lightBlueGrey
  },
  switchToggleView: {
    right: 0,
    top: '70rem',
    position: 'absolute'
  },
  shadowContainer: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginTop: '10rem'
    // top: isIphoneX() ? '25rem' : '5rem'
  }
});
