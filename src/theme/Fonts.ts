import FontHelper from '../helpers/FontHelper';
import { Platform } from 'react-native';
import Colors from './Colors';
const size = {
  h1: '32rem',
  h2: '24rem',
  h3: '18rem',
  h4: '18rem',
  regular: '16rem',
  medium: '14rem',
  small: '13rem',
  tiny: '12rem'
};

const style = {
  regularBlack: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.black
  },
  regularDarkGrey: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.bluedarkColor
  },
  regularBlue: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.blueColorpargraph
  },
  regularWhite: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.white
  },
  regularCloudyBlue: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.cloudyBlue
  },
  regularBluegrey: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.bluegrey
  },
  regularDarkGray: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.darkGray
  },
  mediumBluegrey: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.bluegrey
  },
  mediumBlack: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.black
  },
  mediumDarkGrey: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.normalDarkGrey
  },
  mediumDarkBlack: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '500' : '300'
    }),
    color: Colors.black
  },
  mediumCloudyBlue: {
    ...FontHelper.font({ fontFamily: 'Montserrat', fontWeight: '400' }),
    color: Colors.cloudyBlue
  },
  mediumLightBlueGrey: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.lightBlueGrey
  },
  mediumLightBlue: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.lighBlue
  },
  mediumDarkGray: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.darkGray
  },
  mediumDarkNormalGray: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.darkNormalGray
  },
  mediumOrange: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.orange
  },
  mediumWhite: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.white
  },
  mediumFrogGreen: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.frogGreen
  },
  mediumFontOrange: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.orange
  },
  mediumNiceBlue: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '400' : '300'
    }),
    color: Colors.niceBlue
  },

  semiBoldBlack: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '600' : '400'
    }),
    color: Colors.black
  },
  semiBoldDarkGrey: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '600' : '400'
    }),
    color: Colors.bluedarkColor
  },
  semiBoldWhite: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '600' : '400'
    }),
    color: Colors.white
  },
  semiBoldBlue: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '600' : '400'
    }),
    color: Colors.blue
  },

  semiBoldLightBlueGrey: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '600' : '400'
    }),
    color: Colors.lightBlueGrey
  },
  boldWhite: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '700' : '400'
    }),
    fontSize: size.regular,
    color: Colors.white
  },
  boldFontWhite: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '700' : '400'
    }),
    color: Colors.white
  },
  boldFontBlack: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '700' : '400'
    }),
    color: Colors.black
  },
  boldFontBlue: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '700' : '400'
    }),
    color: Colors.bluedarkColor
  },
  boldFontOrange: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '700' : '400'
    }),
    color: Colors.orange
  },
  boldDarkGray: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '700' : '400'
    }),
    fontSize: size.regular,
    color: Colors.darkGray
  },
  boldCloudyBlue: {
    ...FontHelper.font({
      fontFamily: 'Montserrat',
      fontWeight: Platform.OS === 'ios' ? '700' : '400'
    }),
    color: Colors.cloudyBlue
  },
  robootBoldWhite: {
    ...FontHelper.font({
      fontFamily: 'Roboto',
      fontWeight: '700'
    }),
    color: Colors.white
  },
  robootBoldBlack: {
    ...FontHelper.font({
      fontFamily: 'Roboto',
      fontWeight: '700'
    }),
    color: Colors.black
  },
  robootBoldBlue: {
    ...FontHelper.font({
      fontFamily: 'Roboto',
      fontWeight: '700'
    }),
    color: Colors.bluedarkColor
  }
};

export default {
  size,
  style
};
