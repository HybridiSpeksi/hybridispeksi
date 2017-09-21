import React, { Component } from 'react'

import styles from './Speksi.css'

class Speksi extends Component {
	componentDidMount() {

	}
    render() {
        return (
            <div className={"container-fluid " + styles.container}>
            	<div className={"row align-items-end " + styles.content}>
            	    <div className={"col"}>
                		<img className={styles.mainimage} src=""></img>
                	</div>
            		<div className={"col " + styles.desc}>
                		<h1>Mikä ihmeen Speksi?</h1>
                		<p> Speksi on interaktiivista musiikki- ja tanssinumeroilla höystettyä opiskelijateatteria.
                        Speksit ovat juurtuneet osaksi korkeakoulujen kulttuuritarjontaa.</p>

                        <h3>Omstart!</h3>
						<p>Speksissä yleisö voi ottaa osaa esitykseen huutamalla lavalle "Omstart!". 
                        Tämän lisäksi on mahdollista huutaa varsinaisen omstart-huudon 
                        perään tarkentavia ideoita siitä, mitä haluaisi näyttämöllä tapahtuvan, 
                        esimerkiksi "Omstart, enemmän naurua!". Tällöin speksin interaktiivista 
                        traditiota kunnioittava speksiteatteri reagoi huutoon ottamalla äskeiset tapahtumat 
                        uudestaan niitä jotenkin varioiden, tarkempien ideoiden tapauksessa uusia ideoita 
                        mahdollisuuksien mukaan toteuttaen. Jotta katsoja saa haluamansa ja esiintyjät voivat 
                        huomioida hänen toiveensa, tulee omstart-huudon olla selkeä, lyhyt ja ytimekäs. Lisäksi 
                        näyttelijöiden repliikkien päälle menevä huuto ei todennäköisesti tule huomioiduksi.</p>
                        <p>Omstart-huudon tulisi olla jotakin toteuttamiskelpoista ja vain kerran huudettua. 
                        Hyvää tai huonoa omstartia ei voida määritellä, vaan kyse on mielipiteistä. 
                        Eri speksiryhmien innokkuus toteuttaa omstarteja vaihtelee paljon.</p>
                	</div>
                </div>
            </div>
        )
    }
}
export default Speksi