import React from 'react';
import {
  Text,
  FlatList,
  View,
  Image,
  BackHandler,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Switch } from '../../components';
import darkStyle from './Styles/SettingScreen';
import lightStyle from './Styles/SettingLightScreen';
import { Images, Colors } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { SettingFlatListdata } from '../../config/const';
import { SelectedTheme } from './../../actions/userAction';
import { setTheme } from './../../actions/CommonAction';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
  setThemetype: any;
}
export interface state {
  switchThemeButton: any;
  switchOnFirstButton: any;
  switchOnSecondButton: any;
  switchOnThiredButton: any;
}
class SettingScreen extends React.PureComponent<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      switchThemeButton: false,
      switchOnFirstButton: false,
      switchOnSecondButton: false,
      switchOnThiredButton: false
    };
  }
  componentDidMount = async () => {
    this.props.themeType === 'light' &&
      this.setState({ switchThemeButton: true });
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  };
  backHandler = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };
  switchThemeonPress = () => {
    this.setState({ switchThemeButton: !this.state.switchThemeButton });

    this.state.switchThemeButton === true
      ? this.changeThemeRequest('dark')
      : this.changeThemeRequest('light');
  };
  switchOnFirstPress = () => {
    this.setState({ switchOnFirstButton: !this.state.switchOnFirstButton });
  };
  switchOnSecondPress = () => {
    this.setState({ switchOnSecondButton: !this.state.switchOnSecondButton });
  };
  switchOnThiredPress = () => {
    this.setState({ switchOnThiredButton: !this.state.switchOnThiredButton });
  };
  changeThemeRequest = (selectedTheme: any) => {
    const { setThemetype } = this.props;
    setThemetype(selectedTheme);
  };

  render() {
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Content>
          <Header
            leftImageIcon={
              themeType === 'light' ? Images.walletBlue : Images.wallet
            }
            title={'Setting'}
            leftIconClick={() => {
              navigation.navigate('DashBoard');
            }}
            hideLeadText={themeType === 'light' ? true : false}
          />

          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.paddingBottom}
            data={SettingFlatListdata}
            renderItem={({ item, index }: any) => (
              <View style={[styles.shadowContainer, styles.marginTop]}>
                <LinearGradient
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [Colors.darkGreyBlueSecond, Colors.dusk]
                  }
                  style={styles.flatListView}>
                  <TouchableOpacity
                    onPress={() => {
                      index === 2 && navigation.navigate('SelectCurrency');
                      index === 3 && navigation.navigate('RestoreWallet');
                    }}
                    disabled={item.touchable === true ? false : true}
                    style={styles.flatListInnerView}>
                    <Image
                      source={
                        themeType === 'light' ? item.blackImage : item.image
                      }
                      style={styles.flatListInnerImage}
                    />
                    <View style={styles.itemDetailsView}>
                      <Text style={styles.flatListInnerShortTitle}>
                        {item.title}
                      </Text>
                      {item.currency == true && (
                        <View style={styles.currencyTextView}>
                          <Text style={styles.currencyText}>USD</Text>
                        </View>
                      )}
                      {index === 0 && (
                        <View style={styles.toggleView}>
                          <Switch
                            switchOn={this.state.switchOnFirstButton}
                            onPress={() =>
                              this.setState({
                                switchOnFirstButton: !this.state
                                  .switchOnFirstButton
                              })
                            }
                          />
                        </View>
                      )}
                      {index === 1 && (
                        <View style={styles.toggleView}>
                          <Switch
                            switchOn={this.state.switchOnSecondButton}
                            onPress={() =>
                              this.setState({
                                switchOnSecondButton: !this.state
                                  .switchOnSecondButton
                              })
                            }
                          />
                        </View>
                      )}
                      {index === 4 && item.SwitchBtn == true && (
                        <View style={styles.toggleView}>
                          <Switch
                            switchOn={this.state.switchThemeButton}
                            onPress={this.switchThemeonPress}
                          />
                        </View>
                      )}
                      <View style={styles.subTitleView}>
                        <Text style={styles.subTitle}>{item.subTitle}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            )}
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({ user }: any) {
  return {
    themeType: user.themeType
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      addSelectedTheme: SelectedTheme,
      setThemetype: setTheme
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
