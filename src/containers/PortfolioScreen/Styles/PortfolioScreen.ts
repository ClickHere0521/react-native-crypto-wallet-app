import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
import { isIphoneX } from '../../../libs/Utils';
import { Platform } from 'react-native';
export default EStyleSheet.create({
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
  portfolioView: {
    padding: '10rem',
    width: '100%-30rem',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.blueBorder
  },
  paddingBottomSecond: {
    paddingBottom: '35rem'
  },
  flatListInnerView: {
    flexDirection: 'row',
    left: '5rem'
  },
  pieChart: {
    width: '110rem',
    height: '110rem'
  },
  view: {
    height: isIphoneX()
      ? height * 0.8
      : Platform.OS === 'ios'
      ? height * 0.9
      : height * 0.8,
    marginBottom: Platform.OS === 'ios' ? 0 : '15rem'
  },
  lineView: {
    flexDirection: 'column'
  },
  separatorLineRight: {
    width: '1rem',
    height: '100rem',
    backgroundColor: Colors.darkGreyBlue,
    marginTop: '5rem',
    left: '18rem'
  },
  separatorBottomView: {
    width: '1rem',
    height: '50rem',
    backgroundColor: Colors.darkGreyBlue,
    marginTop: '15rem'
  },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.darkGreyBlue,
    marginTop: '5rem'
  },
  separatorBottomLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.darkGreyBlue,
    marginTop: '15rem'
  },
  graphView: {
    flexDirection: 'row'
  },
  summaryText: {
    position: 'absolute',
    textAlign: 'center',
    top: '45rem',
    left: '20rem',
    fontSize: '14rem',
    ...Fonts.style.semiBoldWhite
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center',
    marginTop: '10rem'
  },
  imgIcon: {
    height: '13rem',
    width: '13rem',
    resizeMode: 'contain',
    marginTop: '10rem',
    left: '30rem'
  },
  flatListInnerShortTitle: {
    fontSize: '14rem',
    ...Fonts.style.mediumBluegrey,
    left: '40rem'
  },
  subTitleView: {
    right: '35rem',
    position: 'absolute'
  },
  subTitle: {
    fontSize: '14rem',
    ...Fonts.style.mediumCloudyBlue
  },
  totalBalanceValue: {
    fontSize: '16rem',
    ...Fonts.style.mediumWhite,
    textAlign: 'center',
    paddingVertical: '5rem'
  },
  totalBalance: {
    fontSize: '14rem',
    ...Fonts.style.mediumBluegrey,
    textAlign: 'center'
  },
  ViewMarginTop: {
    marginTop: '15rem'
  },
  linemarginTop: {
    width: '100%'
  },
  lineChart: {
    height: '200rem'
  },
  contentInset: {
    top: '20rem',
    bottom: '20rem'
  },
  xAxis: {
    marginHorizontal: '-10rem',
    height: '20rem',
    marginTop: '20rem'
  },
  contentInsetXaxis: { left: '10rem', right: '10rem' },
  BottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  changeView: {
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  changeTextValue: {
    fontSize: '16rem',
    ...Fonts.style.mediumFrogGreen,
    paddingVertical: '10rem'
  },
  changeText: {
    fontSize: '14rem',
    ...Fonts.style.mediumCloudyBlue
  },
  PortfolioAgeValue: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldWhite,
    paddingVertical: '10rem'
  },
  PortfolioAge: {
    fontSize: '14rem',
    ...Fonts.style.mediumCloudyBlue
  },
  separatormarginTop: {
    marginTop: '15rem'
  },

  mainWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EEF1FD',
    padding: 8
  },
  chartWidget: {
    marginTop: 20
  },
  chart: {
    width: '100%',
    height: 124
  },
  gText: {
    fontSize: '14rem',
    ...Fonts.style.regularBluegrey
  },
  xAxisTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  xAxisTopHr: {
    width: '100% - 135rem',
    height: '1rem',
    marginBottom: '3rem',
    backgroundColor: Colors.bluegrey
  },
  xAxisAmt: {
    ...Fonts.style.regularBluegrey,
    fontSize: '14rem'
  },
  areaChart: {
    height: '157rem',
    width: '343rem',
    right: '10rem'
  },
  xAxisBottom: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '10rem'
  },
  xAxisBottomHr: {
    width: '100% - 135rem',
    height: '1rem',
    marginTop: '3rem',
    backgroundColor: Colors.bluegrey
  },
  xAxisSvg: {
    ...Fonts.style.boldFontBlue,
    fontSize: '16rem'
  }
});
