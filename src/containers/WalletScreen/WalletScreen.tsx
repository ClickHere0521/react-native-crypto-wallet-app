import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header, Footer } from '../../components';
import darkSytle from './Styles/WalletScreen';
import lightStyle from './Styles/WalletLightScreen';
import { Images, Colors } from '../../theme';
import { Data } from '../../config/const';
import {
  BitCoinGraphData,
  xdata
} from '../../config/const';
import LinearGradient from 'react-native-linear-gradient';
import { XAxis, AreaChart, Grid, Path } from 'react-native-svg-charts';
import {
  Defs,
  LinearGradient as LinearGradientSvg,
  Stop,
  Circle,
  G,
  Line as LineHorizantol
} from 'react-native-svg';
import * as shape from 'd3-shape';
import { SelectedTheme } from '../../actions/userAction';

export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}
class WalletScreen extends React.PureComponent<Props> {
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
    const Line = ({ line }: any) => (
      <Path
        key={'line'}
        stroke={Colors.orange}
        d={line}
        strokeWidth={2}
        fill={'none'}
        clipPath={'url(#clip-path)'}
      />
    );
    const Gradient = ({ index }) => (
      <Defs key={index}>
        <LinearGradientSvg
          id={'gradient'}
          x1={'10%'}
          y1={'10%'}
          x2={'10%'}
          y2={'80%'}>
          <Stop
            offset={'0%'}
            stopColor={
              themeType === 'light' ? 'rgb(253, 243, 225)' : 'rgb(95, 94, 108)'
            }
            stopOpacity={1}
          />
          <Stop
            offset={'100%'}
            stopColor={
              themeType === 'light' ? 'rgb(255, 252, 247)' : 'rgb(71, 80, 109)'
            }
            stopOpacity={1}
          />
        </LinearGradientSvg>
      </Defs>
    );

    const Tooltip = ({ x, y }: any) => (
      <G x={x(5) - 75 / 2} key={'tooltip'}>
        <G x={75 / 2}>
          <LineHorizantol
            y1={50 + 40}
            y2={y(BitCoinGraphData[5])}
            stroke={themeType === 'light' ? Colors.bluedarkColor : 'white'}
            strokeWidth={1}
          />
          <Circle
            cy={y(BitCoinGraphData[5])}
            r={6}
            stroke={themeType === 'light' ? Colors.bluedarkColor : Colors.white}
            strokeWidth={2}
          />
        </G>
      </G>
    );
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
            rightIconClick={async () => {
              navigation.navigate('Setting');
            }}
            title={'Bitcoin'}
            hideLeadText={themeType === 'light' ? true : false}
          />
          <View style={[styles.shadowContainer, styles.marginTop]}>
            <LinearGradient
              colors={
                themeType === 'light'
                  ? [Colors.white, Colors.white]
                  : [Colors.darkGreyBlueThired, Colors.duskSecond]
              }
              style={styles.flatList}>
              <View style={styles.bitcoinView}>
                <View style={styles.bitcoinLeftView}>
                  <Image
                    source={Images.BitCoinImage}
                    style={styles.bitcoinImage}
                  />
                  <Text style={styles.leftDollerPrice}>$5,341.68</Text>

                  <Text style={styles.leftBTCPrice}>
                    BTC price{' '}
                    <Text style={styles.leftBTCPercentage}>+1.61%</Text>
                  </Text>
                </View>
                <View style={styles.bitcoinRightView}>
                  <Text style={styles.rightSideText}>20</Text>
                  <Text style={styles.rightSideBalanceText}>Balance</Text>
                  <View style={styles.separatorLineRight}></View>
                  <Text style={styles.rightDollerPrice}>$5,341.68</Text>
                  <Text style={styles.rightSideValueText}>Value</Text>
                </View>
              </View>
              <View style={styles.separatorLine}></View>
              <View style={styles.linemarginTop}>
                <View style={styles.xAxisTop}>
                  <Text style={styles.xAxisAmt}>$5,341.68</Text>
                  <View style={styles.xAxisTopHr} />
                </View>
                <AreaChart
                  style={styles.areaChart}
                  data={BitCoinGraphData}
                  numberOfTicks={0}
                  curve={shape.curveNatural}
                  svg={{ fill: 'url(#gradient)' }}>
                  <Grid />
                  <Line />
                  <Tooltip />
                  <Gradient />
                </AreaChart>
                <View style={styles.xAxisBottom}>
                  <Text style={styles.xAxisAmt}>$4,341.68</Text>
                  <View style={styles.xAxisBottomHr} />
                </View>
                <XAxis
                  data={xdata}
                  formatLabel={(value) => xdata[value]}
                  contentInset={{ left: 20, right: 10 }}
                  svg={{
                    ...styles.xAxisSvg,
                    fill: themeType === 'light' ? Colors.bluedarkColor : 'white'
                  }}
                />
              </View>
            </LinearGradient>
          </View>

          <View>
            <View style={styles.activityView}>
              <Text style={styles.activityText}>ACTIVITY</Text>
              <View style={styles.separatorWhiteLine}></View>
            </View>

            <FlatList
              data={Data}
              contentContainerStyle={styles.paddingBottomSecond}
              renderItem={({ item, index }: any) => (
                <View
                  style={[styles.shadowContainer, styles.securityMarginTop]}>
                  <Text style={styles.flatListInnerDate}>{item.date}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('TransactionDetails');
                    }}
                    activeOpacity={0.9}>
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
                      <View style={styles.flatListInnerView}>
                        <Image
                          source={
                            themeType === 'light' ? item.blueImage : item.image
                          }
                          style={styles.flatListInnerImage}
                        />
                        <View style={styles.itemDetailsView}>
                          <View style={styles.flatListInnerText}>
                            <Text style={styles.flatListInnerActionTitle}>
                              {item.action}
                            </Text>
                            <Text style={styles.flatListInnerRightTitle}>
                              {item.point}
                            </Text>
                          </View>
                          <View style={styles.flatListInnerText}>
                            <Text style={styles.flatListInnerFullTextTitle}>
                              {item.time}
                            </Text>
                            <Text style={styles.flatListInnerRightDollerTitle}>
                              {item.doller}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </Content>
        <Footer style={styles.footer}>
          <View style={styles.bottomButtonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SendAmount')}
              style={styles.bottomButtonInnerView}>
              <LinearGradient
                start={{ x: 0.3, y: 1.3 }}
                end={{ x: 0.8, y: 0.0 }}
                colors={[Colors.niceBlue, Colors.blueWithPurple]}
                locations={[0.1, 0.7, 1]}
                style={styles.buttonStyle}>
                <View style={styles.circleShapeView}>
                  <Image
                    source={Images.SendRight}
                    style={styles.circleInnerImage}
                  />
                </View>
                <Text style={styles.sendText}>SEND</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.middleLine} />
            <TouchableOpacity
              onPress={() => navigation.navigate('RecivedAmount')}
              style={styles.bottomButtonInnerView}>
              <LinearGradient
                start={{ x: 0.3, y: 1.3 }}
                end={{ x: 0.5, y: 0.25 }}
                locations={[0.3, 0.7, 1]}
                colors={[Colors.blueWithPurple, Colors.niceBlue]}
                style={styles.buttonStyle}>
                <View style={styles.circleShapeView}>
                  <Image
                    source={Images.RecieveLeft}
                    style={styles.qrCodeImage}
                  />
                </View>
                <Text style={styles.sendText}>RECEIVE</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Footer>
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
      addSelectedTheme: SelectedTheme
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletScreen);
