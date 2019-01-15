import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const Teaser = () => (
  <div className={styles.teaser}>
    <iframe
      id="youtubeplayer"
      src="https://www.youtube.com/embed/fmCjxaopc-E?enablejsapi=1&rel=0"
      width="100%"
      height="360"
      frameBorder="0"
      allowFullScreen="allowFullScreen"
    />
  </div>
);

export default Teaser;