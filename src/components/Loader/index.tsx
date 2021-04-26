import React from 'react';
import { View } from 'react-native';
import styles from './Styles';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../../theme';

export interface Props {
  show?: boolean;
  transparent?: boolean;
}

class Loader extends React.PureComponent<Props> {
  static defaultProps: { show: boolean; transparent: boolean };
  render() {
    const { show, transparent } = this.props;
    if (!show) {
      return null;
    }
    return (
      <View style={[styles.container, transparent && styles.transparent]}>
        <ActivityIndicator size={'small'} color={Colors.black} />
      </View>
    );
  }
}

Loader.defaultProps = {
  show: false,
  transparent: false
};

export default Loader;
