import React, { Component } from 'react';

import styles from './Header.css';

class Header extends Component {
    render () {
        return (
            <div className={"container-fluid " + styles.container}>
            	<div className={"row align-items-center " + styles.content}>
	            	<div className={"col-sm-auto " + styles.logo}>
	                	<h1>HybridiSpeksi</h1>
	                </div>
	                <div className={"col-sm-1 align-self-end " + styles.subtopic}>
	                	<h5 className={"align-self-end " + styles.nav}>Rekry 26.9.</h5>
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