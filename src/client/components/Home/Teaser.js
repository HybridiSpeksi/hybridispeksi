import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Teaser.css';

const Teaser = () => (
  <div className={styles.iframeContainer}>
    <iframe
      title="teaser"
      id="youtubeplayer"
      src="https://www.youtube.com/embed/fmCjxaopc-E?enablejsapi=1&rel=0"
      width="100%"
      height="360"
      frameBorder="0"
      allowFullScreen="allowFullScreen"
      className={styles.video}
    />
  </div>
);

export default Teaser;
