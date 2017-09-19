import React from 'react';

//import styles from './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';

import Rekry from './Rekry/Rekry';


export default class App extends React.Component {
  render() {
    return (
      <div id="main-wrapper">
        <Header />
        <BrowserRouter>
          <div>
            <div id="content-wrapper">
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/rekry" render={() => <Rekry />} />
            </div>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}