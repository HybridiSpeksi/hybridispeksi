import React, { Component } from 'react'
import {Text, Dropdown } from '../../Utils/Form';

class Jasentiedot extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.jasen.fname} {this.props.jasen.sname}</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <Text
                            value={this.props.jasen.fname}
                            name="valittuJasen.fname"
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="Etunimi"
                            id="fname-input"
                            autofocus="false"
                            />
                    </div>
                </div>
                {this.props.jasen.email ? <button className="btn btn-warning" onClick={() => this.props.valitseJasen({})}>Tyhjennä valinta</button> : ""}
            </div>
        )
    }
}

export default Jasentiedot