import React, { Component } from 'react';
import Hero from './SpeksiHero';
import ShowsContainer from './ShowsContainer';
import styles from './Speksi2019.css';

class Speksi2019 extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    return (
      <div className={styles.container}>
        <Hero />
        <ShowsContainer />
      </div>
    );
  }
}


export default Speksi2019;
