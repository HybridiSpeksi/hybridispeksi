import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cuid from 'cuid';

import styles from './Header.css';
import mobile from './MobileHeader.css';

const NavItem = ({ site }) => (
  <li className={styles.navItem}>
    <NavLink className={styles.navLink} to={site.url} activeClassName={styles.activeNavLink} >
      {site.name}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  site: PropTypes.object,
};

const MobileNavItem = ({ site, handleClick }) => (
  <NavLink className={`${mobile.navLink}`} to={site.url} onClick={handleClick} >
    {site.name}
  </NavLink>
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
    this.bindListeners = this.bindListeners.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.hideMobileMenu = this.hideMobileMenu.bind(this);
  }

  componentDidMount() {
    this.bindListeners();
  }

  bindListeners() {
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
    $(document).on('click', () => {
      this.hideMobileMenu();
    });
  }

  toggleMobileMenu() {
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu,
    }));
  }

  hideMobileMenu() {
    this.setState({
      showMobileMenu: false,
    });
  }

  render() {
    const { showMobileMenu } = this.state;
    let mobileMenuClasses;
    if (showMobileMenu) {
      mobileMenuClasses = `${mobile.mobileMenu} ${mobile.mobileMenuVisible}`;
    } else {
      mobileMenuClasses = `${mobile.mobileMenu} ${mobile.mobileMenuHidden}`;
    }

    return (
      <div className={styles.navContainer + ' top'}>
        <div className={styles.content}>
          <div className={`${styles.brand}`}>
            <NavLink className={styles.brandLink} to="/">HybridiSpeksi</NavLink>
          </div>

          <ul className={styles.navItems}>
            {this.state.sites.map(site => <NavItem key={cuid()} site={site} />)}
          </ul>
          <button className={mobile.mobileMenuIcon} onClick={() => this.toggleMobileMenu()} aria-label="Avaa mobiilimenu">
            <i className="fa fa-bars" />
          </button>
          {/* {showMobileMenu ? ( */}
          <div className={mobileMenuClasses}>
            {this.state.sites.map(site => <MobileNavItem key={cuid()} site={site} handleClick={() => this.toggleMobileMenu()} />)}
          </div>
          {/* ) : null} */}
        </div>
      </div>
    );
  }
}

export default Header;
