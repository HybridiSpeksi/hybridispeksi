import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageHero.css';

const PageHero = ({ title, subTitle }) => (
  <div className={styles.heroContainer}>
    <div className={styles.mainTitleContainer}>
      <h1 className={styles.mainTitle}>{title}</h1>
    </div>
    {subTitle ? (
      <div className={styles.subTitleContainer}>
        <h2 className={styles.subTitle}>{subTitle}</h2>
      </div>
    ) : (
      null
    )}
  </div>
);

PageHero.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default PageHero;
