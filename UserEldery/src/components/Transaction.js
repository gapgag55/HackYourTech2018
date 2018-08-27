import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  TextHeadTransaction,
  TextItemTransaction,
  TransactionItem
} from '../utility';

class Transaction extends Component {
  render() {
    const { date, data } = this.props;
    return (
      <View>
        <TextHeadTransaction>
          บัญชีวันที่ {date}
        </TextHeadTransaction>
        {data.map((item) => (
          <TransactionItem key={item.name}>
            <TextItemTransaction>
              {item.name}
            </TextItemTransaction>
            <TextItemTransaction
              style={{
                color: item.amount > 0 ? '#00A950' : '#FF1818'
              }}
            >
              {item.amount} บาท
            </TextItemTransaction>
          </TransactionItem>
        ))}
      </View>
    );
  }
}

 export default Transaction;