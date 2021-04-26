import React from 'react';
import { View, Button, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import HeaderLeft from './Left';
import HeaderRight from './Right';
import HeaderTitle from './Title';
import { Images } from '../../theme';
export interface Props {
  style?: any;
  children?: any;
  transparent?: boolean;
  title?: string;
  titleStyle?: any;
  hasBackBtn?: boolean;
  onBackPress?: any;
  settingIcon?: any;
  leftImageIcon?: any;
  ImageIcon?: any;
  leftIconClick?: any;
  rightImageIcon?: any;
  rightIconClick?: any;
  hideLeadText?: any;
  AddThemeButtonClick?: any;
  AddThemeButton?: any;
  AddThemeIconClick?: any;
  subtitle?: any;
  leftSideIcon?: any;
}

export default class Header extends React.PureComponent<Props> {
  static TITLE = HeaderTitle;

  static LEFT = HeaderLeft;

  static RIGHT = HeaderRight;

  render() {
    const {
      style,
      children,
      transparent,
      title,
      titleStyle,
      leftImageIcon,
      leftIconClick,
      rightImageIcon,
      rightIconClick,
      hideLeadText,
      AddThemeButtonClick,
      AddThemeButton,
      AddThemeIconClick,
      leftSideIcon
    } = this.props;
    return (
      <View style={[styles.header, style, transparent && styles.transparent]}>
        <HeaderLeft style={styles.defaultBackBtnHeaderStyle}>
          <TouchableOpacity style={styles.logoBtn} onPress={leftIconClick}>
            <Image source={leftImageIcon} style={styles.imgStyle} />
          </TouchableOpacity>
        </HeaderLeft>

        <HeaderRight style={styles.defaultBackBtnHeaderStyle}>
          <TouchableOpacity style={styles.padding} onPress={rightIconClick}>
            <Image source={rightImageIcon} style={styles.imgStyle} />
          </TouchableOpacity>
        </HeaderRight>

        {AddThemeButton && (
          <TouchableOpacity
            style={styles.addButtonView}
            onPress={AddThemeButtonClick}>
            <Image source={AddThemeIconClick} style={styles.imgStyle} />
          </TouchableOpacity>
        )}
        <HeaderLeft style={styles.defaultBackBtnHeaderStyle}>
          <TouchableOpacity style={styles.logoBtn} onPress={leftIconClick}>
            <Image source={leftSideIcon} style={styles.leftImgStyle} />
          </TouchableOpacity>
        </HeaderLeft>

        {title && (
          <HeaderTitle style={titleStyle} hideLeadText={hideLeadText}>
            {title}
          </HeaderTitle>
        )}
        {children}
      </View>
    );
  }
}
