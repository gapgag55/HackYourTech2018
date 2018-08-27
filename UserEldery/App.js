import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import store from './src/store';

import Login from './src/containers/Login';
import Dashboard from './src/containers/Dashboard';
import PromptPayTransfer from './src/containers/PromptPayTransfer';
import BankAccountTransfer from './src/containers/BankAccountTransfer';
import ConfirmTransfer from './src/containers/ConfirmTransfer';
import ReceiptTransfer from './src/containers/ReceiptTransfer';

const Navigator = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
  PromptPayTransfer: { screen: PromptPayTransfer },
  BankAccountTransfer: { screen: BankAccountTransfer },
  ConfirmTransfer: { screen: ConfirmTransfer },
  ReceiptTransfer: { screen: ReceiptTransfer },
}, {
  initialRouteName: 'Login',
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}