import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import store from './src/store';

import TouchFinger from './src/containers/TouchFinger';
import Dashboard from './src/containers/Dashboard';
import SellProduct from './src/containers/SellProduct';
import Confirmation from './src/containers/Confirmation';
import Signature from './src/containers/Signature';
import Thankyou from './src/containers/Thankyou';

const Navigator = createStackNavigator({
  TouchFinger: { screen: TouchFinger },
  Dashboard: { screen: Dashboard },
  SellProduct: { screen: SellProduct },
  Confirmation: { screen: Confirmation },
  Signature: { screen: Signature },
  Thankyou: { screen: Thankyou },
}, {
  initialRouteName: 'TouchFinger',
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
