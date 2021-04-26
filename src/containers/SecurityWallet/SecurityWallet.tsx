import React from 'react';
import { View, Image, Text, TouchableOpacity, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import darkSytle from './Styles/SecuirtyWallet';
import lightStyle from './Styles/SecuirtyWalletLight';
import { Images } from '../../theme';
import { SelectedTheme } from './../../actions/userAction';
import { Alert } from 'react-native';
export interface Props {
  navigation: any;
  initApp: any;
  addSelectedTheme: any;
  themeType: any;
  tag: any;
}
export interface state {
  passwordKey: any;
  totalValue: any;
  Holder: any;
  Holder2: any;
  Holder3: any;
}
const SampleArray: any[] = [];

class SecurityWallet extends React.PureComponent<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      passwordKey: [],
      totalValue: [],
      Holder: '',
      Holder2: '',
      Holder3: ''
    };
  }
  AddItemsToArray = () => {
    SampleArray.push(this.state.Holder.toString());
  };
  componentDidMount = () => {
    let nulldata = null;
    this.setState({
      Holder: SampleArray.splice(nulldata)
    });
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
        <Content>
          <Header
            leftImageIcon={
              themeType === 'light' ? Images.BackBlueArrow : Images.BackArrow
            }
            leftIconClick={() => {
              navigation.goBack(null);
            }}
            hideLeadText={themeType === 'light' ? true : false}
            onBackPress={() => navigation.goBack()}
          />
          <View style={styles.container}>
            <View style={styles.circleShapeView}>
              <View style={styles.shadowLogoContainer}>
                <Image source={Images.QrCode} style={styles.qrCodeImage} />
              </View>
            </View>
            <View style={styles.textView}>
              <Text style={styles.walletText}> Secured Wallet </Text>
              <Text style={styles.passwordText}>Enter Your Passcode</Text>
              <View style={styles.dotStyle}>
                {SampleArray.length > 0 ? (
                  <View style={styles.dot} />
                ) : (
                  <View style={styles.separatorLine} />
                )}

                {SampleArray.length > 1 ? (
                  <View style={styles.dot} />
                ) : (
                  <View style={styles.separatorLine} />
                )}
                {SampleArray.length > 2 ? (
                  <View style={styles.dot} />
                ) : (
                  <View style={styles.separatorLine} />
                )}
                {SampleArray.length > 3 ? (
                  <View style={styles.dot} />
                ) : (
                  <View style={styles.separatorLine} />
                )}
                {SampleArray.length > 4 ? (
                  <View style={styles.dot} />
                ) : (
                  <View style={styles.separatorLine} />
                )}
                {SampleArray.length > 5 ? (
                  <View style={styles.dot} />
                ) : (
                  <View style={styles.separatorLine} />
                )}
              </View>
              <View style={styles.numberView}>
                <View style={styles.firstNumber}>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      {
                        this.setState({ Holder: ['1'] });
                        SampleArray.push(this.state.Holder.toString());
                      }
                    }}>
                    <Text style={styles.numberText}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['2'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.numberText}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['3'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.numberText}>3</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.firstNumber}>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['4'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.numberText}>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['5'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.numberText}>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['6'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.numberText}>6</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.firstNumber}>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['7'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.numberText}>7</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['8'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.numberText}>8</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['9'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.numberText}>9</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.firstNumber}>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      SampleArray.length > 5
                        ? navigation.navigate('DashBoard')
                        : Alert.alert('Enter Your Passcode');
                    }}>
                    <Image
                      source={
                        themeType === 'light'
                          ? Images.CheckMarkLight
                          : Images.CheckMark
                      }
                      style={styles.imgIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({ Holder: ['0'] });
                      SampleArray.push(this.state.Holder.toString());
                    }}>
                    <Text style={styles.zeroNumberText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchableView}
                    onPress={() => {
                      this.setState({
                        Holder: SampleArray.splice(SampleArray.length - 1, 1)
                      });
                    }}>
                    <Image
                      source={
                        themeType === 'light'
                          ? Images.CancelButtonLight
                          : Images.CrossIcon
                      }
                      style={styles.crossImgIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SecurityWallet);
