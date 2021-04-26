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
import darkStyle from './Styles/SelectCurrency';
import lightStyle from './Styles/SelectCurrencyLight';
import { Images, Colors } from '../../theme';
import { SelectCurrencyData } from '../../config/const';
import LinearGradient from 'react-native-linear-gradient';
import { SelectedTheme } from '../../actions/userAction';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}

class SelectCurrencyScreen extends React.PureComponent<Props> {
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
            rightImageIcon={
              themeType === 'light'
                ? Images.SerachIconblue
                : Images.Serach
            }
            rightIconClick={() => {
              // navigation.navigate('Setting');
            }}
            hideLeadText={themeType === 'light' ? true : false}
            title={'Select Currency'}
          />
          <Text style={styles.availableText}>Available</Text>
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.paddingBottom}
            data={SelectCurrencyData}
            renderItem={({ item, index }: any) => (
              <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.shadowContainer, styles.marginTop]}>
                <LinearGradient
                  start={{ x: 0.0, y: 0.5 }}
                  end={{ x: 0.8, y: 0.0 }}
                  colors={
                    themeType === 'light'
                      ? [Colors.white, Colors.white]
                      : [Colors.darkGreyBlueSecond, Colors.dusk]
                  }
                  style={styles.flatListView}>
                  <View style={styles.flatListInnerView}>
                    <Image
                      source={item.flag}
                      style={styles.flatListInnerImage}
                    />
                    <View style={styles.itemDetailsView}>
                      <Text style={styles.flatListInnerShortTitle}>
                        {item.name}
                      </Text>
                      <View style={styles.subTitleView}>
                        <Text style={styles.subTitle}>{item.currency}</Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
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
)(SelectCurrencyScreen);
