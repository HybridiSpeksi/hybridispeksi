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
                  <div className="modal-dialog modal-lg modal-inverse" role="document">
                    <div className="modal-content"> {/* TÄHÄN MUOTOILUT KOKO MODALIIN */}
                      <div className="modal-header">
                        <h5 className="modal-title" id="uusiVarausModalLabel">Lisää uusi varaus</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        
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
                            {this.props.messages}
                        </div>
                      </div>
                      <div className="modal-footer">
                        { this.props.ilmottu ? <button disabled type="button" className="btn btn-dark" onClick={this.props.handleSubmit}>Siirry maksamaan</button> : <button type="button" className="btn btn-dark" onClick={this.props.handleSubmit}>Siirry maksamaan</button>}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}


export default UusiVaraus