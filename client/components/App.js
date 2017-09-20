import React from 'react';

import globalStyles from './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import Speksi from './Speksi/Speksi';

import Rekry from './Rekry/Rekry';

import Admin from './Admin/Admin';
import Login from './Admin/Auth/Login';

export default class App extends React.Component {
  render() {
    return (
      <div id="main-wrapper">
        
        <BrowserRouter>
          <div>
          <Header />
            <div id="content-wrapper">
              <Route exact path="/" render={() => <Home globalStyles={globalStyles} />} />
              <Route exact path="/" render={() => <Speksi />} />
              <Route exact path="/rekry" render={() => <Rekry />} />
            </div>
            <Footer />

            <div id="admin-wrapper">
              <Route exact path="/admin" render={() => <Admin />} />
              <Route exact path="/login" render={() => <Login />} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}