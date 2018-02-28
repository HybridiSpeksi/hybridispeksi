import React, { Component } from 'react';
import VarausForm from './VarausForm';
import styles from './Speksi2018.css';

class UusiVaraus extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div className="modal fade" id="uusiVarausModal" tabIndex="-1" role="dialog" aria-labelledby="uusiVarausModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className={"modal-content " + styles.formContent }> {/* TÄHÄN MUOTOILUT KOKO MODALIIN */}
                      <div className={"modal-header align-items-start justify-content-center " + styles.formHeader }>
                          <div className={"col-5 col-sm-4 justify-content-center " + styles.formLogo}>
                            <h2 className={styles.formLogoText}>HybridiSpeksi 2018</h2> 
                          </div>
                          <div className={"col-sm-9 d-flex justify-content-center align-items-center " + styles.formTitleWrap }>
                            <h5 className={"modal-title " + styles.formTitle} id="uusiVarausModalLabel">HybridiSpeksi 2018 lipunmyynti</h5>
                          </div>
                            <button type="button" className={"close btn btn-inverse " + styles.formClose} data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                      </div>
                      <div className={"modal-body " + styles.formBody}>
                        
                        <VarausForm
                            handleChange={this.props.handleChange} 
                            fname={this.props.fname}
                            sname={this.props.sname}
                            email={this.props.email}
                            pnumber={this.props.pnumber} 
                            ncount={this.props.ncount}
                            scount={this.props.scount}
                            ocount={this.props.ocount}
                            price={this.props.price}
                            lisatiedot={this.props.lisatiedot}
                            valittuEsitys={this.props.valittuEsitys}
                            esitykset={this.props.esitykset} />

                        <div className="row justify-content-center">
                          <div className="col-8 justify-content-center align-items-center">
                            {this.props.messages}
                          </div>
                        </div>
                      </div>
                      <div className={"modal-footer justify-content-center " + styles.formBorder }>
                        <div className="col-sm-11 d-flex justify-content-end">
                          <button type="button" className={"btn btn-dark " + styles.formButton + ' ' + styles.formButtonClose} data-dismiss="modal" aria-label="Close">Sulje ikkuna</button>
                            { this.props.ilmottu ? <button disabled type="button" className={"btn btn-dark " + styles.formButton} onClick={this.props.handleSubmit}>Siirry maksamaan</button> : <button type="button" className={"btn btn-dark " + styles.formButton} onClick={this.props.handleSubmit}>Siirry maksamaan</button>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}


export default UusiVaraus