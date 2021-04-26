import React from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  BackHandler,
  Modal
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import darkSytle from './Styles/DashBoardScreen';
import lightStyle from './Styles/DashBoardLightScreen';
import { Images, Colors } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { SelectedTheme } from './../../actions/userAction';
import {
  DashBoardGraphData,
  DashBoardFlatListData,
  DashBoradModalData
} from '../../config/const';

export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}
export interface state {
  modalVisible: any;
  selectedModalText: any;
}

class DashBoardScreen extends React.PureComponent<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedModalText: 'Portfolio Value'
    };
  }
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  };
  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  };
  toggleModal(visible: any) {
    this.setState({ modalVisible: visible });
  }

  backHandler = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };
  popupModal = () => {
    const { modalVisible } = this.state;
    const { themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkSytle;
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
                data={DashBoradModalData}
                renderItem={({ item, index }) => (
                  <View style={styles.modalTextView}>
                    <TouchableOpacity
                      onPress={() => {
                        this.toggleModal(false);
                        this.setState({ selectedModalText: item.name });
                      }}>
                      <Text style={styles.modalText}>{item.name}</Text>
                    </TouchableOpacity>
                    {DashBoradModalData.length > 0 &&
                    index === DashBoradModalData.length - 1 ? null : (
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
    const styles = themeType === 'light' ? lightStyle : darkSytle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Content>
          <Header
            leftSideIcon={
              themeType === 'light' ? Images.UserBlueImage : Images.UserImage
            }
            leftIconClick={() => {
              navigation.navigate('Profile');
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
            title={'Wallet SH'}
            hideLeadText={themeType === 'light' ? true : false}
          />
          <FlatList
            contentContainerStyle={styles.paddingBottom}
            data={DashBoardFlatListData}
            ListHeaderComponent={
              <>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [Colors.darkGreyBlueSecond, Colors.dusk]
                  }
                  style={styles.graphDetailsView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('PortfolioScreen');
                    }}
                    style={styles.graphDetailsInnerView}>
                    <PieChart
                      style={styles.pieChart}
                      data={DashBoardGraphData}
                      outerRadius={50}
                      innerRadius={48}
                    />
                    <View style={styles.graphDetailsTextView}>
                      <Text style={styles.graphDetailsTitleText}>Total</Text>
                      <Text style={styles.graphDetailsTotalText}>$17.98</Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>

                <TouchableOpacity
                  onPress={() => {
                    this.toggleModal(true);
                  }}
                  style={styles.portfolioView}>
                  <Image
                    source={
                      themeType === 'light'
                        ? Images.PolygonBlue
                        : Images.Polygon
                    }
                  />
                  <Text style={styles.portfolioText}>
                    {this.state.selectedModalText}
                  </Text>
                </TouchableOpacity>
              </>
            }
            renderItem={({ item, index }: any) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  {
                    navigation.navigate('WalletScreen');
                  }
                }}>
                <LinearGradient
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [Colors.darkGreyBlueSecond, Colors.dusk]
                  }
                  style={styles.flatListView}>
                  <ImageBackground
                    source={
                      themeType === 'light'
                        ? Images.WeaveLightIcon
                        : Images.weave
                    }
                    style={styles.flatListBottomWaveImage}
                  />
                  <View style={styles.flatListInnerView}>
                    <Image
                      source={item.images}
                      style={styles.flatListInnerImage}
                    />
                    <View style={styles.itemDetailsView}>
                      <View style={styles.flatListInnerText}>
                        <Text style={styles.flatListInnerShortTitle}>
                          {item.key}
                        </Text>
                        <Text style={styles.flatListInnerRightTitle}>10</Text>
                      </View>
                      <Text style={styles.flatListInnerFullTextTitle}>
                        Bitcoin
                      </Text>
                      <View style={styles.linearGradientLine}></View>
                      <View style={styles.flatListInnerBottomTextView}>
                        <Text style={styles.flatListBottomLeftTitle}>
                          $9111.89
                        </Text>
                        <Text style={styles.flatListBottomRightTitle}>
                          +0.89%
                        </Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            )}
            ListFooterComponent={
              <View style={styles.flatListFooterview}>
                <TouchableOpacity>
                  <Image
                    source={
                      themeType === 'light' ? Images.ImageBlue : Images.Image
                    }
                    style={styles.addImageIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.upArrowImageView}>
                  <Image
                    source={
                      themeType === 'light'
                        ? Images.upArrowBlueImage
                        : Images.upArrowImage
                    }
                    style={styles.scrollImageIcon}
                  />
                </TouchableOpacity>
              </View>
            }
          />
          {this.popupModal()}
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

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardScreen);
