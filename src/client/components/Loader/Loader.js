import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Loader.css';

const Loader = ({ loading }) => {
  return (
    <div className={`${styles.overlay} ${loading ? styles.show : ''}`}>
      <div className={styles.ldsDefault}><div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: state.loader.loading,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
