import React from 'react';
import { View } from 'react-native';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {Colors}from '../../theme'
export interface Props {
  children?: any;
  
}

export default class SepratorLine extends React.Component<Props> {
  render() {
    return (
      <View style={styles.linearGradientView}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.8, y: 0.0 }}
          colors={[
            Colors.niceBlue,
           Colors.blueWithPurple
          ]}
          style={styles.linearGradientLine}></LinearGradient>
      </View>
    );
  }
}
