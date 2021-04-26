import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button } from '../../components';
import darkSytle from './Styles/SecurityEnableScreen';
import lightStyle from './Styles/SecurityEnableScreenLight';
import { Images } from '../../theme';

import { SelectedTheme } from './../../actions/userAction';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class SecurityEnableScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  };
  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  };
  backHandler = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };
  render() {
    const { themeType, navigation } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkSytle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <View style={styles.mainView}>
          <View style={styles.innerImageView}>
            <Image
              source={
                themeType === 'light'
                  ? Images.SecurityEnableLightIcon
                  : Images.SecurityEnableIcon
              }
              style={styles.innerImage}
            />
          </View>
          <Text style={styles.innerText}>Security Enabled</Text>
          <Text style={styles.innerDescriptionFirstText}>
            Your wallet is now secured
          </Text>
          <Text style={styles.innerDescriptionText}>
            You will be asked to enter your passcode when you open the app or
            resume it from the background.
          </Text>
          <View style={styles.bottomButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SecurityWallet');
              }}>
              <ImageBackground
                source={Images.RectangleShape}
                style={styles.continueBtn}>
                <Text style={styles.continueText}>Continue</Text>
              </ImageBackground>
            </TouchableOpacity>
            <Button
              onPress={() => navigation.goBack(null)}
              style={styles.shadowStyle}
              shadowRadius={15}
              buttonStyle={styles.getBackBtn}
              title={'BACK'}
            />
          </View>
        </View>
      </Container>
    );
  }
}

function mapStateToProps({ user }: any) {
  return { themeType: user.themeType };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ addSelectedTheme: SelectedTheme }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecurityEnableScreen);
