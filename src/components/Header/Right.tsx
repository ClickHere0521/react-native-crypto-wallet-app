import React from 'react';
import { View } from 'react-native';
import styles from './Styles';

export interface Props {
  style?: any;
  children?: any;
}

class HeaderRight extends React.PureComponent<Props> {
  render() {
    const { style, children } = this.props;
    return <View style={[styles.right, style]}>{children}</View>;
  }
}

export default HeaderRight;
