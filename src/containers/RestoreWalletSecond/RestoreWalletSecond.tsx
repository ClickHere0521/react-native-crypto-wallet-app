import React from 'react';
import { Text, FlatList, BackHandler, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Button } from '../../components';
import darkStyle from './Styles/RestoreWalletSecond';
import lightStyle from './Styles/RestoreWalletLightSecond';
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
  // txtOne: any;
  // txtTwo: any;
  // txtThree: any;
  // txtFour: any;
  // txtFive: any;
  // txtSix: any;
  txtSeven: any;
  txtEight: any;
  txtNine: any;
  txtTen: any;
  txtEleven: any;
  txtTwelve: any;
}

class RestoreWalletSecond extends React.PureComponent<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
      txtSeven: '',
      txtEight: '',
      txtNine: '',
      txtTen: '',
      txtEleven: '',
      txtTwelve: ''
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
  render() {
    const { navigation, themeType } = this.props;
    const { searchText } = this.state;
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
                    <Text style={styles.flatListInnerNumberText}>7</Text>
                    <TextInput
                      ref="txtSeven"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtEight.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtSeven: any) =>
                        this.setState({ txtSeven })
                      }
                      value={this.state.txtSeven}
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
                    <Text style={styles.flatListInnerNumberText}>8</Text>
                    <TextInput
                      ref="txtEight"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtNine.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtEight: any) =>
                        this.setState({ txtEight })
                      }
                      value={this.state.txtEight}
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
                    <Text style={styles.flatListInnerNumberText}>9</Text>
                    <TextInput
                      ref="txtNine"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtTen.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtNine: any) =>
                        this.setState({ txtNine })
                      }
                      value={this.state.txtNine}
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
                    <Text style={styles.flatListInnerNumberText}>10</Text>
                    <TextInput
                      ref="txtTen"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtEleven.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtTen: any) => this.setState({ txtTen })}
                      value={this.state.txtTen}
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
                    <Text style={styles.flatListInnerNumberText}>11</Text>
                    <TextInput
                      ref="txtEleven"
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.refs.txtTwelve.focus();
                      }}
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtEleven: any) =>
                        this.setState({ txtEleven })
                      }
                      value={this.state.txtEleven}
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
                    <Text style={styles.flatListInnerNumberText}>12</Text>

                    <TextInput
                      ref="txtTwelve"
                      style={styles.searchTxtInput}
                      placeholder={'------------'}
                      onChangeText={(txtTwelve: any) =>
                        this.setState({ txtTwelve })
                      }
                      value={this.state.txtTwelve}
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
              onPress={() => navigation.navigate('RestoreSuccessful')}
              shadowRadius={15}
              buttonStyle={styles.nextBtn}
              title={'Restore'}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestoreWalletSecond);
