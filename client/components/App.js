import React from 'react';

//import styles from './App.css';

import { BrowserRouter, Route } from 'react-router-dom';



import Home from './Home/Home';


export default class App extends React.Component {
  render() {
    return (
      <div id="main-wrapper">
        <BrowserRouter>
          <div>
            {/* <Navbar /> */}
            <div id="content-wrapper">
              <Route exact path="/" render={() => <Home />} />
            </div>
            {/* <Footer /> */}
          </div>

        </BrowserRouter>
      </div>
    );
  }
}