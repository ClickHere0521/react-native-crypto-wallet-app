import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

export interface Props {
  style?: any;
  textstyle?: any;
  children?: any;
  hideLeadText?: any;
}

class HeaderTitle extends React.PureComponent<Props> {
  render() {
    const { style, textstyle, children, hideLeadText } = this.props;
    return (
      <View style={[styles.title, style]}>
        <Text
          numberOfLines={1}
          style={[
            hideLeadText ? styles.titleBlackTxt : styles.titleTxt,
            textstyle
          ]}>
          {children}
        </Text>
      </View>
    );
  }
}

export default HeaderTitle;
