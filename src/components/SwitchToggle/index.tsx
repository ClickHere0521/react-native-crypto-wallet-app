import React from 'react';
import { View } from 'react-native';
import styles from './Style';
import SwitchToggle from 'react-native-switch-toggle';
export interface Props {
  children?: any;
  circleColorOn?: any;
  circleColorOff?: any;
  valueText?: any;
  onPressValue?: any;
  switchOnValue?: any;
  containerStyle?: any;
  circleStyle?: any;
}
export interface state {
  switchButton: any;
}

export default class SwitchScreen extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      switchButton: false
    };
  }
  onPressTwo = () => {
    this.setState({ switchButton: !this.state.switchButton });
  };
  render() {
    const {
      circleColorOn,
      circleColorOff,
      onPressValue,
      switchOnValue,
      containerStyle,
      circleStyle
    } = this.props;
    return (
      <View style={styles.switchToggleView}>
        <SwitchToggle
          containerStyle={containerStyle}
          circleStyle={circleStyle}
          switchOn={switchOnValue}
          circleColorOn={circleColorOn}
          circleColorOff={circleColorOff}
          duration={500}
          onPress={onPressValue}
        />
      </View>
    );
  }
}
