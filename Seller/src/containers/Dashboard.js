import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Transaction from './Transaction';
import {
  Background,
  Wrapper,
  TextName,
  TextLabel,
  TextMoney,
  Button,
  ButtonText
} from '../utility';
import { getUser } from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this._sellProduct = this._sellProduct.bind(this);
  }

  _sellProduct() {
    const { navigate } = this.props.navigation;
    navigate('SellProduct')
  }

  static navigationOptions = {
    title: 'ร้านค้า',
    headerLeft: null,
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
    const { user, account, loadUser } = this.props;

    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <ScrollView
          onScrollBeginDrag={loadUser}
        >
          <Wrapper>
            <TextName>
              {user.name}
            </TextName>
            <TextLabel>
              จำนวนเงินในบัญชี
            </TextLabel>
            <TextMoney>
              {account.balance.toLocaleString()}
            </TextMoney>
          </Wrapper>
          <Transaction />
        </ScrollView>
        <Button
          onPress={this._sellProduct}
        >
          <ButtonText>
            ขายสินค้า
          </ButtonText>
        </Button>
      </Background>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  account: state.account,
});

const mapDispatchToProps = dispatch => ({
  loadUser: () => { console.log('ok'); dispatch(getUser()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
