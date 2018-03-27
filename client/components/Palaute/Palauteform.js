import React, { Component } from 'react'

import styles from './Palaute.css';

class Palauteform extends Component {
    render() {
        return (
            <div className={"container-fluid " + styles.container}>
                <div className={"row justify-content-center " + styles.banner}>
            		<div className={"col-sm-11 col-md-9 col-lg-6 " + styles.form_canvas}>
                        <h2>HybridiSpeksi 2018 - Älä Ammu Ohi</h2>
                        <h3>Palautelomake</h3>
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

                        <div className={"row form-group align-items-center " + styles.name}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="nameInput" className={styles.label}>Nimi:</label>
                            </div>
                            <div className={"col"}>
                                <input name="name" id="nameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.name} placeholder="Nimi"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.email}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="emailInput" className={styles.label}>Sähköposti:</label>
                            </div>
                            <div className={"col"}>
                                <input name="email" id="emailInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.email} placeholder="Sähköposti"/>
                            </div>
                        </div>
                        <div className={"row form-group align-items-center " + styles.feedback}>
                            <div className={"col-sm-4"}>
                                <label htmlFor="feedbackInput" className={styles.label}>Palaute:<span className={styles.tahti}>*</span></label>
                            </div>
                            <div className={"col"}>
                                <textarea rows="4" name="feedback" id="feedbackInput" className="form-control" onChange={this.props.handleChange} value={this.props.feedback}></textarea>  
                            </div>
                        </div>
                        <div className={"row form-group align-items-center justify-content-center " + styles.submit}>
                            <div className={"col-sm-5 d-flex justify-content-center text-center"}>
                                {this.props.lahetetty ? <p><i>Palaute lähetetty!</i></p> : <button className="btn btn-default" type="submit">Lähetä</button>}
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

export default Palauteform