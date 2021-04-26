import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
import { Fonts } from '../../../theme';
export default EStyleSheet.create({
  popupModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popupView: {
    width: '80%',
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: '20rem',
    borderColor: '#ffffff',
    borderWidth: 5
  },
  flatListModalView: {
    width: '100%',
    paddingHorizontal: '30rem'
  },
  modalSeparator: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#C0C0C0'
  },
  modalText: {
    fontSize: '18rem',
    ...Fonts.style.semiBoldBlack,
    paddingVertical: '25rem'
  },
  modalTextView: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  graphDetailsView: {
    padding: '20rem',
    width: '100%-30rem',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.darkGreyBlue,
    justifyContent: 'center',
    marginTop: '5rem',
    shadowColor: Colors.darkBlack,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignSelf: 'center'
  },
  graphDetailsTextView: {
    width: '100%',
    justifyContent: 'center',
    marginLeft: '25rem'
  },
  graphDetailsTitleText: {
    fontSize: '14rem',
    paddingLeft: '8rem',
    marginBottom: '2rem',
    ...Fonts.style.mediumCloudyBlue,
    color: Colors.cloudyBlue
  },
  graphDetailsTotalText: {
    paddingLeft: '8rem',
    fontSize: '30rem',
    marginBottom: '2rem',
    ...Fonts.style.regularWhite
  },
  graphDetailsInnerView: {
    flexDirection: 'row',
    left: '20rem'
  },
  pieChart: {
    width: '110rem',
    height: '110rem'
  },
  flatList: {},
  paddingBottom: {
    paddingBottom: '20rem'
  },
  flatListView: {
    width: '100%-30rem',
    justifyContent: 'center',
    marginTop: '15rem',
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
  flatListBottomWaveImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: '13rem',
    borderBottomRightRadius: '13rem',
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden'
  },
  flatListInnerView: {
    flexDirection: 'row',
    padding: '10rem'
  },
  flatListInnerShortTitle: {
    paddingLeft: '8rem',
    marginBottom: '2rem',
    ...Fonts.style.boldWhite
  },
  flatListInnerRightTitle: {
    right: 0,
    position: 'absolute',
    ...Fonts.style.boldWhite
  },
  flatListInnerText: {
    width: '82%',
    flexDirection: 'row'
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center'
  },
  flatListBottomLeftTitle: {
    ...Fonts.style.mediumLightBlueGrey,
    paddingLeft: '8rem',
    fontSize: '16rem',
    marginBottom: '2rem'
  },
  flatListInnerImage: {
    height: '89rem',
    width: '60rem',
    resizeMode: 'contain'
  },

  flatListInnerFullTextTitle: {
    ...Fonts.style.regularBluegrey,
    paddingLeft: '8rem',
    fontSize: '13rem',
    marginBottom: '2rem',
    top: '3rem',
    color: Colors.bluegrey
  },
  flatListBottomRightTitle: {
    ...Fonts.style.mediumLightBlueGrey,
    fontSize: '16rem',
    position: 'absolute',
    right: 0,
    bottom: '5rem'
  },
  linearGradientLine: {
    left: '5rem',
    width: '80%',
    height: 1,
    backgroundColor: Colors.darkGreyBlue,
    top: '4rem'
  },
  flatListInnerBottomTextView: {
    width: '80%',
    top: '16rem'
  },
  upArrowImageView: {
    flexDirection: 'row',
    right: 15,
    position: 'absolute',
    width: '65rem',
    top: '25rem'
  },
  flatListFooterview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: '5rem'
  },
  portfolioView: {
    flexDirection: 'row',
    marginTop: '15rem',
    justifyContent: 'center',
    alignItems: 'center'
  },
  portfolioText: {
    ...Fonts.style.mediumBluegrey,
    color: Colors.bluegrey,
    fontSize: '15rem',
    left: '5rem'
  },
  addImageIcon: {
    width: '150rem',
    height: '150rem',
    resizeMode: 'contain',
    bottom: '15rem'
  },
  scrollImageIcon: {
    width: '100rem',
    height: '100rem',
    resizeMode: 'contain',
    top: '10rem'
  }
});
