import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StatusBar,
  AlertIOS,
} from 'react-native';
import TouchID from 'react-native-touch-id';
import Logo from '../components/Logo';
import {
  Background,
  TextDesc,
} from '../utility';
import { addData } from '../actions';

class TouchFinger extends Component {
  componentDidMount() {
    const optionalConfigObject = {
      fallbackLabel: "Show Passcode"
    }

    TouchID.authenticate('ยืนยันรหัสผ่าน', optionalConfigObject)
      .then(success => {
        const { addInfo, account } = this.props;
        const newAccount = Object.assign({}, account, {
          fingerprint: 'cf23df2207d99a74fbe169e3eba035e633b65d94',
        })

        addInfo({
          account: newAccount
        })

        // Navigate to Success
        const { navigate } = this.props.navigation;
        navigate('Finish')
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed', error);
      });
  }

  static navigationOptions = {
    title: 'สร้างรหัสยันยัน',
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
    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <Logo />
        <TextDesc>ยืนยันลายนิ้วมือ</TextDesc>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  account: state.account
})

const mapDispatchToProps = dispatch => ({
  addInfo: (data) => dispatch(addData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TouchFinger);
