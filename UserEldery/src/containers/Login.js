import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AlertIOS,
} from 'react-native';
import TouchID from 'react-native-touch-id';
import {
  Background,
  TextDesc,
} from '../utility';
import { getUser } from '../actions';

class TouchFinger extends Component {
  componentDidMount() {
    const optionalConfigObject = {
      fallbackLabel: "Show Passcode"
    }

    TouchID.authenticate('ยืนยันรหัสผ่าน', optionalConfigObject)
      .then(success => {
        const { loadUser } = this.props;
        loadUser();

        // Navigate to Success
        const { navigate } = this.props.navigation;
        navigate('Dashboard')
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return false;
  }
}

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(getUser()),
})

export default connect(null, mapDispatchToProps)(TouchFinger);