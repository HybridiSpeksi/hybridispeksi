import React, { Component } from 'react';

import SectionDivider from '../SectionDivider/SectionDivider';
import Hero from './Hero';
import Teaser from './Teaser';
import JumboLinks from './JumboLinks';
import HybridiSpeksiAbout from './HybridiSpeksiAbout';
import Sponsors from './Sponsors';

import styles from './Home.css';

class Home extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    return (
      <div className={styles.container}>
        <Hero />

        <Teaser />

        <JumboLinks />

        <SectionDivider />

        <HybridiSpeksiAbout />

        <SectionDivider />

        <Sponsors />
      </div>
    );
  }
}

export default Home;
