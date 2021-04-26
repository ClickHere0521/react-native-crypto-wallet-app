import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
export default EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
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
  circleShapeView: {
    width: '100rem',
    height: '100rem',
    borderRadius: '50rem',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8
  },
  QrCodeTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15rem'
  },
  QrCodeVersionNameText: {
    fontSize: '18rem',
    fontWeight: '600',
    ...Fonts.style.semiBoldDarkGrey
  },
  QrCodeSubText: {
    ...Fonts.style.mediumDarkGrey,
    fontSize: '14rem',
    marginTop: '10rem'
  },
  qrCodeImage: {
    width: '50rem',
    height: '50rem',
    resizeMode: 'contain'
  },
  securityFlatListView: {
    padding: '15rem',
    width: '100%-24rem',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.black,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  securityMarginTop: {
    marginTop: '10rem'
  },
  enableAssetView: {
    padding: '15rem',
    width: '100%-24rem',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  separatorLine: {
    width: '84%',
    height: 1,
    backgroundColor: Colors.black,
    top: '7rem'
  },
  enableText: {
    fontSize: '16rem',
    ...Fonts.style.boldFontBlue
  },
  enableNumberText: {
    ...Fonts.style.mediumDarkGrey,
    fontSize: '15rem',
    left: '15rem'
  },
  enablesubText: {
    fontSize: '13rem',
    marginTop: '10rem',
    ...Fonts.style.mediumDarkGrey
  },
  enableView: {
    flexDirection: 'row'
  },
  enableMenuIcon: {
    width: '15rem',
    height: '15rem',
    right: 0,
    position: 'absolute',
    resizeMode: 'contain'
  },
  flatList: {
    paddingTop: '23rem'
  },
  searchView: {
    height: '35rem',
    width: '330rem',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: '55rem',
    alignSelf: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    top: '15rem'
  },
  searchTxtInput: {
    ...Fonts.style.mediumDarkGrey,
    fontSize: '14rem',
    width: '70%',
    height: '45rem',
    alignSelf: 'center',
    left: '20rem'
  },
  serachButtonView: {
    right: '20rem',
    position: 'absolute'
  },
  searchIcon: {
    width: '18rem',
    height: '18rem',
    resizeMode: 'contain'
  },
  cancelIcon: {
    width: '10rem',
    height: '10rem',
    resizeMode: 'contain'
  },
  flatListView: {
    width: '100%-24rem',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderTopLeftRadius: '28rem',
    borderBottomLeftRadius: '28rem',
    borderTopRightRadius: '28rem',
    borderBottomRightRadius: '28rem',
    borderColor: Colors.black
  },
  marginTop: {
    marginTop: '15rem'
  },
  flatListInnerView: {
    flexDirection: 'row'
  },
  flatListInnerImage: {
    height: '53rem',
    width: '63rem',
    resizeMode: 'contain',
    right: '4rem'
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center'
  },
  flatListInnerText: {
    width: '82%',
    flexDirection: 'row'
  },
  flatListInnerShortTitle: {
    width:'50%',
    fontSize: '16rem',
    ...Fonts.style.boldFontBlue,
    paddingLeft: '8rem',
    top:'2rem'
  //  marginBottom: '2rem'
  },
  paddingBottom: {
    paddingBottom: '90rem'
  },
  paddingBottomSecond: {
    paddingBottom: '10rem'
  },
  flatListInnerFullTextTitle: {
    width:'50%',
    fontSize: '12rem',
    ...Fonts.style.mediumDarkGrey,
    paddingLeft: '8rem',
    marginBottom: '2rem',
    marginTop: '3rem'
  },
  flatListInnerTextView: {
    flexDirection: 'row'
  },
  securityInnerImage: {
    width: '35rem',
    height: '35rem',
    right: 0,
    position: 'absolute',
    top: '5rem',
    resizeMode: 'contain'
  },
  securitySubTitleView: {
    width: '80%'
  },
  flatListInnerTitleText: {
    fontSize: '16rem',
    ...Fonts.style.boldFontBlue
  },
  flatListInnersubTitleText: {
    ...Fonts.style.mediumDarkGrey,
    fontSize: '13rem',
    marginTop: '13rem'
  },
  profileContainerStyle: {
    width: '30rem',
    height: '10rem',
    borderRadius: '8rem',
    backgroundColor: '#ccc',
    padding: 0,
    bottom: '3rem'
  },
  profileCircleStyle: {
    width: '16rem',
    height: '16rem',
    borderRadius: '8rem',
    backgroundColor: Colors.lightBlueGrey
  },
  switchToggleView: {
    bottom:'3rem'
    },
  shadowLogoContainer: {
    width: '50rem',
    height: '50rem',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  popupModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popupView: {
    width: '80%',
    flexDirection: 'column',
    backgroundColor: Colors.darkBlue,
    borderRadius: '20rem'
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
    ...Fonts.style.semiBoldWhite,
    paddingVertical: '25rem'
  },
  modalTextView: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  sContainer: {
    height: '50rem',
    width: '60rem',
    borderRadius: '50rem',
    backgroundColor: Colors.black
  },
  toggleView:{
    right:'80rem',
    position:'absolute',
   
  }
});
