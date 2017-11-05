import React, { Component } from 'react'

import styles from './Sitsit.css';

import Ilmonneet from './Ilmonneet';

class Sitsit extends Component {
    render() {
        return (
            <div className={"container-fluid " + styles.container}>

                <div className={"row " + styles.banner}></div>

            	<div className={"row justify-content-sm-center " + styles.content}>
            		<div className={"col-sm-6 " + styles.form_canvas}>
                        <h2>Fantasiasitsi-ilmoittautuminen</h2>
                        <br/>
                        <p>Täytä tietosi allaoleviin kenttiin. Tähdellä merkityt kentät ovat pakollisia.</p>
                        <br/>
                        <p>NO KYLLÄ! Kesästä asti Hybridin ja I/O:n virkkareiden mielten perukoilla vaalittu ja varjeltu aate on vihdoin
                        saanut ruumiillistumansa. Nyt sitsataan!</p>
                        <p>Fantasiasitseillä Sormusten herran, Game of Thronesin, Narnian, Jodelin fantasiat- kanavan ja muiden
                        maailmat ovat ovat ajautuneet törmäyskurssille, ja menneet iloisesti keskenään sekaisin kuin I/O ja Hybridi
                        konsanaan. Olitpa sitten Westerosin tai Keskimaan asukki, hybridiläinen tai I/O:lainen, niin olet lämpimästi
                        tervetullut larppaamaan tähän tilaisuuteen.</p>
                        <p>Sitseille ilmoittautuminen aukeaa 6.11 klo 14.00, jolloin 60 nopeinta hybridiläistä ja 60 speedointa
                        I/O:laista pääsee näpyttelemään itsensä mukaan. Sitsien hinta on vaivaiset 8 euroa holillisesta lipusta, ja 6
                        euroa holittomasta. Maksuohjeet pamahtavat myös tapahtumaan ennen ilmoittautumispäivämäärää.
                        Sitsilipun hintaan kuuluu alkuruuan ja jälkiruuan lisäksi ruokajuoma, shotti sekä
                        tietenkin punssi, mutta kustannusten minimoimiseksi ja speksin vegaanipitoisuuden takia toivomme teidän
                        tuovan oman pääruokanne mukananne sitseille.</p>
                        <p>
                        MITÄ: I/O-Speksin ja HybridiSpeksin Fantasiasitsit<br/>
                        MISSÄ: Q-talo all night long<br/>
                        MILLOIN: 5.12. klo 18 leipä eipä<br/>
                        MITÄ MAKSAA: 8 e/holi ja 6 e/epäholi<br/>
                        MIKSI: Koska larppaus, Hybridi ja I/O Ja Jodelin fantasiat-kanava
                        </p>
                        <br/>
                        <form onSubmit={this.props.handleSubmit}>

                        <div className={"row form-group align-items-center " + styles.fname}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="fnameInput" className={styles.label}>Etunimi:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <input name="fname" id="fnameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.fname} placeholder="Etunimi"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.sname}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="snameInput" className={styles.label}>Sukunimi:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <input name="sname" id="snameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.sname} placeholder="Sukunimi"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.email}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="emailInput" className={styles.label}>Sähköposti:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <input name="email" id="emailInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.email} placeholder="Sähköposti"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.jarjesto}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="jarjestoInput" className={styles.label}>Järjestö:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <select name="jarjesto" id="jarjestoInput" className="form-control" onChange={this.props.handleChange} value={this.props.jarjesto}>
                                    <option value=""></option>
                                    <option value="HybridiSpeksi">HybridiSpeksi</option>
                                    <option value="I/O-speksi">I/O-speksi</option>
                                </select>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center "}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="holillisuusInput" className={styles.label}>Holillisuus:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col-sm-8 form-check form-check-inline"}>
                                <input checked={this.props.holillisuus === "true"} className={styles.jasenradio} type="radio" name="holillisuus" value="true" onChange={this.props.handleChange}/> Holillinen 
                                <input checked={this.props.holillisuus === "false"} className={styles.jasenradio} type="radio" name="holillisuus" value="false" onChange={this.props.handleChange}/> Holiton
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.lisatiedot}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="lisatiedotInput" className={styles.label}>Allergiat:</label>
                            </div>
                            <div className={"col"}>
                                <textarea rows="2" name="lisatiedot" id="lisatiedotInput" className="form-control" onChange={this.props.handleChange} value={this.props.lisatiedot}></textarea>  
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.alterego}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="alteregoInput" className={styles.label}>Fantasia- alter ego:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <input name="alterego" id="alteregoeInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.alterego} placeholder="Alter ego"/>
                            </div>
                        </div>

                        <div className={"row form-group align-items-center justify-content-center " + styles.submit}>
                            <div className={"col-sm-5 d-flex justify-content-center text-center"}>
                                {this.props.sitsitAuki ? this.props.ilmottu ? <p><i>Olet ilmoittautunut tapahtumaan.</i></p> : <button className="btn btn-default" type="submit">Ilmoittaudu</button> : <p><i>Ilmoittautuminen on suljettu!</i></p>}
                                {/* <button className="btn btn-default" type="submit">Lähetä hakemus</button> */}
                            </div>
                        </div>

                        </form>
                        <div className="row justify-content-center">
                            <div className="col-sm-7">
                                {this.props.messages}
                            </div>
                        </div>
                        <br/>
                        <Ilmonneet
                            ilmonneet={this.props.ilmonneet}/>
                        <div className="row">
                            <div className="col-sm-4">
                                <strong>HybridiSpeksiläisiä:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.hsCount}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <strong>I/O-speksiläisiä:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.ioCount}</strong>
                            </div>
                        </div>
            		</div>

            	</div>
            </div>
        )
    }
}

export default Sitsit