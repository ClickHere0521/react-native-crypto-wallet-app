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
import { UpdateRemainBtc } from '../../actions/userAction';
import { Images, Colors } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export interface Props {
  navigation: any;
  initApp: any;
  addSelectedTheme: any;
  themeType: any;
  updateBtc: any;
  remainBtc: any;
}

class SendAmountScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    const { remainBtc } = this.props;
    this.state = {
      sendAmount: {
        btc: 0.002146655,
        usd: 13.23,
        fee: 0.00023386,
        remain: remainBtc
      },
      destination: ''
    };
  }
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
    const user = auth().currentUser;
    database()
      .ref('transactions')
      .on('value', snapshot => {
        if (snapshot)
          if (snapshot.val().sending)
            if (snapshot.val().to == user.email)
              Alert.alert(
                "Bitcoin Received",
                "You have received " + snapshot.val().availableBalances.BTC + " btc from " + snapshot.val().from + " successfully!",
                [
                  {
                    text: "OK", onPress: () => {
                      database()
                        .ref('transactions')
                        .update({
                          "sending": false
                        })
                        .then(() => {
                          return;
                        })
                    }
                  }
                ]
              )
      });
  };
  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  };
  backHandler = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };
  handleSend = () => {
    const { updateBtc } = this.props;
    const btc = this.state.sendAmount.btc;
    const usd = this.state.sendAmount.usd;
    const des = this.state.destination;
    const remain = this.state.sendAmount.remain;
    const user = auth().currentUser;

    if (btc == "")
      Alert.alert(
        "Warning",
        "Please put the bitcoin amount",
        [
          { text: "OK", onPress: () => { return; } }
        ]
      );
    else if (des == '')
      Alert.alert(
        "Warning",
        "Please put the destination",
        [
          { text: "OK", onPress: () => { return; } }
        ]
      )
    else {
      const newReference = database()
        .ref('/transactions');
      newReference
        .set({
          "status": null,
          "balances": {
            "BTC": btc,
            "USDT": usd
          },
          "depositAddresses": {
            "BTC": "ms7YBh3SoQAidKHJ5D7NcivuFq2cixUR9C",
            "ETH": "0xe989ef08f9c4e27051147556bdbff7e9cd3458c1"
          },
          "totalBalances": {
            "BTC": btc,
            "USDT": usd
          },
          "availableBalances": {
            "BTC": btc,
            "USDT": usd
          },
          "callbackUrl": null,
          "srn": "wallet:WA_4PYQCREB4FL",
          "notes": "Wallet for mrwings-cali1",
          "name": "mrwings-cali1",
          "id": "WA_4PYQCREB4FL",
          "from": user.email,
          "to": des,
          "sending": true
        })
        .then(() => {
          Alert.alert(
            "Sucess",
            "You sent " + btc + "bitcoin to " + des + " Successfully!",
            [
              {
                text: "OK", onPress: () => {
                  updateBtc(remain);
                }
              }
            ]
          )
        });

    }
  }
  handleBtc = (event) => {
    // const remainBtcTemp = this.state.sendAmount.remainBtc;
    this.setState({ sendAmount: { btc: event, usd: (parseFloat(event) * 5341.68).toFixed(3), fee: (parseFloat(event) / 0.92).toFixed(3), remain: 18 - event } })
  }
  handleDes = (event) => {
    this.setState({ destination: event })
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
            {/* <View style={styles.bitCoinAddressView}>
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
            </View> */}
            <View style={styles.bitCoinAddressView}>
              <TextInput
                style={styles.bitCoinAddressTxtInput}
                placeholder={'The email address you send'}
                onChangeText={(searchText: any) =>
                  this.handleDes(searchText)
                }
                type="email"
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
              title={'Send'}
              onPress={() => this.handleSend()}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ user }: any) {
  return { themeType: user.themeType, remainBtc: user.remainBtc };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ addSelectedTheme: SelectedTheme, updateBtc: UpdateRemainBtc }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SendAmountScreen);
