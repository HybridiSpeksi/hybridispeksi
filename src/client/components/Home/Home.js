import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const globalStyles = this.props.globalStyles;
    return (
      <div className={styles.container}>
        <Hero globalStyles={globalStyles} />

        <Teaser globalStyles={globalStyles} />

        <JumboLinks />

        <SectionDivider />

        <HybridiSpeksiAbout />

        <SectionDivider />

        <Sponsors />
      </div>
    );
  }
}

Home.propTypes = {
  globalStyles: PropTypes.any,
};

export default Home;
