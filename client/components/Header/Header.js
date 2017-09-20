import React, { Component } from 'react';

import styles from './Header.css';

class Header extends Component {
    render () {
        return (
            <div className={"container-fluid " + styles.container}>
            	<div className="row align-items-center">
	            	<div className={"col-sm-auto " + styles.logo}>
	                	<h1>Hybridispeksi</h1>
	                </div>
	                <div className={"col-sm-1 " + styles.nav}>
	                	<span className={"align-middle"}>Etusivu</span>
	                </div>
	                <div className={"col-sm-1 " + styles.nav}>
	                	<span className={"align-middle"}>Näytökset</span>
	                </div>
	                <div className={"col-sm-1 " + styles.nav}>
	                	<span className={"align-middle"}>Liput</span>
	                </div>
                </div>
            </div>
        )
    }
}
	
export default Header