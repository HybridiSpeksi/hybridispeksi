import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends Component {
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
        $('.top').css('display', 'block');
      }
    });
  }
  render() {
    return (
      <div className={'top ' + styles.container}>
        <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="d-none d-md-block navbar-brand" to="/">HybridiSpeksi</Link>
          <Link className="d-block d-md-none navbar-brand small-screen-link" to="/">HybridiSpeksi</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link d-none d-md-block" to="/speksit">Aiemmat Speksit</Link>
                <Link className="nav-link d-md-none small-screen-link" to="/speksit">Aiemmat Speksit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-none d-md-block" to="/yhdistys">Yhdistys</Link>
                <Link className="nav-link d-md-none small-screen-link" to="/yhdistys">Yhdistys</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-none d-md-block" to="/muutspeksit">Muut speksit</Link>
                <Link className="nav-link d-md-none small-screen-link" to="/muutspeksit">Muut speksit</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
