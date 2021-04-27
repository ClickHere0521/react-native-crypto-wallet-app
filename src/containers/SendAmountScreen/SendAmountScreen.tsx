import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  BackHandler,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Button } from '../../components';
import darkStyle from './Styles/SendAmountScreen';
import lightStyle from './Styles/SendAmountLightScreen';
import { SelectedTheme } from '../../actions/userAction';
import { Images, Colors } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';
// import { firebase } from '@react-native-firebase/database';

export interface Props {
  navigation: any;
  initApp: any;
  addSelectedTheme: any;
  themeType: any;
}

class SendAmountScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sendAmount: {
        btc: 0.002146655,
        usd: 13.23,
        fee: 0.00023386,
        remain: 20
      }
    };
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
  handleSend = () => {
    if (this.state.sendAmount.btc == "")
      Alert.alert(
        "Warning",
        "Please put the bitcoin amount",
        [
          { text: "OK", onPress: () => { return; }}
        ]
      );
    else {
      database()
      .ref('/users/123')
      .set({
        name: 'Ada Lovelace',
        age: 31,
      })
      .then(() => console.log('Data set.'));
    }
  }
  handleBtc = (event) => {
    this.setState({ sendAmount: { btc: event, usd: (parseFloat(event) * 5341.68).toFixed(3), fee: (parseFloat(event) / 0.92).toFixed(3), remain: 20 - event } })
  }
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
              <TextInput
                style={styles.btcTextValue}
                placeholder={'0.002146655'}
                value={this.state.sendAmount.btc}
                onChangeText={(searchText: any) =>
                  this.handleBtc(searchText)
                }
                placeholderTextColor={
                  themeType === 'light'
                    ? Colors.bluedarkColor
                    : Colors.cloudyBlue
                }
              />
              {/* <TextInput
                style={styles.usdTextValue}
                // placeholder={'13.23'}
                value={this.state.sendAmount.usd}
                onChangeText={(searchText: any) =>
                  this.setState({ sendAmount : { btc: parseFloat(searchText) / 5341.68, usd:searchText } })
                }
                placeholderTextColor={
                  themeType === 'light'
                    ? Colors.bluedarkColor
                    : Colors.cloudyBlue
                }
              /> */}
              {/* <Text style={styles.btcTextValue}>{this.state.sendAmount.btc}</Text> */}
              <Text style={styles.usdTextValue}>${this.state.sendAmount.usd}</Text>
            </View>
            <View style={styles.separatorLine} />
            <LinearGradient
              colors={[Colors.blueWithPurple, Colors.niceBlue]}
              style={styles.circle}>
              <Text style={styles.circleInnerText}>ALL</Text>
            </LinearGradient>

            <Text style={styles.networkText}>Network Fee</Text>
            <Text style={styles.networkTextValue}>{this.state.sendAmount.fee} BTC</Text>

            <View style={styles.networkTextSeparatorLine} />

            <Text style={styles.RemainingText}>Remaining Balance</Text>
            <Text style={styles.RemainingTextValue}>{this.state.sendAmount.remain} BTC</Text>
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
              onPress={() => this.handleSend()}
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
