import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
import { Platform } from 'react-native';
import { isIphoneX } from '../../../libs/Utils';
export default EStyleSheet.create({
  MainView: {
    width: '100%',
    height: '100%'
  },
  headingTitleView: {
    width: '100%',
    paddingHorizontal: '40rem',
    marginTop: isIphoneX() ? '10rem' : '8rem'
  },
  headingTitle: {
    textAlign: 'center',
    fontSize: '15rem',
    ...Fonts.style.mediumDarkGrey
  },
  flatListView: {
    padding: '13rem',
    width: '100%-30rem',
    borderWidth: 1,
    borderRadius: '15rem',
    borderColor: Colors.bluedarkColor,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '8rem'
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
    top: '5rem',
    marginTop: isIphoneX() ? '15rem' : '13rem'
  },
  flatListInnerView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  flatListInnerTitleText: {
    fontSize: '16rem',
    ...Fonts.style.mediumDarkGrey,
    left: '25rem'
  },
  flatListInnerNumberText: {
    ...Fonts.style.boldFontBlue
  },
  paddingBottom: {
    paddingBottom: '20rem'
  },
  shadowStyle: {
    marginTop: '70rem',
    marginBottom: '15rem'
  },
  nextBtn: {
    height: '50rem',
    width: '200rem',
    borderRadius: '15rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isIphoneX()
      ? '40rem'
      : Platform.OS === 'ios'
      ? '20rem'
      : '45rem',
    marginBottom: Platform.OS === 'ios' ? 0 : '15rem'
  },
  titleStyle: {
    fontSize: '20rem'
  },
  searchTxtInput: {
    ...Fonts.style.mediumLightBlueGrey,
    fontSize: '14rem',
    width: '90%',
    height: '40rem',
    alignSelf: 'center',
    left: '20rem',
    top: '3rem'
  }
});
