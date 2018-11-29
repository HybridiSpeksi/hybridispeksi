import React from 'react';
import styles from './SectionDivider';

const SectionDivider = () => (
  <div className={'row justify-content-center ' + styles.hr}>
    <div className="col-8">
      <hr />
    </div>
  </div>
);

export default SectionDivider;
