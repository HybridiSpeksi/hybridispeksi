import React, { Component } from 'react'

import ajax from '../../Utils/Ajax';

import List from './List';
import Ohjaustieto from './Ohjaustieto'

class Ohjaustiedot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valittuOhjaustieto: {
                key: "",
                value: "",
                name: ""
            },
            ohjaustiedot: []
        }

        this.teeHaut = this.teeHaut.bind(this);
        this.valitseOhjaustieto = this.valitseOhjaustieto.bind(this);
    }

    componentDidMount() {
        this.teeHaut();
    }

    valitseOhjaustieto(o) {
        let _o = JSON.parse(JSON.stringify(o));
        this.setState({valittuOhjaustieto: _o});
    }

    handleChange(e) {
        let _o = this.state.valittuOhjaustieto;
        _o[e.target.name] = e.target.value;
        this.setState({valittuOhjaustieto: _o});
    }

    teeHaut() {
        ajax.sendGet('/admin/w/ohjaustieto')
            .then(_data => {
                this.setState({ ohjaustiedot: _data.data })
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Ohjaustiedot {this.state.ohjaustiedot.length}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <List 
                            ohjaustiedot={this.state.ohjaustiedot}
                            valitseOhjaustieto={this.valitseOhjaustieto} />
                    </div>

                    <div className="col">
                        <Ohjaustieto 
                            ohjaustieto={this.state.valittuOhjaustieto}
                            handleChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Ohjaustiedot