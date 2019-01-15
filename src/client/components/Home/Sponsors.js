import React from 'react';

import styles from './Home.css';

const Sponsors = () => (
    <div className={styles.sponsors}>
      <h2>Menossa mukana</h2>
      <div className={styles.sponsor}>
        <a href="https://www.tek.fi/fi">
          <img src="/assets/images/tek.svg" />
        </a>
      </div>
    </div>
);

export default Sponsors;
