import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity as TouchableOpacityClass
} from 'react-native';
import styles from './Styles';
import { WithPreventDoubleClick } from './WithPreventDoubleClick';
import { Images, Colors } from './../../theme';
import LinearGradient from 'react-native-linear-gradient';
const TouchableOpacity = WithPreventDoubleClick(TouchableOpacityClass);

export interface Props {
  onPress: any;
  style?: any;
  titleStyle?: any;
  title: any;
  buttonStyle?: any;
  isArrowBtnTrue?:any;
}

class Button extends React.PureComponent<Props> {
  render() {
    const { onPress, title, titleStyle, buttonStyle,isArrowBtnTrue } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={[Colors.niceBlue, Colors.blueWithPurple]}
          style={[styles.defaultBtn, buttonStyle || {}]}>
          <Text style={[styles.titleTxtWhite, titleStyle]}>{title}</Text>
         {isArrowBtnTrue==true &&
          <Image
            source={Images.RightArrowImage}
            style={styles.rightBtn}></Image>}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

export default Button;
