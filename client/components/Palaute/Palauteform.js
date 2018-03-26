import React, { Component } from 'react'

import styles from './Palaute.css';

class Palauteform extends Component {
    render() {
        return (
            <div className={"container-fluid " + styles.container}>

                <div className={"row " + styles.banner}></div>

            	<div className={"row justify-content-sm-center " + styles.content}>
            		<div className={"col-sm-6 " + styles.form_canvas}>
                        <h2>Palaute</h2>
                        <br/>
                        <p><i>Täytä alla olevat kentät. Tähdellä merkityt kentät ovat pakollisia.</i></p>
                        <br/>
                        <p>Mikä meni hyvin, mikä huonosti? Olivatko laulut hyviä vai olisiko Sinulla ollut parannusehdotuksia?
                        Oliko bändissä tarpeeksi monta eri soitinta ja olivatko lavasteet ja puvusteet kohdallaan?
                        </p>
                        <p>Kerro meille risut ja ruusut, jotta voimme parantaa produktiota vieläkin paremmaksi ensi vuonna!
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
                                    <option value="LEX SPEX">LEX SPEX</option>
                                    <option value="TLKS SPEKSI">TLKS SPEKSI</option>
                                    <option value="TuKY-Speksi">TuKY-Speksi</option>
                                    <option value="Akademiska Spexet vid Åbo Akademi R.F.">Akademiska Spexet vid Åbo Akademi R.F.</option>
                                    <option value="Turkulainen Humanistispeksi">Turkulainen Humanistispeksi</option>
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
                        <div className="row">
                            <div className="col-sm-4 col-7">
                                <strong>HybridiSpeksiläisiä:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.hsCount}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-7">
                                <strong>I/O-speksiläisiä:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.ioCount}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-7">
                                <strong>LEX SPEXiläisiä:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.lexCount}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-7">
                                <strong>TLKS SPEKSIläisiä:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.tlksCount}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-7">
                                <strong>TuKY-Speksiläisiä:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.tukyCount}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-7">
                                <strong>Akademiska Spexet:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.spexetCount}</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-7">
                                <strong>Humanistispeksiläisiä:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.humanistiCount}</strong>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-4 col-7">
                                <strong>YHTEENSÄ:</strong>
                            </div>
                            <div className="col">
                                <strong>{this.props.hsCount + this.props.ioCount + this.props.lexCount + this.props.tlksCount + this.props.tukyCount + this.props.spexetCount + this.props.humanistiCount}</strong>
                            </div>
                        </div>
            		</div>

            	</div>
            </div>
        )
    }
}

export default Palauteform