import React from 'react';
import { Text, FlatList, View, Image, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import darkSytle from './Styles/SummaryScreen';
import lightStyle from './Styles/SummaryScreenLight';
import { Colors, Images } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { SummaryFlatListData } from '../../config/const';
import { SelectedTheme } from './../../actions/userAction';
export interface Props {
  navigation: any;
  initApp: any;
  addSelectedTheme: any;
  themeType: any;
}

class SummaryScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  };
  backHandler = () => {
    const { navigation } = this.props;
    return navigation.goBack();
  };
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  };
  render() {
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkSytle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Content>
          <Header
            title={'Summary'}
            leftImageIcon={
              themeType === 'light' ? Images.BackBlueArrow : Images.BackArrow
            }
            leftIconClick={() => {
              navigation.goBack(null);
            }}
            onBackPress={() => navigation.goBack()}
            hideLeadText={themeType === 'light' ? true : false}
          />

          <LinearGradient
            colors={
              themeType === 'light'
                ? [Colors.white, Colors.white]
                : [Colors.darkGreyBlueThired, Colors.duskSecond]
            }
            style={styles.flatList}>
            <View style={styles.view}>
              <FlatList
                style={styles.flat}
                contentContainerStyle={styles.paddingBottom}
                data={SummaryFlatListData}
                renderItem={({ item, index }: any) => (
                  <>
                    <View style={styles.flatListInnerView}>
                      <Image
                        source={item.image}
                        style={styles.flatListInnerImage}
                      />
                      <View style={styles.itemDetailsView}>
                        <Text style={styles.flatListInnerShortTitle}>
                          {item.name}
                        </Text>
                        <View style={styles.subTitleView}>
                          <Text style={styles.subTitle}>{item.percentage}</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.separatorLine} />
                  </>
                )}
              />
            </View>
          </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen);
