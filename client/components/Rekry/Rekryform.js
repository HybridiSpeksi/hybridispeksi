import React, { Component } from 'react'

import styles from './Rekry.css';

class Rekry extends Component {
    render() {
        let tehtavatOptions = this.props.kaikkiTehtavat.map((tehtava, i) => {
            if( tehtava.value !== "hallitus" ) {
                return (
                    <option key={i} value={tehtava.value}>
                        {tehtava.name}
                    </option>
                )
            }
        })
        let jarjestoOptions = this.props.kaikkiJarjestot.map((jarjesto, i) => {
            return (
                <option key={i} value={jarjesto.value}>
                    {jarjesto.name}
                </option>
            )
        })

        return (
            <div className={"container-fluid " + styles.container}>

                <div className={"row " + styles.banner}></div>

            	<div className={"row justify-content-sm-center " + styles.content}>
            		<div className={"col-sm-6 " + styles.form_canvas}>
                        <h2>Rekryilmoittautuminen</h2>
                        <br/>
                        <p>Täytä tietosi allaoleviin kenttiin. Tähdellä merkityt kentät ovat pakollisia. Haettaviin tehtäviin pitää 
                        täyttää vähintään ensisijainen hakutoive. Lisätietoja-kenttään voit täyttää omia taustojasi,
                        jotka tukevat hakutoiveitasi.</p>
                        <br/>
                        <form onSubmit={this.props.handleSubmit}>

                        <div className={"row form-group align-items-center " + styles.fname}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="fnameInput" className={styles.label}>Etunimi:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <input name="fname" id="fnameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.fname} placeholder="Etunimi"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.sname}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="snameInput" className={styles.label}>Sukunimi:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <input name="sname" id="snameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.sname} placeholder="Sukunimi"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.email}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="emailInput" className={styles.label}>Sähköposti:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <input name="email" id="emailInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.email} placeholder="Sähköposti"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.pnumber}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="pnumberInput" className={styles.label}>Puhelinnumero:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <input name="pnumber" id="pnumberInput" className="form-control" type="tel" onChange={this.props.handleChange} value={this.props.pnumber} placeholder="Puhelinnumero"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.tehtavat}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="tehtavatInput" className={styles.label}>Ensisijainen tehtävä:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <select name="tehtavat1" id="tehtavatInput" className="form-control" onChange={this.props.handleTehtavaChange} value={this.props.tehtavat1}>
                                    <option value=""></option>
                                    {tehtavatOptions}
                                </select>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.tehtavat}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="tehtavatInput" className={styles.label}>Ensimmäinen varatehtävä:</label>
                            </div>
                            <div className={"col"}>
                                <select name="tehtavat2" id="tehtavatInput" className="form-control" onChange={this.props.handleTehtavaChange} value={this.props.tehtavat2}>
                                    <option value=""></option>
                                    {tehtavatOptions}
                                </select>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.tehtavat}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="tehtavatInput" className={styles.label}>Toinen varatehtävä:</label>
                            </div>
                            <div className={"col"}>
                                <select name="tehtavat3" id="tehtavatInput" className="form-control" onChange={this.props.handleTehtavaChange} value={this.props.tehtavat3}>
                                    <option value=""></option>
                                    {tehtavatOptions}
                                </select>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.jarjesto}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="jarjestoInput" className={styles.label}>Järjestö:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <select name="jarjesto" id="jarjestoInput" className="form-control" onChange={this.props.handleChange} value={this.props.jarjesto}>
                                    <option value=""></option>
                                    {jarjestoOptions}
                                </select>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.lisatiedot}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="lisatiedotInput" className={styles.label}>Lisätietoja:</label>
                            </div>
                            <div className={"col"}>
                                <textarea name="lisatiedot" id="lisatiedotInput" className="form-control" onChange={this.props.handleChange} value={this.props.lisatiedot}></textarea>  
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.jasen}>
                            <div className={"col-sm-7"}>
                                <label htmlFor="jasenInput" className={styles.label}>Haluan liittyä HybridiSpeksi ry:n jäseneksi:</label>
                            </div>
                            <div className={"col-sm-4 form-check form-check-inline"}>
                                <input checked={this.props.jasenyys === "true"} className={styles.jasenradio} type="radio" name="jasenyys" value="true" onChange={this.props.handleChange}/> Kyllä 
                                <input checked={this.props.jasenyys === "false"} className={styles.jasenradio} type="radio" name="jasenyys" value="false" onChange={this.props.handleChange}/> Ei
                            </div>
                        </div>
                        <div className={"row form-group align-items-center justify-content-sm-center " + styles.submit}>
                            <div className={"col-sm-3"}>
                                <button className="btn btn-default" type="submit">Lähetä hakemus</button>
                                <p><i>Rekry ei ole vielä auki!</i></p>
                            </div>
                        </div>

                        </form>
                        <div className="row justify-content-center">
                            <div className="col-sm-7">
                                {this.props.messages}
                            </div>
                        </div>

            		</div>

            	</div>
            </div>
        )
    }
}

export default Rekry