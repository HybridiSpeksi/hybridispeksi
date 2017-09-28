import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends Component {
    render () {
        return (
            <div>
            	<nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<Link className="navbar-brand" to="/">HybridiSpeksi</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link d-none d-md-block" to="/esitykset">Esitykset</Link>
							<Link className="nav-link d-md-none" data-target="#navbarSupportedContent" data-toggle="collapse" to="/esitykset">Esitykset</Link>
							
						</li>
						<li className="nav-item">
							<Link className="nav-link d-none d-md-block" to="/speksit">Aiemmat Speksit</Link>
							<Link className="nav-link d-md-none" data-target="#navbarSupportedContent" data-toggle="collapse" to="/speksit">Aiemmat Speksit</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link d-none d-md-block" to="#">Galleria</Link>
							<Link className="nav-link d-md-none" data-target="#navbarSupportedContent" data-toggle="collapse" to="#">Galleria</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link d-none d-md-block" to="#">Yhdistys</Link>
							<Link className="nav-link d-md-none" data-target="#navbarSupportedContent" data-toggle="collapse" to="#">Yhdistys</Link>
						</li>
					</ul>
				</div>


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