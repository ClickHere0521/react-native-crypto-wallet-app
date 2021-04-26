import React from 'react';
import { View, Image } from 'react-native';
import { Footer } from '..';
import Styles from './Style';

export interface Props {
  isFooter?: any;
  isAdvertisement?: any;
}
export interface state {
  isConnected: any;
}

class Advertisement extends React.PureComponent<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isConnected: false
    };
  }

  componentDidMount = () => {};

  render() {
    return (
      <View>
        <Footer style={Styles.Footer}>
          <View style={Styles.circleShapeView}></View>
        </Footer>
      </View>
    );
  }
}

export default Advertisement;
