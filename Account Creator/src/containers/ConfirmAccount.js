import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import {
  Background,
  Wrapper,
  TextDesc,
  Label,
  BoxRow,
  Button,
  Text,
  TextLeft
} from '../utility';

class OpenAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      fullName: '',
      balance: '',
    }

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton() {
    const { navigate } = this.props.navigation;

    // Confirm Finger

    // Navigate to Signature
    navigate('PinCode')
  }

  static navigationOptions = {
    title: 'สร้างรหัสยันยัน',
    headerStyle: {
      backgroundColor: '#00A950',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Kanit-Regular',
      fontSize: 20,
    },
  };

  render() {
    const { id, fullname, phonenumber, balance } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <Logo />
        <TextDesc>เปิดบัญชีใหม่</TextDesc>
        <ScrollView>
          <Wrapper>
            <BoxRow>
              <Label>
                เลขบัตรประชาชน
              </Label>
              <TextLeft>{id}</TextLeft>
            </BoxRow>
            <BoxRow>
              <Label>
                ชื่อ-นามสกุล
              </Label>
              <TextLeft>{fullname}</TextLeft>
            </BoxRow>
            <BoxRow>
              <Label>
                เบอร์โทรศัพท์
              </Label>
              <TextLeft>{phonenumber}</TextLeft>
            </BoxRow>
            <BoxRow>
              <Label>
                จำนวนยอดเงิน
              </Label>
              <TextLeft>{balance} บาท</TextLeft>
            </BoxRow>
          </Wrapper>
          <Button
            onPress={this._onPressButton}
          >
            <Text>ข้อมูลถูกต้อง</Text>
          </Button>
        </ScrollView>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  id: state.user.citizenid,
  fullname: state.user.name,
  phonenumber: state.user.phone,
  balance: state.account.balance,
});

export default connect(mapStateToProps)(OpenAccount);
