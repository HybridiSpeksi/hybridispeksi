import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VarausForm from './VarausForm';

class UusiVaraus extends Component {
  render() {
    return (
      <div>
        <div className="modal fade" id="uusiVarausModal" tabIndex="-1" role="dialog" aria-labelledby="uusiVarausModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
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
                  oprice={this.props.oprice}
                  price={this.props.price}
                  lisatiedot={this.props.lisatiedot}
                  valittuEsitys={this.props.valittuEsitys}
                  esitykset={this.props.esitykset}
                  paymentMethod={this.props.paymentMethod}
                  paid={this.props.paid}
                  sendemail={this.props.sendemail}
                />

                <div className="row justify-content-center">
                  {this.props.messages}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.props.emptyFields}>Nollaa kentät</button>
                { this.props.ilmottu ? <button disabled type="button" className="btn btn-dark" onClick={this.props.handleSubmit}>Lisää uusi varaus</button> : <button type="button" className="btn btn-dark" onClick={this.props.handleSubmit}>Lisää uusi varaus</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UusiVaraus;

UusiVaraus.propTypes = {
  handleChange: PropTypes.func,
  sendemail: PropTypes.func,
  fname: PropTypes.string,
  sname: PropTypes.string,
  email: PropTypes.string,
  pnumber: PropTypes.string,
  ncount: PropTypes.number,
  scount: PropTypes.number,
  ocount: PropTypes.number,
  oprice: PropTypes.number,
  price: PropTypes.number,
  lisatiedot: PropTypes.string,
  valittuEsitys: PropTypes.object,
  esitykset: PropTypes.array,
  paymentMethod: PropTypes.object,
  paid: PropTypes.bool,
  messages: PropTypes.array,
  emptyFields: PropTypes.func,
  handleSubmit: PropTypes.func,
  ilmottu: PropTypes.bool,
};
