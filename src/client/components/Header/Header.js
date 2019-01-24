import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cuid from 'cuid';

import styles from './Header.css';
import mobile from './MobileHeader.css';

const NavItem = ({ site }) => (
  <li className={`${styles.navLink}`}>
    <Link to={site.url} >
      {site.name}
    </Link>
  </li>
);

NavItem.propTypes = {
  site: PropTypes.object,
};

const MobileNavItem = ({ site, handleClick }) => (
  <Link className={`${mobile.navLink}`} to={site.url} onClick={handleClick} >
    {site.name}
  </Link>
);

MobileNavItem.propTypes = {
  site: PropTypes.object,
  handleClick: PropTypes.func,
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
      showMobileMenu: false,

    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
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

  toggleMobileMenu() {
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu,
    }));
  }

  render() {
    const { showMobileMenu } = this.state;
    return (
      <div className={styles.navContainer + ' top'}>
        <div className={styles.content}>
          <div className={`${styles.brand}`}>
            <Link className={styles.brandLink} to="/">HybridiSpeksi</Link>
          </div>

          <ul className={styles.navItems}>
            {this.state.sites.map(site => <NavItem key={cuid()} site={site} />)}
          </ul>
          <div className={mobile.mobileMenuIcon} onClick={this.toggleMobileMenu}>
            <i className="fa fa-bars" />
          </div>
          {showMobileMenu ? (
            <div className={mobile.mobileMenu}>
              {this.state.sites.map(site => <MobileNavItem key={cuid()} site={site} handleClick={this.toggleMobileMenu} />)}
            </div>
        ) : null}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  globalStyles: PropTypes.any,
};

export default Header;
