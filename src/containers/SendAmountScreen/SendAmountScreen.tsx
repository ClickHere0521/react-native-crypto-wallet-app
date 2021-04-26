import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Button } from '../../components';
import darkStyle from './Styles/SendAmountScreen';
import lightStyle from './Styles/SendAmountLightScreen';
import { SelectedTheme } from '../../actions/userAction';
import { Images, Colors } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
export interface Props {
  navigation: any;
  initApp: any;
  addSelectedTheme: any;
  themeType: any;
}

class SendAmountScreen extends React.PureComponent<Props> {
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
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Content>
          <Header
            leftImageIcon={
              themeType === 'light' ? Images.BackBlueArrow : Images.BackArrow
            }
            leftIconClick={() => {
              navigation.goBack();
            }}
            settingIcon
            rightImageIcon={
              themeType === 'light'
                ? Images.SettingLightImage
                : Images.SettingImage
            }
            rightIconClick={() => {
              navigation.navigate('Setting');
            }}
            title={'Send  Bitcoin '}
            hideLeadText={themeType === 'light' ? true : false}
          />
          <View style={styles.bitcoinImageView}>
            <Image source={Images.BitCoinImage} style={styles.bitcoinImage} />
            <Text style={styles.bitcoinImageBottomText}>Enter Amount</Text>
            <View style={styles.btcTextView}>
              <Text style={styles.btcText}>BTC</Text>
              <Text style={styles.usdText}>USD</Text>
            </View>
            <View style={styles.btcTextValueView}>
              <Text style={styles.btcTextValue}>0.002146655</Text>
              <Text style={styles.usdTextValue}>$13.23</Text>
            </View>
            <View style={styles.separatorLine} />
            <LinearGradient
              colors={[Colors.blueWithPurple, Colors.niceBlue]}
              style={styles.circle}>
              <Text style={styles.circleInnerText}>ALL</Text>
            </LinearGradient>

            <Text style={styles.networkText}>Network Fee</Text>
            <Text style={styles.networkTextValue}>0.00023386 BTC</Text>

            <View style={styles.networkTextSeparatorLine} />

            <Text style={styles.RemainingText}>Remaining Balance</Text>
            <Text style={styles.RemainingTextValue}>20 BTC</Text>
            <TouchableOpacity>
              <Image
                source={
                  themeType === 'light' ? Images.AddIconLight : Images.AddIcon
                }
                style={styles.addIconStyle}
              />
            </TouchableOpacity>
            <View style={styles.bitCoinAddressView}>
              <TouchableOpacity style={styles.qrCodeButtonView}>
                <Image
                  source={
                    themeType === 'light'
                      ? Images.BlackQrCode
                      : Images.QrCodeImage
                  }
                  style={styles.qrCodeIcon}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.bitCoinAddressTxtInput}
                placeholder={'Tab To Paste BitCoin Address'}
                onChangeText={(searchText: any) =>
                  this.setState({ searchText })
                }
                placeholderTextColor={
                  themeType === 'light'
                    ? Colors.bluedarkColor
                    : Colors.cloudyBlue
                }
              />
            </View>
            <Button
              shadowRadius={15}
              buttonStyle={styles.nextBtn}
              title={'Next'}
            />
          </View>
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(SendAmountScreen);
