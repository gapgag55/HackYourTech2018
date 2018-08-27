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

class PromptPayTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      amount: '',
      note: '',
    }
    this._confirm = this._confirm.bind(this);
  }

  _confirm() {
    const { addTransaction } = this.props;
    const { phone, amount, note } = this.state;

    addTransaction({
      transaction: {
        sender: {
          id: config.userID,
          amount: amount
        },
        reciver: {
          phone,
        },
        note,
      }
    });

    const { navigate } = this.props.navigation;
    navigate('ConfirmTransfer');
  }

  static navigationOptions = {
    title: 'โอนเงินพร้อมเพย์',
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
              เลือกเบอร์โทรศัพท์
            </Label>
            <LabelDesc>
              สามารถโอนเงินผ่านเบอร์โทรศัพท์
            </LabelDesc>
            <TextInput
              placeholder="ตัวอย่างเช่น: 092-546-9001"
              onChangeText={(phone) => this.setState({phone})}
              keyboardType='numeric'
              value={this.state.phone}
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
              placeholder="ตัวอย่างเช่น: ค่าขนม"
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

export default connect(null, mapDispatchToProps)(PromptPayTransfer);
