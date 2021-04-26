import React from 'react';
import { View } from 'react-native';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme';
export interface Props {
  children?: any;
  ViewStyle?: any;
  firstColor: any;
  secondColor: any;
}

export default class LinearGradientView extends React.Component<Props> {
  render() {
    const { ViewStyle, firstColor, secondColor } = this.props;
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.8, y: 0.0 }}
        colors={[firstColor, secondColor]}
        style={ViewStyle}></LinearGradient>
    );
  }
}
