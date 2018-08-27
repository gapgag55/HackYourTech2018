const initialState = {
  user: {
		name: '',
		citizenid: '',
		phone: ''
	},
	account: {
    balance: 0,
    pin: '',
    signature: '',
    fingerprint: '',
	}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      console.log(action.data);
      return Object.assign({}, state, action.data)
    default:
      return state;
  }
};
