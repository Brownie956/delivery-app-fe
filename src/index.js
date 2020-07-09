import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserList from "./components/userList";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Confirmation from "./components/confirmation";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <UserList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
