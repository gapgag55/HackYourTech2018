import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {
  Background,
  TextArea,
  TextLabelLeft,
  TextInput,
  Button,
  ButtonText,
  TextLabelDesc,
  BoxRow
} from '../utility';
import { addData } from '../actions';

class SellProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      note: '',
    }

    this._confirm = this._confirm.bind(this);
  }

  _confirm() {
    const { addInfo } = this.props;
    const { amount, note } = this.state;

    addInfo({
      transaction: {
        sender: { amount },
        note,
      }
    })

    const { navigate } = this.props.navigation;
    navigate('Confirmation');
  }

  static navigationOptions = {
    title: 'ขายสินค้า',
    headerStyle: {
      backgroundColor: '#00A950',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Kanit-Medium',
      fontSize: 25,
    },
  };

  render() {
    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <BoxRow>
          <TextLabelLeft>
            จำนวนเงิน
          </TextLabelLeft>
          <TextLabelDesc>
            ระบุจำนวนเงินของผู้ซื้อ
          </TextLabelDesc>
          <TextInput
            onChangeText={(amount) => this.setState({amount})}
            keyboardType='numeric'
            value={this.state.amount}
          />
        </BoxRow>
        <BoxRow>
          <TextLabelLeft>
            บันทึกถึงผู้ซื้อ
          </TextLabelLeft>
          <TextArea
            onChangeText={(note) => this.setState({note})}
            keyboardType='numeric'
            value={this.state.note}
          />
        </BoxRow>
        <Button
          onPress={this._confirm}
        >
          <ButtonText>
            ยืนยัน
          </ButtonText>
        </Button>
      </Background>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addInfo: (data) => dispatch(addData(data))
});

export default connect(null, mapDispatchToProps)(SellProduct);
