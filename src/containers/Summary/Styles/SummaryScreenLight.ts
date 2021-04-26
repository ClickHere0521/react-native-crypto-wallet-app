import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
import { Fonts } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export default EStyleSheet.create({
  flatList: {
    width: '100%-30rem',
    padding: '20rem',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.bluedarkColor,
    justifyContent: 'center'
  },
  flatListInnerView: {
    flexDirection: 'row'
  },
  flatListInnerImage: {
    height: '30rem',
    width: '30rem',
    resizeMode: 'contain',
    marginTop: '15rem'
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center',
    marginTop: '17rem'
  },
  flatListInnerShortTitle: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldDarkGrey,
    left: '10rem'
  },
  subTitleView: {
    right: '35rem',
    position: 'absolute'
  },
  view: {
    height: isIphoneX() ? height * 0.7 : height * 0.8
  },
  subTitle: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldDarkGrey
  },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.bluedarkColor,
    marginTop: '15rem'
  }
});
