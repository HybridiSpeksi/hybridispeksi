import React, { Component } from 'react';
import { Text, Dropdown } from '../../../Utils/Form';

class Kayttaja extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h3>
              {this.props.kayttaja.fname} {this.props.kayttaja.sname}
            </h3>
            <p>{this.props.kayttaja.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Dropdown
              options={this.props.roolit}
              id="roolit-select"
              name="role"
              onChange={this.props.handleChange}
              selected={this.props.kayttaja.role}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={this.props.tallennaMuutokset} className="btn btn-primary">
              Tallenna
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Kayttaja;
