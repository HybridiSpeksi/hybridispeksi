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
                        <h2>Sitsi-ilmoittautuminen</h2>
                        <br/>
                        <p>Täytä tietosi allaoleviin kenttiin. Tähdellä merkityt kentät ovat pakollisia.</p>
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
                                {this.props.sitsitAuki ? this.props.ilmottu ? <p><i>Olet jo ilmoittautunut tapahtumaan.</i></p> : <button className="btn btn-default" type="submit">Lähetä ilmoittautuminen</button> : <p><i>Ilmoittautuminen on suljettu!</i></p>}
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
                            <div className="col-sm-2 col-2 text-left">
                              <p><strong>Etunimi:</strong></p>
                            </div>
                            <div className="col-sm-3 col-3 text-left">
                              <p><strong>Sukunimi:</strong></p>
                            </div>
                            <div className="col-sm-3 col-3 text-left">
                              <p><strong>Järjestö</strong>:</p>
                            </div>
                            <div className="col-sm-3 col-3 text-left">
                              <p><strong>Alter ego</strong>:</p>
                            </div>
                        </div>
                        <Ilmonneet/>

            		</div>

            	</div>
            </div>
        )
    }
}

export default Sitsit