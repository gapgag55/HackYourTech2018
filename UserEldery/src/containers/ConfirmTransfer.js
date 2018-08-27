import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StatusBar,
  ScrollView
} from 'react-native';
import {
  Text,
  Background,
  LabelBlock,
  Label,
  Button,
  ButtonText,
  Wrapper
} from '../utility';
import  { transferToPromptpay, transferToBank } from '../actions';

class ConfirmTransfer extends Component {
  constructor(props) {
    super(props);
    this._confirm = this._confirm.bind(this);
  }

  static navigationOptions = {
    title: 'ยืนยันการโอนเงิน',
    headerStyle: {
      backgroundColor: '#00A950',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Kanit-Regular',
      fontSize: 20,
    },
  };

  _confirm() {
    const { sendToPrompay, sendToAccount, transaction } = this.props;
    if (transaction.reciver.phone) {
      sendToPrompay(transaction);
    } else {
      sendToAccount(transaction);
    }

    const { navigate } = this.props.navigation;
    navigate('ReceiptTransfer');
  }

  render() {
    const { transaction } = this.props;

    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <LabelBlock>
            <Label>
              {transaction.reciver.phone ? 'เบอร์โทรศัพท์' : 'เลขบัญชี'}
            </Label>
            <Text>
              {transaction.reciver.phone ? transaction.reciver.phone : transaction.reciver.account.id}
            </Text>
          </LabelBlock>
          <LabelBlock>
            <Label>
              ยอดโอน
            </Label>
            <Text>{transaction.sender.amount}</Text>
          </LabelBlock>
          <LabelBlock>
            <Label>
              บันทึกช่วยจำ
            </Label>
            <Text>{transaction.note}</Text>
          </LabelBlock>
          <Wrapper>
            <Button
              onPress={this._confirm}
            >
              <ButtonText>
                ยืนยันการโอน
              </ButtonText>
            </Button>
          </Wrapper>
        </ScrollView>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  transaction: state.transaction,
});

const mapDispatchToProps = dispatch => ({
  sendToPrompay: (data) => dispatch(transferToPromptpay(data)),
  sendToAccount: (data) => dispatch(transferToBank(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmTransfer);