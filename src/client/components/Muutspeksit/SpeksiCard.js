import React from 'react';
import PropTypes from 'prop-types';
import styles from './SpeksiCard.css';

const SpeksiRow = ({ speksi }) => (
  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <div className={styles.tdk}>
        {speksi.tdk}
      </div>
      <div className={styles.name}>
        <h3 dangerouslySetInnerHTML={{ __html: speksi.name }} />
      </div>
      <div>
        <img src={speksi.imageUrl} className={styles.linkimage} />
      </div>
      <a href={speksi.url} className={styles.linkOverlay} />
    </div>
  </div>
);

SpeksiRow.propTypes = {
  speksi: PropTypes.object,
};

export default SpeksiRow;
