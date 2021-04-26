import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';
import { Fonts } from '../../../theme';

export default EStyleSheet.create({
  header: {
    width: '100%-15rem',
    height: '55rem',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: '13rem',
    // top: isIphoneX() ? '30rem' : '12rem',
    top: 0,
    zIndex: 99999,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.1
      },
      android: {
        elevation: 5
      }
    })
  },
  transparent: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null
      },
      android: {
        elevation: null
      }
    })
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '15%',
    height: '100%',
    position: 'absolute',
    left: 0
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '15%',
    height: '100%',
    position: 'absolute',
    right: 0
  },
  title: {
    paddingHorizontal: '10rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '70%',
    height: '100%',
    left: '15%'
  },
  titleTxt: {
    fontSize: '16rem',
    color: Colors.white,
    ...Fonts.style.semiBoldWhite
  },
  titleBlackTxt: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldDarkGrey
  },
  backBtn: {
    flex: 1
  },
  backImg: {
    height: '35rem',
    width: '35rem',
    marginLeft: '14rem',
    resizeMode: 'contain'
  },
  logoBtn: {
    flex: 1,
    paddingVertical: '5rem'
  },
  padding: {
    padding: '5rem'
  },
  imgStyle: {
    height: '38rem',
    width: '38rem',
    resizeMode: 'contain'
  },

  imgSecondStyle: {
    height: '35rem',
    width: '38rem',
    resizeMode: 'contain',
    marginHorizontal: '10rem'
  },

  addButtonView: {
    position: 'absolute',
    right: 30,
    padding: '5rem'
  },
  leftImgStyle: {
    height: '75rem',
    width: '75rem',
    resizeMode: 'contain',
    left:'-13rem'
  }
});
