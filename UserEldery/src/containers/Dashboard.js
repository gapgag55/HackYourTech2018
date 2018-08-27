import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StatusBar,
} from 'react-native';
import Transactions from './Transactions';
import ChooseTransferMethod from '../components/ChooseTransferMethod';
import {
  Background,
  AccountTitle,
  Card,
  CardDesc,
  Wrapper,
  CardMoney,
  CardButton,
  CardButtonText,
  TextName,
} from '../utility';
import { getUser } from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
    };

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }

  _openModal() {
    this.setState({
      openModal: true,
    })
  }

  _closeModal() {
    this.setState({
      openModal: false,
    })
  }

  static navigationOptions = {
    title: 'บัญชีธนาคาร',
    headerLeft: null,
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
    const { user, account, loadUser } = this.props;
    const { openModal } = this.state;

    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <ChooseTransferMethod
          closeModal={this._closeModal}
          openModal={openModal}
          {...this.props}
        />
        <ScrollView
          onScrollBeginDrag={loadUser}
        >
          <TextName>
            {user.name}
          </TextName>
          <AccountTitle>
            สาขาบางรักซอย 9
          </AccountTitle>
          <Wrapper>
            <Card
              onPress={this._openModal}
            >
              <CardDesc>ยอดเงินที่ใช้ได้</CardDesc>
              <CardMoney>{account.balance.toLocaleString()}</CardMoney>
              <CardButton>
                <CardButtonText>
                  แตะเพื่อโอน
                </CardButtonText>
              </CardButton>
            </Card>
          </Wrapper>
          <Transactions />
        </ScrollView>
      </Background>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,
  account: state.account,
});

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);