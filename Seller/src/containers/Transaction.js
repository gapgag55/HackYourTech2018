import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  TranscationalRow,
  TranscationalLabel,
  TranscationalMoney,
  TextLabel
} from '../utility';

class Transaction extends Component {
  render() {
    const { transactions } = this.props;

    if (!transactions.recive) {
      return <TextLabel>ไม่มียอดรายได้</TextLabel>
    }

    return (
      <View>
        {transactions.recive.map((item, index) => (
          <TranscationalRow key={item.note.concat('-' + index)}>
            <TranscationalLabel>
              {item.note}
            </TranscationalLabel>
            <TranscationalMoney>
              + {item.amount} บาท
            </TranscationalMoney>
          </TranscationalRow>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions,
})

export default connect(mapStateToProps)(Transaction);