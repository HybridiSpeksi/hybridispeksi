import React, { Component } from 'react';
import VarausForm from './VarausForm';

class MuokkaaVarausta extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <div className="modal fade" id="muokkaaVaraustaModal" tabIndex="-1" role="dialog" aria-labelledby="muokkaaVaraustaModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="muokkaaVaraustaModalLabel">Muokkaa varausta</h5>
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
                            esitykset={this.props.esitykset} 
                            valittuVarausId={this.props.valittuVarausId}/>

                        <div className="row justify-content-center">
                            {this.props.messages}
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={this.props.emptyFields}>Nollaa kentät</button>
                        { this.props.ilmottu ? <button disabled type="button" className="btn btn-dark" onClick={this.props.handleUpdate}>Tallenna muutokset</button> : <button type="button" className="btn btn-dark" onClick={this.props.handleUpdate}>Tallenna muutokset</button>}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}


export default MuokkaaVarausta