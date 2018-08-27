import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Wrapper,
  TextLabelLeft,
  TextMoneyLeft,
  Background,
  Button,
  ButtonText,
} from '../utility';

class Confirmation extends Component {
  constructor(props) {
    super(props);

    this._checkout = this._checkout.bind(this);
  }

  _checkout() {
    const { navigate } = this.props.navigation;

    // Navigate to Signature
    navigate('Signature');
  }

  static navigationOptions = {
    title: 'ยืนยันการซื้อขาย',
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
    const { transaction } = this.props;

    return (
      <Background>
        <StatusBar barStyle="light-content" />
        <Wrapper>
          <View style={{ marginBottom: 20 }}>
            <TextLabelLeft>
              จำนวนเงิน
            </TextLabelLeft>
            <TextMoneyLeft>
              { transaction.sender.amount }
            </TextMoneyLeft>
          </View>
          <View>
            <TextLabelLeft>
              บันทึก
            </TextLabelLeft>
            <TextMoneyLeft>
              { transaction.note }
            </TextMoneyLeft>
          </View>
        </Wrapper>
        <Button
          onPress={this._checkout}
        >
          <ButtonText>
            ยืนยัน
          </ButtonText>
        </Button>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  transaction: state.transaction,
})

export default connect(mapStateToProps)(Confirmation);