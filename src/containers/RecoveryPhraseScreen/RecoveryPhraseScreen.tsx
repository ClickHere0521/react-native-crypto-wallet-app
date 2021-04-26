import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import darkStyle from './Styles/RecoveryPhraseScreen';
import lightStyle from './Styles/RecoveryPhraseLightScreen';
import { Colors, Images } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { SelectedTheme } from '../../actions/userAction';
import {
  RecoveryFlatListPhrase,
  RecoveryFlatListBlankPhrase
} from '../../config/const';
export interface Props {
  navigation: any;
  addSelectedTheme: any;
  themeType: any;
}
export interface state {
  onPressStatus: any;
}

class RecoveryPhraseScreen extends React.PureComponent<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      onPressStatus: false
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
  onLongPress = () => {
    this.setState({ onPressStatus: !this.state.onPressStatus });
  };

  render() {
    const { navigation, themeType } = this.props;
    const styles = themeType === 'light' ? lightStyle : darkStyle;
    return (
      <Container safeAreaView={true} selectedThemeType={themeType}>
        <Content>
          <Header
            title={'Recovery Phrase'}
            leftImageIcon={
              themeType === 'light' ? Images.BackBlueArrow : Images.BackArrow
            }
            leftIconClick={() => {
              navigation.goBack(null);
            }}
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
              <FlatList
                contentContainerStyle={styles.paddingBottom}
                data={
                  this.state.onPressStatus === true
                    ? RecoveryFlatListPhrase
                    : RecoveryFlatListBlankPhrase
                }
                ListHeaderComponent={
                  <View style={styles.flatListHeaderView}>
                    <View
                      style={[styles.shadowContainer, styles.textMarginTop]}>
                      <Text style={styles.flatListHeaderText}>
                        Write down your 12 words recovery phrase in correct
                        order
                      </Text>
                    </View>
                  </View>
                }
                renderItem={({ item, index }: any) => (
                  <View>
                    <View style={[styles.textView]}>
                      <Text style={styles.labelTxt}>{index + 1}</Text>
                      <Text style={styles.valueTxt}>{item.title}</Text>
                    </View>
                  </View>
                )}
              />
            </LinearGradient>
          </View>
          <TouchableOpacity
            onPressIn={() => this.setState({ onPressStatus: true })}
            onPressOut={() => this.setState({ onPressStatus: false })}>
            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.8, y: 0.0 }}
              colors={[Colors.niceBlue, Colors.blueWithPurple]}
              style={[
                styles.holdButtonView,
                styles.shadowContainer,
                styles.buttonButtonMarginTop
              ]}>
              <Text style={styles.holdButtonText}>
                Press and Hold to Reveal
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.noteImageAddingViewText}>
            <Text style={styles.noteImageAddingText}>
              Lorem Ipsum is simply dummy text of text of the printing lorem
              ipsum is good suprem and typesetting industry.
            </Text>
          </View>
          {/* <View style={styles.bottomView}>
            <View style={styles.noteImageAddingViewText}>
              <Text style={styles.noteImageAddingText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                illum corrupti sunt reiciendis recusandae tempore sit quis rem
              </Text>
            </View>
            <TouchableOpacity onLongPress={this.onLongPress}>
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.8, y: 0.0 }}
                colors={[Colors.niceBlue, Colors.blueWithPurple]}
                style={[
                  styles.holdButtonView,
                  styles.shadowContainer,
                  styles.buttonButtonMarginTop
                ]}>
                <Text style={styles.holdButtonText}>
                  Press and Hold to Reveal
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View> */}
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
)(RecoveryPhraseScreen);
