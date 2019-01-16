import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cuid from 'cuid';

import styles from './Header.css';

const NavItem = ({ site }) => (
  <Link className={styles.navLink} to={site.url} >
    {site.name}
  </Link>
);

NavItem.propTypes = {
  site: PropTypes.object,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [
        {
          url: '/speksit',
          name: 'Aiemmat Speksit',
        },
        {
          url: '/yhdistys',
          name: 'Yhdistys',
        },
        {
          url: '/muutspeksit',
          name: 'Muut Speksit',
        },
      ],
    };
  }
  componentDidMount() {
    $('.small-screen-link').on('click', () => {
      $('.navbar-collapse').collapse('hide');
    });
    $(window).scroll(() => {
      $('.top').css('opacity', 1 - $(window).scrollTop() / 200);
      const opacity = $('.top').css('opacity');
      if (opacity <= 0) {
        $('.top').css('display', 'none');
      } else {
        $('.top').css('display', 'flex');
      }
    });
  }

  render() {
    const { globalStyles } = this.props;
    return (
      <div className={styles.navContainer + ' top'}>
        <div className={`${styles.brand} ${globalStyles.subHeading}`}>
          <Link className={styles.brandLink} to="/">HybridiSpeksi</Link>
        </div>

        <div className={styles.navItems}>
          {this.state.sites.map(site => <NavItem key={cuid()} site={site} />)}
        </div>
        <div className={styles.mobileMenuIcon}>
          <i className="fa fa-bars" />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  globalStyles: PropTypes.any,
};

export default Header;
