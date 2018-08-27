import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import { addData } from '../actions';

class Signature extends Component {
  constructor(props) {
    super(props);
    this._onSaveEvent = this._onSaveEvent.bind(this);
  }

  saveSign() {
    this.refs['sign'].saveImage();
  }

  resetSign() {
      this.refs['sign'].resetImage();
  }

  _onSaveEvent(result) {
    const { addInfo, account } = this.props;
    const newAccount = Object.assign({}, account, {
      signature: result.encoded
    })

    addInfo({
      account: newAccount
    })

    // Navigate to Finish
    const { navigate } = this.props.navigation;
    navigate('TouchFinger')
  }

  static navigationOptions = {
    title: 'ลงลายมือชื่อ',
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
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <SignatureCapture
          style={[{flex:3},styles.signature]}
          ref='sign'
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'landscape'}
        />

        <View style={{ flexDirection: 'row' }}>
          <TouchableHighlight
            style={[styles.buttonStyle, styles.resetButtonStyle]}
            onPress={() => { this.resetSign() } }
          >
            <Text style={styles.fontStyle}>รีเซต</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttonStyle, styles.saveButtonStyle]}
            onPress={() => { this.saveSign() } } >
            <Text style={styles.fontStyle}>บันทึก</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 10,
  },
  saveButtonStyle: {
    backgroundColor: '#00A950',
  },
  resetButtonStyle: {
    backgroundColor: '#555'
  },
  fontStyle: {
    fontFamily: 'Kanit-Medium',
    color: '#fff',
    fontSize: 20,
  }
});

const mapStateToProps = state => ({
  user: state.user,
  account: state.account
})

const mapDispatchToProps = dispatch => ({
  addInfo: (data) => dispatch(addData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signature);
