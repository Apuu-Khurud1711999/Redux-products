import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {cartarr:[]};

function reducer(state = initialState, actions){
  console.log(state)
  const items = localStorage.getItem('mycart');
  if(items == null){
    return undefined;
  }
  else{
    return JSON.parse(items)
  }
};

const store = createStore(reducer);
store.dispatch({type: 'Additem'})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
