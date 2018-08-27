import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import store from './src/store';

import OpenAccount from './src/containers/OpenAccount';
import ConfirmAccount from './src/containers/ConfirmAccount';
import PinCode from './src/containers/PinCode';
import Signature from './src/containers/Signature';
import TouchFinger from './src/containers/TouchFinger';
import Finish from './src/containers/Finish';

const Navigator = createStackNavigator({
  OpenAccount: { screen: OpenAccount },
  ConfirmAccount: { screen: ConfirmAccount },
  PinCode: { screen: PinCode },
  Signature: { screen: Signature },
  TouchFinger: { screen: TouchFinger },
  Finish: { screen: Finish },
}, {
  initialRouteName: 'OpenAccount',
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
