import React, { Component } from 'react';
import Moment from 'react-moment';
import { Text } from '../../Utils/Form'

class Jasentiedot extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h1>Jäsentiedot</h1>
                        <h3>{this.props.jasen.fname} {this.props.jasen.sname}</h3>
                    </div>
                    <div className="col text-right">
                        <button onClick={() => this.props.valitseJasen({})} className="btn btn-default">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Text
                            id="email-input"
                            name="email"
                            type="email"
                            onChange={this.props.handleChange}
                            value={this.props.jasen.email}
                            placeholder="Sähköposti"
                            label="Sähköposti" />

                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <button onClick={this.props.tallennaTiedot} className="btn btn-primary">Tallenna tiedot</button>
                        {!this.props.jasen.approved ? (
                            <button onClick={this.props.hyvaksyJasen} className="btn btn-primary">Hyväksy jäseneksi</button>
                        ) : (
                                <p>Hyväksytty jäseneksi <Moment format="DD.MM.YYYY">{this.props.jasen.approveDate}</Moment></p>
                            )}

                    </div>
                </div>
            </div>
        );
    }
}

export default Jasentiedot;