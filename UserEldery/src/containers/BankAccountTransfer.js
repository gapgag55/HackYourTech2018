import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../config';
import {
  StatusBar,
  ScrollView
} from 'react-native';
import {
  TextInput,
  Background,
  LabelBlock,
  Label,
  LabelDesc,
  Button,
  ButtonText,
  Wrapper
} from '../utility';
import { addData } from '../actions';

class BacnkAccountTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountID: '',
      amount: '',
      note: '',
    }

    this._confirm = this._confirm.bind(this);
  }

  _confirm() {
    const { addTransaction } = this.props;
    const { accountID, amount, note } = this.state;

    addTransaction({
      transaction: {
        sender: {
          id: config.userID,
          amount,
        },
        reciver: {
          account: {
            id: accountID,
            bank: "KBANK",
            name: "Bhumibol Adulyadej"
          }
        },
        note,
      }
    });

    const { navigate } = this.props.navigation;
    navigate('ConfirmTransfer');
  }

  static navigationOptions = {
    title: 'โอนเงินผ่านบัญชี',
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
    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <LabelBlock>
            <Label>
              เลขบัญชี
            </Label>
            <LabelDesc>
              ระบุเลขบัตรบัญชีเพื่อโอน
            </LabelDesc>
            <TextInput
              placeholder="ตัวอย่างเช่น: 222-222-2222"
              onChangeText={(accountID) => this.setState({accountID})}
              keyboardType='numeric'
              value={this.state.accountID}
            />
          </LabelBlock>
          <LabelBlock>
            <Label>
              ยอดโอน
            </Label>
            <LabelDesc>
              ระบุจำนวนเงินที่ต้องการโอน
            </LabelDesc>
            <TextInput
              placeholder="ตัวอย่างเช่น: 500"
              onChangeText={(amount) => this.setState({amount})}
              keyboardType='numeric'
              value={this.state.amount}
            />
          </LabelBlock>
          <LabelBlock>
            <Label>
              บันทึกช่วยจำ
            </Label>
            <TextInput
              placeholder="ตัวอย่างเช่น: ค่าบ้าน"
              onChangeText={(note) => this.setState({note})}
              keyboardType='numeric'
              value={this.state.note}
            />
          </LabelBlock>
          <Wrapper>
            <Button
              onPress={this._confirm}
            >
              <ButtonText>
                เรียบร้อย
              </ButtonText>
            </Button>
          </Wrapper>
        </ScrollView>
      </Background>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  addTransaction: (data) => dispatch(addData(data))
})

export default connect(null, mapDispatchToProps)(BacnkAccountTransfer);