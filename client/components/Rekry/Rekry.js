import React, { Component } from 'react'

import styles from './Rekry.css';

class Rekry extends Component {
    render () {
        return (
            <div className={"container-fluid " + styles.container}>
                <div className={"row " + styles.banner}>
                    bannerikuva
                </div>

            	<div className={"row justify-content-sm-center " + styles.content}>
            		<div className={"col-sm-6 " + styles.form_canvas}>
                        <h2>Rekryilmoittautuminen</h2>
                        <br/>
                        <form>

                        <div className={"row form-group " + styles.fname}>
                            <div className={"col-sm-3"}>
                                <label for="fname" className={styles.label}>Etunimi:</label>
                            </div>
                            <div className={"col"}>
                                <input className="form-control" type="text" placeholder="Etunimi"/>
                            </div>
                        </div>
                        <div className={"row form-group " + styles.lname}>
                            <div className={"col-sm-3"}>
                                <label for="lname" className={styles.label}>Sukunimi:</label>
                            </div>
                            <div className={"col"}>
                                <input className="form-control" type="text" placeholder="Sukunimi"/>
                            </div>
                        </div>
                        <div className={"row form-group " + styles.email}>
                            <div className={"col-sm-3"}>
                                <label for="email" className={styles.label}>Sähköposti:</label>
                            </div>
                            <div className={"col"}>
                                <input className="form-control" type="email" placeholder="Sähköposti"/>
                            </div>
                        </div>
                        <div className={"row form-group " + styles.pnumber}>
                            <div className={"col-sm-3"}>
                                <label for="pnumber" className={styles.label}>Puhelinnumero:</label>
                            </div>
                            <div className={"col"}>
                                <input className="form-control" type="number" placeholder="Puhelinnumero"/>
                            </div>
                        </div>
                        <div className={"row form-group " + styles.tehtavat}>
                            <div className={"col-sm-3"}>
                                <label for="tehtavat" className={styles.label}>Tehtävät:</label>
                            </div>
                            <div className={"col"}>
                                <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className={"row form-group " + styles.jarjesto}>
                            <div className={"col-sm-3"}>
                                <label for="jarjesto" className={styles.label}>Järjestö:</label>
                            </div>
                            <div className={"col"}>
                                <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className={"row form-group " + styles.lisatiedot}>
                            <div className={"col-sm-3"}>
                                <label for="lisatiedot" className={styles.label}>Lisätietoja:</label>
                            </div>
                            <div className={"col"}>
                                <textarea className="form-control"></textarea>  
                            </div>
                        </div>

                        </form>

            		</div>
            	</div>
            </div>
        )
    }
}

export default Rekry