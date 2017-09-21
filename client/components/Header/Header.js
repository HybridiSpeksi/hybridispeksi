import React, { Component } from 'react';

import styles from './Header.css';

class Header extends Component {
    render () {
        return (
            <div className={"container-fluid " + styles.container}>
            	<div className={"row align-items-center " + styles.content}>
	            	<div className={"col-sm-auto align-items-center justify-content-center " + styles.logo}>
	                	<h3>HybridiSpeksi</h3>
	                </div>
	                <div className={"col-sm-6 " + styles.navigation}>
	                <ul className="nav justify-content-left">
	                	<li className="nav-item">
	                		<a href="#" className={"nav-link active " + styles.navitem}>Etusivu</a>
	                	</li>
	                	<li className="nav-item">
	                		<a href="#" className={"nav-link " + styles.navitem}>Esitykset</a>
	                	</li>
	                	<li className="nav-item">
	                		<a href="#" className={"nav-link " + styles.navitem}>Liput</a>
	                	</li>
	                </ul>
	                </div>

	                {/*<div className={"col-sm-1 " + styles.nav}>
	                	<span className={"align-middle"}>Etusivu</span>
	                </div>
	                <div className={"col-sm-1 " + styles.nav}>
	                	<span className={"align-middle"}>Näytökset</span>
	                </div>
	                <div className={"col-sm-1 " + styles.nav}>
	                	<span className={"align-middle"}>Liput</span>
	                </div> */}
                </div>
            </div>
        )
    }
}
	
export default Header