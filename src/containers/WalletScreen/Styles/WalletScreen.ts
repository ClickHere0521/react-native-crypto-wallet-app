import EStyleSheet from 'react-native-extended-stylesheet';
import { isIphoneX } from '../../../libs/Utils';
import { Colors, Fonts } from '../../../theme';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
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
  marginTop: {},
  flatList: {
    padding: '20rem',
    width: '100%-30rem',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.blueBorder
  },
  bitcoinImage: {
    height: '50rem',
    width: '60rem',
    left: '10rem',
    resizeMode: 'contain'
  },
  bitcoinView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bitcoinLeftView: {
    width: '40%'
  },
  bitcoinRightView: {
    left: '20rem',
    width: '40%'
  },
  leftDollerPrice: {
    fontSize: '18rem',
    ...Fonts.style.boldFontWhite,
    top: '5rem'
  },
  leftBTCPrice: {
    fontSize: '12rem',
    ...Fonts.style.mediumBluegrey,
    top: '7rem'
  },
  leftBTCPercentage: {
    fontSize: '12rem',
    left: '5rem',
    ...Fonts.style.mediumFrogGreen
  },
  rightSideText: {
    fontSize: '18rem',
    ...Fonts.style.boldFontOrange
  },
  rightSideBalanceText: {
    fontSize: '14rem',
    ...Fonts.style.mediumBluegrey,
    marginTop: '5rem'
  },
  rightDollerPrice: {
    fontSize: '18rem',
    ...Fonts.style.boldFontWhite,
    marginTop: '5rem'
  },
  rightSideValueText: {
    fontSize: '14rem',
    ...Fonts.style.mediumBluegrey,
    marginTop: '5rem'
  },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.darkGreyBlue,
    marginTop: '10rem'
  },
  separatorLineRight: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.darkGreyBlue,
    marginTop: '5rem'
  },
  separatorWhiteLine: {
    width: '65%',
    height: 1,
    backgroundColor: Colors.darkBlueSeparator,
    left: '8rem',
    top: '18rem'
  },
  activityView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '25rem',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '20rem'
  },
  activityText: {
    fontSize: '18rem',
    ...Fonts.style.boldFontWhite
  },
  securityFlatListView: {
    width: '100%-24rem',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  securityMarginTop: {
    marginTop: '25rem'
  },
  flatListInnerDate: {
    fontSize: '16rem',
    ...Fonts.style.semiBoldWhite,
    left: '20rem',
    bottom: isIphoneX() ? '5rem' : '6rem'
  },
  recivedTextView: {
    flexDirection: 'row'
  },
  reciveText: {
    right: 0,
    position: 'absolute'
  },
  flatListInnerImage: {
    height: '15rem',
    width: '15rem',
    top: '10rem',
    resizeMode: 'contain'
  },
  flatListInnerView: {
    flexDirection: 'row',
    padding: '10rem'
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center'
  },
  flatListInnerText: {
    width: '100%',
    flexDirection: 'row'
  },
  flatListInnerActionTitle: {
    fontSize: '14rem',
    paddingLeft: '10rem',
    marginBottom: '2rem',
    ...Fonts.style.mediumBluegrey
  },
  flatListInnerRightTitle: {
    right: '18rem',
    position: 'absolute',
    ...Fonts.style.mediumFontOrange
  },
  flatListInnerRightDollerTitle: {
    right: '18rem',
    position: 'absolute',
    ...Fonts.style.mediumWhite
  },
  flatListInnerFullTextTitle: {
    ...Fonts.style.mediumWhite,
    paddingLeft: '10rem',
    fontSize: '14rem',
    marginBottom: '2rem',
    top: '3rem'
  },
  bottomSideImage: {
    height: '20rem',
    width: '20rem',
    resizeMode: 'contain'
  },
  graphView: {
    height: '150rem',
    flexDirection: 'row'
  },
  linearChartView: {
    flex: 1,
    marginLeft: '10rem'
  },
  flatListFooterContainer: {
    width: '100%',
    paddingHorizontal: '100rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    position: 'absolute'
  },
  roundShapeBtn: {
    width: '40rem',
    height: '40rem',
    borderRadius: '20rem',
    backgroundColor: '#000000',
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paddingBottomSecond: { paddingBottom: '25rem' },

  hBtn: {
    height: '18rem',
    width: '18rem',
    resizeMode: 'contain'
  },

  flatListButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendText: {
    fontSize: '14rem',
    ...Fonts.style.semiBoldWhite
  },
  recivedText: {
    fontSize: '14rem',
    top: '10rem',
    ...Fonts.style.mediumWhite
  },
  linemarginTop: {
    marginTop: '10rem'
  },
  gText: {
    fontSize: '14rem',
    ...Fonts.style.regularBluegrey
  },
  contentInset: {
    top: '20rem',
    bottom: '20rem'
  },
  contentInsetXaxis: { left: '10rem', right: '10rem' },
  xAxis: {
    marginHorizontal: '-10rem',
    height: '20rem',
    marginTop: '20rem'
  },
  lineChart: {
    height: '230rem'
  },
  chartWidget: {
    marginTop: 20
  },
  chart: {
    width: '100%',
    height: 124
  },
  footer: {
    flexDirection: 'row'
  },
  view: {
    width: '50%'
  },

  middleLine: {
    width: '2rem',
    height: '44rem',
    backgroundColor: Colors.white
  },
  bottomButtonView: {
    width: '100%',
    flexDirection: 'row'
  },
  bottomButtonInnerView: {
    width: '50%'
  },
  buttonStyle: {
    flexDirection: 'row',
    width: '100%',
    height: '45rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleShapeView: {
    width: '30rem',
    height: '30rem',
    borderRadius: '15rem',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    right: '10rem'
  },
  circleInnerImage: {
    width: '12rem',
    height: '12rem'
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
    right: '20rem'
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
