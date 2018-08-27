import React from 'react';
import { StatusBar, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Logo from '../components/Logo';
import {
  Background,
  Wrapper,
  TextDesc,
  Label,
  TextInput,
  Button,
  Text
} from '../utility';
import { addData } from '../actions';

class OpenAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      fullName: '',
      phonenumber: '',
      balance: '',
    }

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton() {
    const { addInfo } = this.props;
    const{ id, fullName, phonenumber, balance } = this.state;

    addInfo({
      user: {
        name: fullName,
        citizenid: id,
        phone: phonenumber
      },
      account: {
        balance: balance
      }
    });

    const { navigate } = this.props.navigation;
    navigate('ConfirmAccount')
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <Logo />
        <TextDesc>เปิดบัญชีใหม่</TextDesc>
        <ScrollView>
          <Wrapper>
            <View>
              <Label>
                เลขบัตรประชาชน
              </Label>
              <TextInput
                onChangeText={(id) => this.setState({id})}
                keyboardType='numeric'
                value={this.state.id}
              />
            </View>
            <View>
              <Label>
                ชื่อ-นามสกุล
              </Label>
              <TextInput
                onChangeText={(fullName) => this.setState({fullName})}
                value={this.state.fullName}
              />
            </View>
            <View>
              <Label>
                เบอร์โทรศัพท์
              </Label>
              <TextInput
                onChangeText={(phonenumber) => this.setState({phonenumber})}
                keyboardType='numeric'
                value={this.state.phonenumber}
              />
            </View>
            <View>
              <Label>
                จำนวนยอดเงิน
              </Label>
              <TextInput
                onChangeText={(balance) => this.setState({balance})}
                keyboardType='numeric'
                value={this.state.balance}
              />
            </View>
          </Wrapper>
          <Button
            onPress={this._onPressButton}
          >
            <Text>ยืนยันข้อมูล</Text>
          </Button>
        </ScrollView>
      </Background>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addInfo: (data) => dispatch(addData(data)),
})

export default connect(null, mapDispatchToProps)(OpenAccount);
