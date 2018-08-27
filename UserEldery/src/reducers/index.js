const initialState = {
  user: {
    id: '',
		name: '',
		citizenid: '',
		phone: ''
	},
	account: {
    id: '',
    balance: 0,
    pin: '',
    signature: '',
    fingerprint: '',
	},
  transactions: [],
  transaction: {
    sender: {
      id: 'USER_UID',
      amount: 999
    },
    reciver: {
      account: {
        id: '012345678',
        bank: 'KBANK',
        name: 'Bhumibol Adulyadej'
      }
    },
    note: 'da fish'
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return Object.assign({}, state, action.data)
    default:
      return state;
  }
};
