import React from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import Logo from '../components/Logo';
import axios from 'axios';
import config from '../config';
import {
  Background,
  Wrapper,
  TextDesc,
  Text
} from '../utility';

class OpenAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    const { user, account } = this.props;
    console.log({
      user,
      account
    });
    axios
      .post(config.api.concat('register'), {
        user,
        account
      }, { auth: config.auth })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <Logo />
        <TextDesc>เปิดบัญชีสำเร็จ</TextDesc>
        <Wrapper>
          <Text>เปิดบัญชีสำเร็จ</Text>
        </Wrapper>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  account: state.account,
});

export default connect(mapStateToProps)(OpenAccount);
