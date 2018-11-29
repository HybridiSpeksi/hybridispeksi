import React from 'react';
import styles from './Footer.css';

const SomeIcons = () => (
  <div className={styles.someIcons}>
    <div>
      <a href="https://www.facebook.com/HybridiSpeksi/"><img src="/assets/images/facebook.svg" className={styles.link} /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/hybridispeksi/"><img src="/assets/images/instagram.svg" className={styles.link} /></a>
    </div>
    <div>
      <a href="https://www.youtube.com/channel/UCVkhBQHSqKtwC5X7qXe6HSg"><img src="/assets/images/youtube.svg" className={styles.link} /></a>
    </div>
  </div>
);

export default SomeIcons;
