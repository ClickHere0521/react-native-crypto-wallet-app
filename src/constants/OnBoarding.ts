import EStyleSheet from 'react-native-extended-stylesheet';
import { Images} from '../theme';
export interface onBoaringProps {
  title: string;
  desc: string;
  img: any;
  imgStyle: EStyleSheet.AnyObject;
}
const onBoaring: onBoaringProps[] = [
  {
    title: 'SECURITY',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum sim text.',
    img:Images.SecurityImage,
    imgStyle: EStyleSheet.create({
      img: {
        width: '100%-60rem',
        resizeMode: 'center'
      }
    }).img
  },
  {
    title: 'SYSTEM',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum sim text.',
    img: Images.SystemImage,
    imgStyle: EStyleSheet.create({
      img: {
        width: '100%-60rem',
        resizeMode: 'center'
      }
    }).img
  },
  {
    title: 'PERSPECTIVE',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum sim text.',
    img: Images.PerspectiveImage,
    imgStyle: EStyleSheet.create({
      img: {
        width: '100%-60rem',
        resizeMode: 'center'
      }
    }).img
  }
];

export default onBoaring;
