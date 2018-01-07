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
                        <h2>Interspeksuaaliset sitsit</h2>
                        <br/>
                        <p><i>Täytä tietosi alla oleviin kenttiin. Tähdellä merkityt kentät ovat pakollisia.</i></p>
                        <br/>
                        <p>Ketkä ovat tämän vuoden speksien takana? Se selviää, kun kokoonnumme yhteen sitsaamaan! 
                        Uusi vuosi lähtee hyvin käyntiin, kun tammikuussa pääse tutustumaan muihin speksaajiin!</p>
                        <p>Sitsit ovat torstaina 18.1. klo 18:00 Saaristobaarissa ja niiden jälkeen jatketaan 
                        kaikille avoimilla bileillä, joissa TuKY-Speksin bändi esiintyy.</p>
                        <p>Sitsien hinta on 15 € ja se sisältää kolme ruokalajia, kaksi terävää ja yhden miedon. 
                        Halutessaan lisäjuomia saa sitsien aikana tiskiltä tai poleteilla, 
                        joita voi ennen sitsejä ostaa 3 € hintaan.</p>
                        <p>Ilmoittautuminen on maanantaina 8.1. klo 12:00. 
                        Kaikille spekseille on kiintiöity paikkamäärä. 
                        Kiintiöt avataan tiistaina 9.1. klo 12:00.</p>
                        <p>
                        <strong>MITÄ:</strong> Turun speksien yhteiset sitsit<br/>
                        <strong>MISSÄ:</strong> Saaristobaari (Aurakatu 14)<br/>
                        <strong>MILLOIN:</strong> Torstaina 18.1. 18:00<br/>
                        <strong>MIKSI:</strong> Sposka speksaajat spon sparhaita!<br/>
                        <strong>MITÄ MAKSAA:</strong> 15€ (alkoholiton 13 €) sisältää kolme ruokalajia, kaksi terävää ja yhden miedon<br/>
                        <strong>MITEN:</strong> Ilmoittautuminen 8.1. 12:00 <br/>
                        <strong>KENELLE:</strong> Kaikille Turun speksien tekijöille
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
                        <br/>
                        <Ilmonneet
                            ilmonneet={this.props.ilmonneet}/>
            		</div>

            	</div>
            </div>
        )
    }
}

export default Sitsit