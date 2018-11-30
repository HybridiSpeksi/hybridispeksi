import React from 'react';

import styles from './Home.css';

const Sponsors = () => (
  <div className="row justify-content-center">
    <div className={'col-lg-6 col-md-10 col-sm-10 ' + styles.sponsors}>
      <h2>Menossa mukana</h2>
      <div className={'col-12 ' + styles.sponsor}>
        <a href="https://www.tek.fi/fi">
          <img src="/assets/images/tek.svg" />
        </a>
      </div>
    </div>
  </div>
);

export default Sponsors;
