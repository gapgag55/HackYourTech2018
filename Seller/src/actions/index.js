import axios from 'axios';
import config from '../config';

export const ADD_DATA = 'ADD_DATA';

export const addData = (data) => ({
  type: ADD_DATA,
  data,
});

export const getUser = () => {
  return dispatch => {
    axios.get(config.api.concat(`user/${config.user.id}`), { auth: config.auth })
    .then(({ data }) => {
      dispatch(addData(data.data));
      dispatch(getTransactions(data.data.user.id));
    })
    .catch(err => { console.log(err) })
  };
}

export const getTransactions = (userID) => {
  return dispatch => {
    axios.get(config.api.concat(`transactions/${config.user.id}`), { auth: config.auth })
    .then(({ data }) => {
      console.log(data);
      dispatch(addData({
        transactions: data.data
      }))
    })
    .catch(err => { console.log(err) })
  };
}

export const sendTransaction = (data) => {
  return dispatch => {
    axios.post(config.api.concat(`transaction/bank`), data, { auth: config.auth })
    .then(data => {
      console.log(data)
      dispatch(addData({}))
    })
    .catch(err => { console.log(err) })
  };
}