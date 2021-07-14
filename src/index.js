import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap'
import App from './App';
import store from '../src/store/store'
import Footer from './layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './layout/navbar'
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Navbar/>
    <App />
    <Footer/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
