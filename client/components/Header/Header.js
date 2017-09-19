import React, { Component } from 'react';

import styles from './Header.css';

class Header extends Component {
    render () {
        return (
            <div className={"container-fluid " + styles.container}>
            	<div className="row align-items-center">
	            	<div className={"col-sm-3"}>
	                	<h1 className={styles.logo}>Hybridispeksi</h1>
	                </div>
	                <div className="col-sm-1 align-self-center">
	                	<span className={"align-middle " + styles.nav}>Etusivu</span>
	                </div>
	                <div className="col-sm-1">
	                	<span className={"align-middle " + styles.nav}>Näytökset</span>
	                </div>
	                <div className="col-sm-1">
	                	<span className={"align-middle " + styles.nav}>Liput</span>
	                </div>
                </div>
            </div>
        )
    }
}
	
export default Header