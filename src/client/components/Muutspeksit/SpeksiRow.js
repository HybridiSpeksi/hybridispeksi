import React from 'react';
import PropTypes from 'prop-types';
import styles from './Muutspeksit.css';

const SpeksiRow = ({ speksi }) => (
  <a href={speksi.url}>
    <div className={styles.externallink}>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: speksi.name }} />
      </div>
      <div>
        <img src={speksi.imageUrl} className={styles.linkimage} />
      </div>
    </div>
  </a>
);

SpeksiRow.propTypes = {
  speksi: PropTypes.object,
};

export default SpeksiRow;
