import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
import { Fonts } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';
export default EStyleSheet.create({
  flatList: {},
  flatListView: {
    width: '100%-30rem',
    padding: '15rem',
    justifyContent: 'center',
    shadowColor: Colors.darkBlack,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: '13rem',
    borderColor: Colors.darkGreyBlue
  },
  flatListInnerView: {
    flexDirection: 'row'
  },
  flatListInnerImage: {
    height: '35rem',
    width: '35rem',
    resizeMode: 'contain'
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center',
    left: '5rem'
  },
  flatListInnerShortTitle: {
    fontSize: '16rem',
    paddingLeft: '8rem',
    ...Fonts.style.boldFontBlue
  },
  switchToggleView: {
    right: '35rem',
    position: 'absolute'
  },
  containerStyle: {
    width: '30rem',
    height: '10rem',
    borderRadius: '8rem',
    backgroundColor: '#ccc',
    padding: 0
  },
  circleStyle: {
    width: '16rem',
    height: '16rem',
    borderRadius: '8rem',
    backgroundColor: Colors.lightBlueGrey
  },
  subTitleView: {
    width: '70%',
    top: '3rem'
  },
  subTitle: {
    fontSize: '12rem',
    paddingLeft: '8rem',
    ...Fonts.style.mediumDarkGrey
  },
  currencyText: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldDarkGrey
  },
  currencyTextView: {
    right: '35rem',
    position: 'absolute'
  },
  shadowContainer: {
    shadowColor: Colors.bluedarkColor,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  marginTop: {
    marginTop: isIphoneX() ? '10rem' : '8rem'
  },
  paddingBottom: {
    paddingBottom: '25rem'
  },
  toggleView:{
    right:'35rem',
    position:'absolute'
  }
});
