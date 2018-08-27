import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
   Button,
   ButtonText,
   BackgroundGrey,
   ButtonWrapper
} from '../utility';

class ConfirmTransfer extends Component {
  constructor(props) {
    super(props);
    this._confirm = this._confirm.bind(this);
  }

  _confirm() {
    const { navigate } = this.props.navigation;
    navigate('Dashboard');
  }

  static navigationOptions = {
    title: 'ยืนยันการโอนเงิน',
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
      <BackgroundGrey style={{
        backgorundColor: '#F9F9F9',
      }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Image source={require('../../assets/images/receipt.png')} />
        </View>
        <ButtonWrapper>
          <Button
            onPress={this._confirm}
          >
            <ButtonText>
              กลับไปหน้าแรก
            </ButtonText>
          </Button>
        </ButtonWrapper>
      </BackgroundGrey>
    );
  }
}

export default ConfirmTransfer;