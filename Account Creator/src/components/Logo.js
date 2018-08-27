import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
      }}>
        <View>
          <Text style={{
            fontFamily: 'Kanit-Medium',
            color: '#20CD73',
            textAlign: 'center',
            fontSize: 40,

          }}>
            K
          </Text>
        </View>
        <View style={{
          marginLeft: 10
        }}>
          <Text style={{
            fontFamily: 'Kanit-Medium',
            textAlign: 'center',
            fontSize: 40,
            color: '#DB0518',
          }}>
            PLUS
          </Text>
        </View>
      </View>
    )
  }
}

export default Logo;