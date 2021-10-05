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

//dispatch will pass action to reducer(movies)
store.dispatch({
  type: 'ADD_MOVIES',
  movies:[{name:'superman'}]
})

console.log('afterstore.getState', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

