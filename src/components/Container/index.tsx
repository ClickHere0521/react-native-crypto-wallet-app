import React from 'react';
import { SafeAreaView, StatusBar, View, ImageBackground } from 'react-native';
import { Colors } from '../../theme';
import styles from './Styles';
import { Images } from '../../theme';
import { Platform } from 'react-native';
export interface Props {
  children?: any;
  transparentStatusBar?: boolean;
  statusBarColor?: any;
  lightContent?: boolean;
  safeAreaView?: boolean;
  safeAreaViewHeader?: boolean;
  conatinerStyle?: any;
  selectedThemeType?: any;
}

export default class Container extends React.Component<Props> {
  render() {
    const {
      children,
      transparentStatusBar,
      statusBarColor,
      lightContent,
      safeAreaView,
      safeAreaViewHeader,
      conatinerStyle,
      selectedThemeType = 'dark'
    } = this.props;
    const style: any = {
      flex: 0,
      alignItems: 'center',
      backgroundColor: !transparentStatusBar
        ? statusBarColor || selectedThemeType === 'dark'
          ? Colors.safeAreaColor
          : Colors.white
        : 'transparent'
    };
    return (
      <>
        {Platform.OS == 'ios' ? (
          <StatusBar
            backgroundColor={
              lightContent
                ? 'transparent'
                : statusBarColor || Colors.statusBarColor
            }
            barStyle={
              selectedThemeType === 'dark' ? 'light-content' : 'dark-content'
            }
          />
        ) : (
          <StatusBar
            barStyle={
              selectedThemeType === 'dark' ? 'light-content' : 'dark-content'
            }
            backgroundColor={
              selectedThemeType === 'dark'
                ? Colors.statusBarColor
                : Colors.white
            }
          />
        )}

        {safeAreaView !== false && <SafeAreaView style={style} />}
        {safeAreaView !== false &&
          safeAreaViewHeader !== false &&
          selectedThemeType === 'dark' && (
            <SafeAreaView style={[styles.safeViewcontainer, conatinerStyle]}>
              <ImageBackground
                source={Images.BackgroundImage}
                style={styles.backgroundImage}>
                {children}
              </ImageBackground>
            </SafeAreaView>
          )}
        {safeAreaView !== false &&
          safeAreaViewHeader !== false &&
          selectedThemeType === 'light' && (
            <SafeAreaView
              style={[styles.safeViewLightcontainer, conatinerStyle]}>
              {children}
            </SafeAreaView>
          )}
        {(safeAreaView === false || safeAreaViewHeader === false) && (
          <View
            style={[
              styles.container,
              safeAreaViewHeader === false && styles.statusBarMarginTop
            ]}>
            {children}
            {selectedThemeType === 'dark' && (
              <ImageBackground
                source={Images.BackgroundImage}
                style={styles.backgroundImage}>
                {children}
              </ImageBackground>
            )}
          </View>
        )}
      </>
    );
  }
}
