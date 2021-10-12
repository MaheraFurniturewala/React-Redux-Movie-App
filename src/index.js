import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


import './index.css';
import App from './components/App';
import movies from './reducers';

//pass the reducer in the args
const store = createStore(movies);
console.log('store', store);
console.log('beforestore.getState', store.getState());

//dispatch function is used to send actions to reducer
//dispatch will pass action object to reducer(movies) and store ultimately
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name:'superman'}]
// })


//pass movies as props from the store
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

