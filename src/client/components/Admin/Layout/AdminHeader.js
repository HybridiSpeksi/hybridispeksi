import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../../../Utils/Auth';

class AdminHeader extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/admin">
            HybridiSpeksi
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/varaustenhallinta">
                  Varaustenhallinta
                </Link>
              </li> */}
              <li className="nav-item">
                {auth.hasRole(3) ? (
                  <Link className="nav-link" to="/produktionhallinta">
                    Produktio
                  </Link>
                ) : (
                  <a className="nav-link disabled" to="#">
                    Produktio <i className="fa fa-lock" aria-hidden="true" />
                  </a>
                )}
              </li>
              <li className="nav-item">
                {auth.hasRole(3) ? (
                  <Link className="nav-link" to="/tapahtumat">
                    Tapahtumat
                  </Link>
                ) : (
                  <a className="nav-link disabled" to="#">
                    Tapahtumat <i className="fa fa-lock" aria-hidden="true" />
                  </a>
                )}
              </li>
              <li className="nav-item">
                {auth.hasRole(4) ? (
                  <Link className="nav-link" to="/jasenrekisteri">
                    Jäsenrekisteri
                  </Link>
                ) : (
                  <a className="nav-link disabled" to="#">
                    Jäsenrekisteri <i className="fa fa-lock" aria-hidden="true" />
                  </a>
                )}
              </li>
              <li className="nav-item">
                {auth.hasRole(4) ? (
                  <Link className="nav-link" to="/vuodenspeksilainen">
                    Vuoden speksiläinen
                  </Link>
                ) : (
                  <a className="nav-link disabled">
                    Vuoden speksiläinen <i className="fa fa-lock" aria-hidden="true" />
                  </a>
                )}
              </li>
              <li className="nav-item">
                {auth.hasRole(5) ? (
                  <Link className="nav-link" to="/kayttajat">
                    Käyttäjät
                  </Link>
                ) : (
                  <a className="nav-link disabled" to="#">
                    Käyttäjät <i className="fa fa-lock" aria-hidden="true" />
                  </a>
                )}
              </li>
              <li className="nav-item">
                {auth.hasRole(5) ? (
                  <Link className="nav-link" to="/ohjaustiedot">
                    Ohjaustiedot
                  </Link>
                ) : (
                  <a className="nav-link disabled" to="#">
                    Ohjaustiedot <i className="fa fa-lock" aria-hidden="true" />
                  </a>
                )}
              </li>
              <li className="nav-item">
                {auth.hasRole(3) ? (
                  <Link className="nav-link" to="/palautteet">
                    Palautteet
                  </Link>
                ) : (
                  <a className="nav-link disabled" to="#">
                    Palautteet <i className="fa fa-lock" aria-hidden="true" />
                  </a>
                )}
              </li>
            </ul>
            <span className="navbar-text">
              <div onClick={auth.signOut}>Kirjaudu ulos</div>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default AdminHeader;
