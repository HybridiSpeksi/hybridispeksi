import React from 'react';

import styles from './Home.css';

const Sponsors = () => (
    <div className={styles.sponsors}>
      <h2>Menossa mukana</h2>
      <div className={styles.sponsor}>
        <a href="https://www.tek.fi/fi">
          <img className={styles.sponsorImage} src="/assets/images/sponsors/tek.png" />
        </a>
      </div>
      <div className={styles.sponsor}>
      	<a href="http://tivia.fi/etusivu">
      		<img className={styles.sponsorImage} src="/assets/images/sponsors/tivia.png" />
      	</a>
      </div>
    </div>
);

export default Sponsors;
