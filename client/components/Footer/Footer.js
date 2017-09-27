import React, { Component } from 'react'

import styles from './Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className={"container-fluid " + styles.container}>
                <div className={"row justify-content-center align-items-center " + styles.content}>
                    <div className="col-md-2 col-sm-12 col-12 text-center">
                		<nav className="navbar navbar-inverse">
                			<a className="navbar-brand" href="/">HybridiSpeksi</a>
                		</nav>
                	</div>
                	<div className="col-md-1 col-sm-2 col-2 text-center">
                		<a href="https://www.facebook.com/HybridiSpeksi/"><img src="assets/images/facebook.svg" className={styles.link}/></a>
                	</div>
                	<div className="col-md-1 col-sm-2 col-2 text-center">
                		<a href="https://www.instagram.com/hybridispeksi/"><img src="assets/images/instagram.svg" className={styles.link}/></a>
                	</div>
                	<div className="col-md-1 col-sm-2 col-2 text-center">
                		<a href="https://www.youtube.com/channel/UCVkhBQHSqKtwC5X7qXe6HSg"><img src="assets/images/youtube.svg" className={styles.link}/></a>
                	</div>
                	<div className="col-md-2 col-sm-12 col-12 text-center">
                		<nav className="navbar navbar-inverse">
                			<span className="navbar-brand">hallitus[ät]hybridispeksi.fi</span>
                		</nav>
                	</div>
                </div>
            </div>
        )
    }
}

export default Footer