import React, { Component } from 'react'

import styles from './Rekry.css';

class Kiitos extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className={"container-fluid " + styles.container}>
                <div className={"row " + styles.banner}></div>

            	<div className={"row justify-content-sm-center " + styles.content}>
            		<div className={"col-sm-6 text-center justify-content-center " + styles.form_canvas}>
            			<img src="/assets/images/rekrykiitos.jpg" className={"img-fluid " + styles.kiitoskuva}/>
            			<br/>
            			<h1>Kiitos ilmoittautumisesta!</h1><br/> <h3>Otamme yhteyttä HybridiSpeksiin 2018 valittuihin lähitulevaisuudessa!</h3>
            		</div>
            	</div>
            </div>
        )
    }
}

export default Kiitos