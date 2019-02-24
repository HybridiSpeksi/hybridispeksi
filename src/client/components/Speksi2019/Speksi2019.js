import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hero from './SpeksiHero';
import ShowsContainer from './ShowsContainer';
import styles from './Speksi2019.css';

class Speksi2019 extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    const globalStyles = this.props.globalStyles;
    return (
      <div className={styles.container}>
        <Hero />
        <ShowsContainer />
      </div>
    );
  }
}

Speksi2019.propTypes = {
  globalStyles: PropTypes.object,
};

export default Speksi2019;
