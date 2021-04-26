import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';
import { Fonts } from '../../../theme';
export default EStyleSheet.create({
  defaultBtn: {
    flexDirection: 'row',
    width: '140rem',
    height: '45rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25rem',
    alignSelf: 'center'
  },
  rightBtn: {
    right: '40rem',
    tintColor: 'white',
    position: 'absolute'
  },
  titleTxtWhite: {
    fontSize: '18rem',
    ...Fonts.style.boldWhite,
    textAlign: 'center'
  },
});
