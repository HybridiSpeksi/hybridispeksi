import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import styles from './Footer.css';

class Footer extends Component {
	addEmail(){
		return (
			<a href="mailto:hallitus@hybridispeksi.fi" className="navbar-brand">hallitus@hybridispeksi.fi</a>
		)
	}

    render () {
        return (
            <div className={"container-fluid " + styles.container}>
                <div className={"row justify-content-center align-items-center " + styles.content}>
                    <div className="col-lg-2 col-md-12 col-12 text-center">
                		<nav className="navbar navbar-inverse">
                			<Link className="navbar-brand" to="/">HybridiSpeksi</Link>
                		</nav>
                	</div>
                	<div className="col-lg-1 col-md-2 col-2 text-center">
                		<a href="https://www.facebook.com/HybridiSpeksi/"><img src="assets/images/facebook.svg" className={styles.link}/></a>
                	</div>
                	<div className="col-lg-1 col-md-2 col-2 text-center">
                		<a href="https://www.instagram.com/hybridispeksi/"><img src="assets/images/instagram.svg" className={styles.link}/></a>
                	</div>
                	<div className="col-lg-1 col-md-2 col-2 text-center">
                		<a href="https://www.youtube.com/channel/UCVkhBQHSqKtwC5X7qXe6HSg"><img src="assets/images/youtube.svg" className={styles.link}/></a>
                	</div>
                	<div className="col-lg-2 col-md-12 col-12 text-center">
                		<nav className="navbar navbar-inverse">
                			{this.addEmail()}
                		</nav>
                	</div>
                </div>
            </div>
        )
    }
}

export default Footer