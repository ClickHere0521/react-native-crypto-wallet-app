import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
import { Fonts } from '../../../theme';

export default EStyleSheet.create({
  content: {
    height: '100%-80rem',
    alignItems: 'center',
    '@media (max-width: 414) and (max-height: 750)': {
      height: '100%-30rem'
    }
  },
  swiper: {
    alignItems: 'center',
    height: '100%'
  },
  imageView: {
    height: '450rem',
    justifyContent: 'center',
    '@media (max-width: 320)': {
      height: '420rem'
    },
    '@media android and (max-width: 720)': {
      height: '380rem'
    }
  },
  contentView: {
    alignItems: 'center',
    position: 'absolute',
    bottom: '100rem',
    '@media (max-width: 414) and (max-height: 750)': {
      bottom: '85rem'
    }
  },
  linearGradient: {
    width: '100rem',
    height: '3rem',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '270rem',
    '@media (max-width: 414) and (max-height: 750)': {
      bottom: '215rem'
    },
    '@media (max-width: 375) and (max-height: 750)': {
      bottom: '205rem'
    }
  },
  $cornerRadius: '20rem',
  linearGradientCircle: {
    width: '40rem',
    height: '40rem',
    borderRadius: '$cornerRadius',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...Fonts.style.robootBoldBlue,
    fontSize: '26rem',
    textAlign: 'center',
    marginTop: '50rem'
  },
  description: {
    ...Fonts.style.mediumDarkGrey,
    fontSize: '14rem',
    textAlign: 'center',
    marginTop: '30rem',
    marginHorizontal: '50rem',
    '@media (max-width: 375) and (max-height: 750)': {
      marginTop: '15rem'
    }
  },
  paginationStyle: {
    marginBottom: '40rem',
    '@media (max-width: 414) and (max-height: 750)': {
      marginBottom: '35rem'
    },
    '@media (max-width: 320)': {
      marginBottom: '30rem'
    }
  },
  dotStyle: {
    width: '8rem',
    height: '8rem',
    borderRadius: '4rem',
    backgroundColor: Colors.dimBlack
  },
  activeDotStyle: {
    width: '8rem',
    height: '8rem',
    borderRadius: '4rem',
    backgroundColor: Colors.black
  },
  bottomActionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%-100rem',
    marginTop: '85rem',
    marginHorizontal: '50rem',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '20rem',
    '@media (max-width: 414) and (max-height: 750)': {
      bottom: '10rem'
    }
  },
  bottomActionBarBtn: {
    width: '50rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrow: {
    width: '9rem',
    height: '16rem'
  },
  skipTxt: {
    ...Fonts.style.semiBoldDarkGrey,
    fontSize: '16rem'
  }
});
