import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.css';
import SomeIcons from './SomeIcons';

const Footer = () => (
  <div className={styles.container}>
    <div>
      <Link className={styles.homeLink} to="/">HybridiSpeksi</Link>
    </div>
    <SomeIcons />
    <div>
      <nav className="navbar navbar-inverse">
        <a href="mailto:hallitus@hybridispeksi.fi" className="navbar-brand">hallitus@hybridispeksi.fi</a>
      </nav>
    </div>
  </div>
);

export default Footer;
