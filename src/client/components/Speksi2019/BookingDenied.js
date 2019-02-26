import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BookingConfirmation.css';
import PageHero from '../PageHero/PageHero';
import ajax from '../../Utils/Ajax';

class BookingConfirmation extends Component {
  constructor() {
    super();

    this.state = {
      errorMessage: '',
    };
  }
  componentDidMount() {
    $(window).scrollTop(0);
    const { params } = this.props;
    ajax.sendGet('/ohjaustieto/maksuvirhe')
      .then((res) => {
        res.data.map((ohjaustieto) => {
          if (params.value === ohjaustieto.value) {
            this.setState({ errorMessage: ohjaustieto.name });
          } else {
            this.setState({ errorMessage: 'Tuntematon virhe. Tarvittaessa ota yhteys lipunmyynti@hybridispeksi.fi' });
          }
        });
      });
  }

  render() {
    return (
      <div className={`${styles.container}`}>
        <div className={styles.pageHero}>
          <PageHero title="Tapahtui virhe!" />
        </div>
        <div className={styles.instructionsContainer}>
          <div className={styles.instructions}>
            <h2>Varauksessa tapahtui virhe</h2>
            <p>{this.state.errorMessage}</p>
          </div>
        </div>
      </div>
    );
  }
}

BookingConfirmation.propTypes = {
  params: PropTypes.object,
};

export default BookingConfirmation;
