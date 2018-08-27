import React, { Component } from 'react';
import {
  Modal,
  Image,
} from 'react-native';
import {
  DialogWrapper,
  Dialog,
  DiaglogTitle,
  DialogItem
} from '../utility';

class ChooseTransferMethod extends Component {

  constructor(props) {
    super(props);

    this._promptpay  = this._promptpay.bind(this);
    this.bankAccount = this.bankAccount.bind(this);
  }

  _promptpay() {
    const { navigate } = this.props.navigation;
    navigate('PromptPayTransfer');
  }

  bankAccount() {
    const { navigate } = this.props.navigation;
    navigate('BankAccountTransfer');
  }

  render() {
    const { closeModal, openModal } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
      >
        <DialogWrapper
          onPress={closeModal}
        >
          <Dialog>
            <DiaglogTitle>เลือกช่องทางการโอนเงิน</DiaglogTitle>
            <DialogItem
              onPress={this._promptpay}
            >
              <Image source={require('../../assets/images/promtpay.png')} />
            </DialogItem>
            <DialogItem
              onPress={this.bankAccount}
            >
              <Image source={require('../../assets/images/account.png')} />
            </DialogItem>
          </Dialog>
        </DialogWrapper>
      </Modal>
    );
  }
}

export default ChooseTransferMethod;