import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeroFullViewport from '../HeroFullViewport/HeroFullViewport';
import styles from './Speksi2019.css';

class Speksi2019 extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    const globalStyles = this.props.globalStyles;
    return (
      <HeroFullViewport backgroundImage="/assets/images/speksi2019bg.png">
        <div className={styles.headerContainer}>
          <h1 className={globalStyles.bigHeading}>Hybridispeksi 2019</h1>
          <p className={globalStyles.headingText}>
              Tunnetko lohikäärmeen voiman sisälläsi? Matkaa kanssamme mystisen
              Kung Fun maailmaan. Vuoden 2019 HybridiSpeksissä on luvassa näyttäviä taisteluita,
              karismaattisia hahmoja, höyryäviä kylpyjä, koskettavaa romantiikkaa
              ja monipuolisia musiikkinumeroita!
          </p>
          <p className={globalStyles.subHeading}>
              HybridiSpeksi 2019<br />
              Ensi-ilta 27.3.<br />
              @Manilla
          </p>
        </div>
      </HeroFullViewport>
    );
  }
}

Speksi2019.propTypes = {
  globalStyles: PropTypes.object,
};

export default Speksi2019;
