import React from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import darkSytle from './Styles/TransactionDetails';
import lightStyle from './Styles/TransactionDetailsLight';
import { Images, Colors } from '../../theme';
import { TransactionFlatListData } from '../../config/const';
import LinearGradient from 'react-native-linear-gradient';
import { SelectedTheme } from './../../actions/userAction';
export interface state {
  switchThemeButton: any;
}
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class TransactionDetailsScreen extends React.PureComponent<Props, state> {
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
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkSytle;

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
                ? Images.ShareLightIcon
                : Images.UploadwhiteIcon
            }
            rightIconClick={() => {
              //  navigation.goBack();
            }}
            title={'Transaction Details'}
            hideLeadText={themeType === 'light' ? true : false}
          />
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.paddingBottom}
            data={TransactionFlatListData}
            renderItem={({ item, index }: any) => (
              <View style={[styles.shadowContainer, styles.marginTop]}>
                <LinearGradient
                  start={{ x: 0.0, y: 0.5 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [Colors.darkGreyBlue, Colors.dusk]
                  }
                  style={styles.flatListView}>
                  <View style={styles.flatListInnerView}>
                    {item.image === true && (
                      <Image
                        source={
                          themeType === 'light'
                            ? Images.SupportBlueIcon
                            : Images.HoursSupport
                        }
                        style={styles.flatListInnerImage}
                      />
                    )}
                    <View style={[styles.itemDetailsView]}>
                      <Text style={styles.flatListInnerShortTitle}>
                        {item.title}
                      </Text>

                      <TouchableOpacity
                        disabled={item.touchable === true ? false : true}
                        onPress={() => {
                          navigation.navigate('ContactUs');
                        }}>
                        <Text
                          style={[
                            styles.subTitle,
                            themeType === 'light'
                              ? { color: item.subtitleLightTextColor }
                              : { color: item.subtitleTextColor }
                          ]}>
                          {item.subtitle}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
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
  return { themeType: user.themeType };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ addSelectedTheme: SelectedTheme }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionDetailsScreen);
