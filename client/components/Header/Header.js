import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends Component {
    render () {
        return (
            <div>
            	<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<Link className="navbar-brand" to="/">HybridiSpeksi</Link>


				{/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/produktionhallinta">Produktio</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/jasenrekisteri">Jäsenrekisteri</Link>
						</li>
					</ul>
					<span className="navbar-text">
						<div onClick={auth.signOut}>Kirjaudu ulos</div>
				  </span>
				</div> */}
			</nav>
            </div>
        )
    }
}
	
export default Header