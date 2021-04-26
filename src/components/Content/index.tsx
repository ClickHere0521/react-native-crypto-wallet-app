import React from 'react';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './Styles';

export interface Props {
  contentContainerStyle?: any;
  style?: any;
  children?: any;
  hasHeader?: boolean;
  hasFooter?: boolean;
  extraScrollHeight?: number;
  showsVerticalScrollIndicator?: boolean;
  disableKBDismissScroll?: boolean;
  enableResetScrollToCoords?: boolean;
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled' | undefined;
}

interface State {
  isVisible: boolean;
}

class Content extends React.Component<Props, State> {
  keyboardWillShowSub: any;

  keyboardWillHideSub: any;

  rootRef: any;

  scrollviewRef: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: true
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
  };

  componentWillUnmount = () => {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  };

  keyboardWillShow = () => {
    this.setState({ isVisible: false });
  };

  keyboardWillHide = () => {
    this.setState({ isVisible: true });
  };

  getStyle = (): any => {
    const { style } = this.props;
    const tmpStyle: any = [styles.content];
    if (style) {
      tmpStyle.push(style);
    }
    return tmpStyle;
  };

  getContentContainerStyle = (): any => {
    const { contentContainerStyle, hasHeader, hasFooter } = this.props;
    const { isVisible } = this.state;
    const style: any = [styles.contentContainerStyle];
    if (contentContainerStyle) {
      style.push(contentContainerStyle);
    }
    if (hasFooter === true && isVisible) {
      style.push({ marginBottom: styles.$footerHeight });
    }
    if (hasHeader === false) {
      style.push({ paddingTop: 0 });
    }
    return style;
  };

  render = () => {
    const {
      children,
      extraScrollHeight,
      showsVerticalScrollIndicator,
      disableKBDismissScroll,
      enableResetScrollToCoords,
      keyboardShouldPersistTaps
    } = this.props;

    const style = this.getStyle();
    const contentContainerStyle = this.getContentContainerStyle();
    return (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={
          disableKBDismissScroll ? undefined : { x: 0, y: 0 }
        }
        keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
        ref={(c: any) => {
          this.scrollviewRef = c;
          this.rootRef = c;
        }}
        style={style}
        contentContainerStyle={contentContainerStyle}
        extraScrollHeight={extraScrollHeight || 81}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
        enableResetScrollToCoords={enableResetScrollToCoords || false}>
        {children}
      </KeyboardAwareScrollView>
    );
  };
}

export default Content;
