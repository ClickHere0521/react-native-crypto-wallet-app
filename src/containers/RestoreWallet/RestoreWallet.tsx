import React from 'react';
import { Text, FlatList, BackHandler, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Button } from '../../components';
import darkStyle from './Styles/RestoreWallet';
import lightStyle from './Styles/RestoreWalletLight';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Images } from '../../theme';
import { SelectedTheme } from './../../actions/userAction';
import { RestoredWalletFlatListPhrase } from '../../config/const';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}
export interface state {
  searchText: any;
  txtOne: any;
  txtTwo: any;
  txtThree: any;
  txtFour: any;
  txtFive: any;
  txtSix: any;
}

class RestoreWallet extends React.PureComponent<Props, state> {
  secondTxtRef: any;
  ThiredTxtRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
      txtOne: '',
      txtTwo: '',
      txtThree: '',
      txtFour: '',
      txtFive: '',
      txtSix: ''
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
  moveFocus = (key: any) => {
    let toFocus = null;

    switch (key) {
      case 'firstNameRef':
        // toFocus = this.lastNameRef.focus();
        break;
      case 'secondTxtRef':
        toFocus = this.secondTxtRef.focus();
        break;
      default:
        toFocus = null;
    }
    return toFocus;
  };
  render() {
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Content>
          <Header
            title={'Restore Wallet'}
            leftImageIcon={
              themeType === 'light' ? Images.BackBlueArrow : Images.BackArrow
            }
            leftIconClick={() => {
              navigation.goBack(null);
            }}
            hideLeadText={themeType === 'light' ? true : false}
          />
          <View style={styles.MainView}>
            <View style={styles.headingTitleView}>
              <Text style={styles.headingTitle}>
                Type your 12-word recovery phrase restore you existing wallet
              </Text>
            </View>
            <View>
              <View style={[styles.shadowContainer, styles.marginTop]}>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [
                          Colors.darkGreyBlueThired,
                          Colors.darkGreyBlueThired,
                          Colors.duskSecond
                        ]
                  }
                  style={styles.flatListView}>
                  <View style={styles.flatListInnerView}>
                    <Text style={styles.flatListInnerNumberText}>1</Text>
                    <TextInput
                      // autoFocus={true}
                      ref="txtone"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtTwo.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtOne: any) => this.setState({ txtOne })}
                      value={this.state.txtOne}
                      placeholderTextColor={
                        themeType === 'light'
                          ? Colors.bluedarkColor
                          : Colors.bluegrey
                      }
                    />
                  </View>
                </LinearGradient>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [
                          Colors.darkGreyBlueThired,
                          Colors.darkGreyBlueThired,
                          Colors.duskSecond
                        ]
                  }
                  style={styles.flatListView}>
                  <View style={styles.flatListInnerView}>
                    <Text style={styles.flatListInnerNumberText}>2</Text>
                    <TextInput
                      ref="txtTwo"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtThree.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtTwo: any) => this.setState({ txtTwo })}
                      value={this.state.txtTwo}
                      placeholderTextColor={
                        themeType === 'light'
                          ? Colors.bluedarkColor
                          : Colors.bluegrey
                      }
                    />
                  </View>
                </LinearGradient>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [
                          Colors.darkGreyBlueThired,
                          Colors.darkGreyBlueThired,
                          Colors.duskSecond
                        ]
                  }
                  style={styles.flatListView}>
                  <View style={styles.flatListInnerView}>
                    <Text style={styles.flatListInnerNumberText}>3</Text>
                    <TextInput
                      ref="txtThree"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtFour.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtThree: any) =>
                        this.setState({ txtThree })
                      }
                      value={this.state.txtThree}
                      placeholderTextColor={
                        themeType === 'light'
                          ? Colors.bluedarkColor
                          : Colors.bluegrey
                      }
                    />
                  </View>
                </LinearGradient>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [
                          Colors.darkGreyBlueThired,
                          Colors.darkGreyBlueThired,
                          Colors.duskSecond
                        ]
                  }
                  style={styles.flatListView}>
                  <View style={styles.flatListInnerView}>
                    <Text style={styles.flatListInnerNumberText}>4</Text>
                    <TextInput
                      ref="txtFour"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtFive.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtFour: any) =>
                        this.setState({ txtFour })
                      }
                      value={this.state.txtFour}
                      placeholderTextColor={
                        themeType === 'light'
                          ? Colors.bluedarkColor
                          : Colors.bluegrey
                      }
                    />
                  </View>
                </LinearGradient>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [
                          Colors.darkGreyBlueThired,
                          Colors.darkGreyBlueThired,
                          Colors.duskSecond
                        ]
                  }
                  style={styles.flatListView}>
                  <View style={styles.flatListInnerView}>
                    <Text style={styles.flatListInnerNumberText}>5</Text>
                    <TextInput
                      ref="txtFive"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtSix.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtFive: any) =>
                        this.setState({ txtFive })
                      }
                      value={this.state.txtFive}
                      placeholderTextColor={
                        themeType === 'light'
                          ? Colors.bluedarkColor
                          : Colors.bluegrey
                      }
                    />
                  </View>
                </LinearGradient>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [
                          Colors.darkGreyBlueThired,
                          Colors.darkGreyBlueThired,
                          Colors.duskSecond
                        ]
                  }
                  style={styles.flatListView}>
                  <View style={styles.flatListInnerView}>
                    <Text style={styles.flatListInnerNumberText}>6</Text>

                    <TextInput
                      ref="txtSix"
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtSix: any) => this.setState({ txtSix })}
                      value={this.state.txtSix}
                      placeholderTextColor={
                        themeType === 'light'
                          ? Colors.bluedarkColor
                          : Colors.bluegrey
                      }
                    />
                  </View>
                </LinearGradient>
              </View>
            </View>

            <Button
              titleStyle={styles.titleStyle}
              style={styles.shadowStyle}
              onPress={() => navigation.navigate('RestoreWalletSecond')}
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

export default connect(mapStateToProps, mapDispatchToProps)(RestoreWallet);
