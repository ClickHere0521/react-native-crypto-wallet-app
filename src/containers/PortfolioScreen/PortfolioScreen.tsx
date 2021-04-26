import React from 'react';
import { Text, View, Image, FlatList, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import darkSytle from './Styles/PortfolioScreen';
import lightStyle from './Styles/PortfolioLightScreen';
import { Images, Colors } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { DashBoardGraphData } from '../../config/const';
import { PortfolioFlatListData } from '../../config/const';
import {
  BitCoinGraphData,
  xdata
} from '../../config/const';
import { SelectedTheme } from './../../actions/userAction';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  XAxis,
  AreaChart,
  Grid,
  PieChart,
  Path
} from 'react-native-svg-charts';
import {
  Defs,
  LinearGradient as LinearGradientSvg,
  Stop
} from 'react-native-svg';
import * as shape from 'd3-shape';

export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}
class PortfolioScreen extends React.PureComponent<Props> {
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
            title={'Portfolio'}
            hideLeadText={themeType === 'light' ? true : false}
          />
          <View style={[styles.shadowContainer, styles.marginTop]}>
            <LinearGradient
              colors={
                themeType === 'light'
                  ? [Colors.white, Colors.white]
                  : [Colors.darkGreyBlueThired, Colors.duskSecond]
              }
              style={[styles.portfolioView, styles.paddingBottomSecond]}>
              <View style={styles.graphView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SummaryScreen');
                  }}>
                  <PieChart
                    style={styles.pieChart}
                    data={DashBoardGraphData}
                    outerRadius={50}
                    innerRadius={48}
                  />
                  <Text style={styles.summaryText}>Summary</Text>
                </TouchableOpacity>
                <View style={styles.separatorLineRight} />
                <FlatList
                  contentContainerStyle={styles.paddingBottom}
                  data={PortfolioFlatListData}
                  renderItem={({ item, index }: any) => (
                    <>
                      <View style={styles.flatListInnerView}>
                        <Image source={item.image} style={styles.imgIcon} />
                        <View style={styles.itemDetailsView}>
                          <Text style={styles.flatListInnerShortTitle}>
                            {item.name}
                          </Text>
                          <View style={styles.subTitleView}>
                            <Text style={styles.subTitle}>
                              {item.percentage}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </>
                  )}
                />
              </View>
              <View style={styles.separatorLine} />
              <View style={styles.ViewMarginTop}>
                <Text style={styles.totalBalanceValue}>$17.87</Text>
                <Text style={styles.totalBalance}>Total Balance</Text>
              </View>

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
              <View style={styles.separatorBottomLine} />
              <View style={styles.BottomView}>
                <View style={styles.changeView}>
                  <Text style={styles.changeTextValue}>+$0.16</Text>
                  <Text style={styles.changeText}>Change</Text>
                </View>
                <View style={styles.separatorBottomView} />
                <View style={styles.changeView}>
                  <Text style={styles.PortfolioAgeValue}>1 year</Text>
                  <Text style={styles.PortfolioAge}>Portfolio Age</Text>
                </View>
              </View>
              <View style={[styles.separatorLine, styles.separatormarginTop]} />
            </LinearGradient>
          </View>
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
      addSelectedTheme: SelectedTheme
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioScreen);
