import React from 'react';
import { Keyboard, View, Platform } from 'react-native';
import styles from './Styles';
import { isIphoneX } from '../../libs/Utils';

export interface Props {
  style?: any;
  children?: any;
  keepStatic?: boolean;
}

interface State {
  isVisible: boolean;
  keyboardHeight: number;
}

class Content extends React.Component<Props, State> {
  keyboardWillShowSub: any;

  keyboardWillHideSub: any;

  keyboardDidShowListener: any;

  keyboardDidHideListener: any;

  rootRef: any;

  scrollviewRef: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: true,
      keyboardHeight: 0
    };
  }

  componentDidMount = () => {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardWillHide
    );
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide
    );
  };

  componentWillUnmount = () => {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  };

  keyboardWillShow = () => {
    const { keepStatic } = this.props;
    if (keepStatic) {
      return;
    }
    this.setState({ isVisible: false });
  };

  keyboardWillHide = () => {
    this.setState({ isVisible: true });
  };

  keyboardDidShow = (e: any) => {
    const { keepStatic } = this.props;
    if (keepStatic && Platform.OS === 'ios') {
      let keyboardHeight = e.endCoordinates.height;
      if (isIphoneX()) {
        keyboardHeight -= 35;
      }
      this.setState({ keyboardHeight });
    }
  };

  keyboardDidHide = () => {
    const { keepStatic } = this.props;
    if (keepStatic && Platform.OS === 'ios') {
      this.setState({ keyboardHeight: 0 });
    }
  };

  getStyle = (): any => {
    const { style } = this.props;
    const { keyboardHeight } = this.state;
    const tmpStyle: any = [styles.content];
    if (style) {
      tmpStyle.push(style);
    }
    tmpStyle.push({ marginBottom: keyboardHeight });
    return tmpStyle;
  };

  render = () => {
    const { children } = this.props;
    const { isVisible } = this.state;

    const style = this.getStyle();
    return isVisible ? <View style={style}>{children}</View> : null;
  };
}

export default Content;
