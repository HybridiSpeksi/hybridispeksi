import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.css';
import SomeIcons from './SomeIcons';

class Footer extends Component {
  addEmail() {
    return (
      <a href="mailto:hallitus@hybridispeksi.fi" className="navbar-brand">hallitus@hybridispeksi.fi</a>
    );
  }

  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div>
          <nav className="navbar navbar-inverse">
            <Link className="navbar-brand" to="/">HybridiSpeksi</Link>
          </nav>
        </div>
        <SomeIcons />
        <div>
          <nav className="navbar navbar-inverse">
            {this.addEmail()}
          </nav>
        </div>
      </div>
    );
  }
}

export default Footer;
