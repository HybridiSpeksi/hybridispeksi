import React, { Component } from 'react';
import VarausForm from './VarausForm';

class UusiVaraus extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Varaus</h5>
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
                            phone={this.props.phone} 
                            ticketsN={this.props.ticketsN}
                            ticketsS={this.props.ticketsS}
                            ticketsO={this.props.ticketsO}
                            price={this.props.price}
                            lisatiedot={this.props.lisatiedot}
                            valittuEsitys={this.props.valittuEsitys} />

                      </div>
                      <div className="modal-footer">
                      {/*  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                        <button type="button" className="btn btn-secondary" onClick={this.props.emptyFields}>Nollaa kentät</button>
                        <button type="button" className="btn btn-dark" onClick={this.props.handleSubmit}>Tallenna muutokset</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}


export default UusiVaraus