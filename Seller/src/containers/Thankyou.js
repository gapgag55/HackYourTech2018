import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import config from '../config';
import {
  Wrapper,
  TextLabelLeft,
  TextMoneyLeft,
  Background,
  ThankyouText,
  Button,
  ButtonText,
} from '../utility';
import { sendTransaction } from '../actions'

class Thankyou extends Component {
  constructor(props) {
    super(props);
    this._toHome = this._toHome.bind(this);
  }

  _toHome() {
    const { navigate } = this.props.navigation;
    navigate('Dashboard');
  }

  componentDidMount() {
    const { sendTransaction, transaction, user } = this.props;
    const data = {
      sender: {
        id: config.buyer.id,
        amount: Number(transaction.sender.amount)
      },
      reciver: {
        account: {
          id: config.user.accountID,
          bank: 'KBANK',
          name: 'ศรวรรณ ศิริสุนทร'
        }
      },
      note: transaction.note
    };
    console.log(data);
    sendTransaction(data);
  }

  static navigationOptions = {
    title: 'ซื้อขายเสร็จสิ้น',
    headerStyle: {
      backgroundColor: '#00A950',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Kanit-Medium',
      fontWeight: '400',
      fontSize: 25,
    },
  };

  render() {
    const { transaction } = this.props;

    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <Wrapper>
          <ThankyouText>
            ชำระเรียบร้อย
          </ThankyouText>
          <View style={{ marginBottom: 20 }}>
            <TextLabelLeft>
              จำนวนเงิน
            </TextLabelLeft>
            <TextMoneyLeft>
              { transaction.sender.amount }
            </TextMoneyLeft>
          </View>
          <View>
            <TextLabelLeft>
              บันทึก
            </TextLabelLeft>
            <TextMoneyLeft>
              { transaction.note }
            </TextMoneyLeft>
          </View>
        </Wrapper>
        <Button
          onPress={this._toHome}
        >
          <ButtonText>
            กลับไปหน้าแรก
          </ButtonText>
        </Button>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  transaction: state.transaction,
})

const mapDispatchToProps = dispatch => ({
  sendTransaction: (data) => dispatch(sendTransaction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Thankyou);