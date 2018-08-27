import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Transaction from '../components/Transaction';

class Transactions extends Component  {
  render() {
    return (
      <View>
        <Transaction
          date="8 ตุลาคม 2561"
          data={[{
            name: 'ปลากระป๋อง',
            amount: '-10'
          }, {
            name: 'ข้าวสวย',
            amount: '-860'
          }]}
        />
        <Transaction
          date="7 ตุลาคม 2561"
          data={[{
            name: 'ปลาทู',
            amount: '-10'
          }, {
            name: 'หลานโอนให้ไปทำผม',
            amount: '+8000'
          }]}
        />
      </View>
    );
  }
}

export default Transactions;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import _ from 'lodash';
// import {
//   View
// } from 'react-native';
// import Transaction from '../components/Transaction';

// class Transactions extends Component  {
//   render() {
//     let { transactions } = this.props;
//     let merge = _.mergeWith(transactions.recive, transactions.send);
//     transactions = _.values(merge);

//     return (
//       <View>
//         {transactions.map(item => {
//           <Transaction
//             name="test"
//             amount="100"
//           />
//         })}
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   transactions: state.transactions,
// })

// export default connect(mapStateToProps)(Transactions);