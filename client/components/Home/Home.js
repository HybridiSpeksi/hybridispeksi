import React, { Component } from 'react'

import styles from './Home.css';

class Home extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className={"container-fluid " + styles.container}>
            	<div className={"row align-items-end " + styles.content}>
            		<div className={"col " + styles.slogan}>
                		<h1 className={styles.slogan}>HybridiSpeksin rekrytilaisuus<br/><span className={styles.date}>26.9.</span><br/>@ARC 1, Arcanum</h1>
                	</div>
                	<div className={"col"}>
                		<img className={styles.mainimage} src=""></img>
                	</div>
                </div>
            </div>
        )
    }
}

export default Home