import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import Logo from '../components/Logo';
import CodeInput from 'react-native-confirmation-code-input';
import {
  Background,
  TextDesc,
} from '../utility';
import { addData } from '../actions';

class PinCode extends Component {
  constructor(props) {
    super(props);

    this._onPressButton = this._onPressButton.bind(this);
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

  _onPressButton(code) {
    console.log(code);
    const { addInfo, account } = this.props;
    const newAccount = Object.assign({}, account, {
      pin: code
    })

    addInfo({
      account: newAccount
    })

    const { navigate } = this.props.navigation;
    navigate('Signature');
  }

  render() {
    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <Logo />
        <TextDesc>สร้างรหัสผ่าน</TextDesc>
        <CodeInput
          ref="codeInputRef1"
          secureTextEntry
          className={'border-b'}
          space={10}
          size={50}
          inputPosition='center'
          containerStyle={{ marginTop: 30 }}
          onFulfill={(code) => this._onPressButton(code)}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(PinCode);