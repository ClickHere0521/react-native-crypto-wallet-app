/**
 * Project: Flash NextGen
 * Root Component
 */

import React from 'react';
import {
  View,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  Platform
} from 'react-native';
import { Provider, connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import KeyboardManager from 'react-native-keyboard-manager';
import store from './store';
import App from './navigation/ReduxNavigation';
import { Styles } from './theme';

if (Platform.OS === 'ios') {
  KeyboardManager.setEnableAutoToolbar(true);
  KeyboardManager.setToolbarDoneBarButtonItemText('Done');
  KeyboardManager.setShouldShowToolbarPlaceholder(false);
  KeyboardManager.setShouldToolbarUsesTextFieldTintColor(true);
}

console.disableYellowBox = true;

const { width } = Dimensions.get('window');

EStyleSheet.build({ $rem: width / 375 });

// Disable font scaling
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const mapStateToProps = (state: any) => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const Root = () => (
  <View style={Styles.rootContainer}>
    <StatusBar
      translucent
      barStyle="dark-content"
      backgroundColor="transparent"
    />
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  </View>
);

export default Root;
