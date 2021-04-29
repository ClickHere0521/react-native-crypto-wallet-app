import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  BackHandler,
  Modal,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  Content,
  Header,
  Switch
} from '../../components';
import { Images, Colors } from '../../theme';
import darkStyle from './Styles/ProfileScreen';
import lightStyle from './Styles/ProfileScreenLight';
import LinearGradient from 'react-native-linear-gradient';
import { SelectedTheme } from './../../actions/userAction';
import {
  FlatListProfileData,
  ProfileModalData,
  ProfileFlatListData
} from '../../config/const';
import auth from '@react-native-firebase/auth';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}
export interface state {
  switchOn2: any;
  searchText: any;
  switchOnFirstButton: any;
  switchOnSecondButton: any;
  switchOnThiredButton: any;
  modalVisible: any;
  selectedModalText: any;
}

class ProfileScreen extends React.PureComponent<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      switchOn2: true,
      searchText: '',
      switchOnFirstButton: false,
      switchOnSecondButton: false,
      switchOnThiredButton: false,
      modalVisible: false,
      selectedModalText: 'Enable/Disable Assets'
    };
  }
  onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
  };
  componentDidMount = async () => {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  };
  backHandler = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };
  toggleModal(visible: any) {
    this.setState({ modalVisible: visible });
  }
  switchOnFirstPress = () => {
    this.setState({ switchOnFirstButton: !this.state.switchOnFirstButton });
  };
  switchOnSecondPress = () => {
    this.setState({ switchOnSecondButton: !this.state.switchOnSecondButton });
  };
  switchOnThiredPress = () => {
    this.setState({ switchOnThiredButton: !this.state.switchOnThiredButton });
  };
  popupModal = () => {
    const { modalVisible } = this.state;
    const { themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.toggleModal(false);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.toggleModal(false);
          }}
          style={styles.popupModal}>
          <TouchableOpacity activeOpacity={1} style={styles.popupView}>
            <View style={styles.flatListModalView}>
              <FlatList
                bounces={false}
                showsVerticalScrollIndicator={false}
                data={ProfileModalData}
                renderItem={({ item, index }) => (
                  <View style={styles.modalTextView}>
                    <TouchableOpacity
                      onPress={() => {
                        this.toggleModal(false);
                        this.setState({ selectedModalText: item.name });
                      }}>
                      <Text style={styles.modalText}>{item.name}</Text>
                    </TouchableOpacity>
                    {ProfileModalData.length > 0 &&
                      index === ProfileModalData.length - 1 ? null : (
                      <View style={styles.modalSeparator} />
                    )}
                  </View>
                )}
              />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  };

  render() {
    const { navigation, themeType } = this.props;
    const { searchText, selectedModalText } = this.state;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Content>
          <Header
            leftImageIcon={
              themeType === 'light' ? Images.walletBlue : Images.wallet
            }
            leftIconClick={() => {
              navigation.navigate('DashBoard');
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
            title={'Profile'}
            hideLeadText={themeType === 'light' ? true : false}
          />

          <View style={styles.container}>
            <View style={styles.circleShapeView}>
              <View style={styles.shadowLogoContainer}>
                <Image source={Images.QrCode} style={styles.qrCodeImage} />
              </View>
            </View>
            <View style={styles.QrCodeTextView}>
              <TouchableOpacity
                style={{ marginBottom: 30 }}
                onPress={() => {
                  auth()
                    .signOut()
                    .then(() => {
                      Alert.alert(
                        "Success",
                        "You have signed out",
                        [
                          { text: "OK", onPress: () => { navigation.navigate("SwiperScreen") } }
                        ]
                      )
                    });                  
                }}>
                <View style={styles.flatListInnerTextView}>
                  <Text style={styles.flatListInnerTitleText}>
                    SignOut
                    </Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.QrCodeVersionNameText}>Wallet SH 1.1.04</Text>
              <Text style={styles.QrCodeSubText}>
                Lorem, ipsum dolor sit amet
              </Text>
            </View>
          </View>
          <FlatList
            data={FlatListProfileData}
            contentContainerStyle={styles.paddingBottomSecond}
            renderItem={({ item, index }: any) => (
              <View style={[styles.shadowContainer, styles.securityMarginTop]}>
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
                  style={styles.securityFlatListView}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      {
                        index === 1 && navigation.navigate('ContactUs');
                      }
                      {
                        index === 0 && navigation.navigate('Security');
                      }
                    }}>
                    <View style={styles.flatListInnerTextView}>
                      <Text style={styles.flatListInnerTitleText}>
                        {item.title}
                      </Text>
                      <Image
                        source={
                          themeType === 'light' ? item.blueImage : item.image
                        }
                        style={styles.securityInnerImage}
                      />
                    </View>
                    <View style={styles.separatorLine} />
                    <View style={styles.securitySubTitleView}>
                      <Text style={styles.flatListInnersubTitleText}>
                        {item.subTitle}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            )}
          />

          <View style={styles.shadowContainer}>
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
              style={[styles.enableAssetView]}>
              <View style={styles.enableView}>
                <Text style={styles.enableText}>{selectedModalText}</Text>
                <Text style={styles.enableNumberText}>(5/59)</Text>
                <TouchableOpacity
                  onPress={() => this.toggleModal(true)}
                  style={styles.enableMenuIcon}>
                  <Image
                    source={
                      themeType === 'light' ? Images.MenuLightIcon : Images.menu
                    }
                    style={styles.enableMenuIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.enablesubText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                vitae commodi voluptates repellendus reiciendis, magni amet
              </Text>
            </LinearGradient>
          </View>

          <View style={styles.searchView}>
            <TextInput
              style={styles.searchTxtInput}
              placeholder={'Search'}
              onChangeText={(searchText: any) => this.setState({ searchText })}
              value={this.state.searchText}
              placeholderTextColor={
                themeType === 'light' ? Colors.bluedarkColor : Colors.white
              }
            />

            {searchText.length > 0 ? (
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    searchText: ''
                  })
                }
                style={styles.serachButtonView}>
                <Image
                  source={
                    themeType === 'light'
                      ? Images.CancelButtonLight
                      : Images.CrossIcon
                  }
                  style={styles.cancelIcon}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.serachButtonView}>
                <Image
                  source={
                    themeType === 'light'
                      ? Images.SearchBlueImage
                      : Images.SerachProfile
                  }
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            )}
          </View>

          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.paddingBottom}
            data={ProfileFlatListData}
            renderItem={({ item, index }: any) => (
              <View style={[styles.shadowContainer, styles.marginTop]}>
                <LinearGradient
                  start={{ x: 0.0, y: 0.0 }}
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
                    <Image
                      source={item.image}
                      style={styles.flatListInnerImage}
                    />

                    <View style={styles.itemDetailsView}>
                      <Text style={styles.flatListInnerShortTitle}>
                        {item.subtitle}
                      </Text>
                      <View style={styles.switchToggleView}>
                        {index === 0 && (
                          <View style={styles.toggleView}>
                            <Switch
                              switchOn={this.state.switchOnFirstButton}
                              onPress={this.switchOnFirstPress}
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
                        {index === 2 && (
                          <View style={styles.toggleView}>
                            <Switch
                              switchOn={this.state.switchOnThiredButton}
                              onPress={this.switchOnThiredPress}
                            />
                          </View>
                        )}
                      </View>

                      <Text style={styles.flatListInnerFullTextTitle}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            )}
          />
          {this.popupModal()}
        </Content>
      </Container >
    );
  }
}

function mapStateToProps({ user }: any) {
  return { themeType: user.themeType };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ addSelectedTheme: SelectedTheme }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
