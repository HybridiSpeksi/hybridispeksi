import React, { Component } from 'react'

import ajax from '../../Utils/Ajax';

import List from './List';
import Ohjaustieto from './Ohjaustieto'
import Haku from './Haku'

class Ohjaustiedot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valittuOhjaustieto: {
                key: "",
                value: "",
                name: ""
            },
            haku: {
                key: "",
                value: "",
                name: ""
            },
            ohjaustiedot: [],
            unFiltered: [],
            avaimet: []
        }

        this.tallenna = this.tallenna.bind(this);
        this.poista = this.poista.bind(this);
        this.teeHaut = this.teeHaut.bind(this);
        this.valitseOhjaustieto = this.valitseOhjaustieto.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.lisaaUusi = this.lisaaUusi.bind(this);
        this.handleHaku = this.handleHaku.bind(this);
    }

    componentDidMount() {
        this.teeHaut();
    }

    valitseOhjaustieto(o) {
        let _o = JSON.parse(JSON.stringify(o));
        this.setState({ valittuOhjaustieto: _o });
    }

    handleChange(e) {
        let _o = this.state.valittuOhjaustieto;
        _o[e.target.name] = e.target.value;
        this.setState({ valittuOhjaustieto: _o });
    }

    handleHaku(e) {
        let _ohjaustiedot = this.state.unFiltered;
        let _haku = this.state.haku;
        _haku[e.target.name] = e.target.value;
        this.setState({haku: _haku});
        _ohjaustiedot = this.state.unFiltered.filter((ot) => {
            return ot.key.toLowerCase().indexOf( _haku.key.toLowerCase() ) !== -1
        })
        this.setState({ohjaustiedot: _ohjaustiedot})
    }

    tallenna() {
        ajax.sendPost('/admin/w/ohjaustieto', this.state.valittuOhjaustieto)
            .then(data => {
                console.log("tallennettu");
                this.teeHaut();
            })
            .catch(err => {
                console.log(err)
            })
    }

    poista() {
        ajax.sendDelete('/admin/w/ohjaustieto/' + this.state.valittuOhjaustieto._id)
            .then(data => {
                console.log("poistettu")
                this.valitseOhjaustieto({
                    key: "",
                    value: "",
                    name: ""
                })
                this.teeHaut()
            })
            .catch(err => {
                console.log(err);
            })
    }

    lisaaUusi() {
        ajax.sendPut('/admin/w/ohjaustieto', this.state.valittuOhjaustieto)
            .then(data => {
                console.log("lisätty")
                this.teeHaut();
            })
            .catch(err => {
                console.log(err);
            })
    }

    teeHaut() {
        ajax.sendGet('/admin/w/ohjaustieto')
            .then(_data => {
                this.setState({ ohjaustiedot: _data.data, unFiltered: _data.data })

            })
            .catch(err => {
                console.log(err)
            })
        ajax.sendGet('/admin/w/avaimet')
            .then(_data => {
                _data.data.unshift({key: "", value: "", name: "Avain"})
                this.setState({ avaimet: _data.data })
            })
            .catch(err => {
                console.log(err)
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
                        <div className="row">
                            <div className="col-sm-10">

                            </div>
                            <div className="col text-right">
                                <button onClick={() => this.valitseOhjaustieto({ key: "", value: "", name: "" })} className="btn btn-default">
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <Ohjaustieto
                            ohjaustieto={this.state.valittuOhjaustieto}
                            handleChange={this.handleChange}
                            valitseOhjaustieto={this.valitseOhjaustieto} />
                        <button onClick={this.tallenna} className="btn btn-primary">Tallenna</button>
                        <button onClick={this.lisaaUusi} className="btn btn-primary">Lisää uusi</button>
                        <button onClick={this.poista} className="btn btn-danger">Poista</button>
                        <hr />
                        <Haku
                            avaimet={this.state.avaimet}
                            haku={this.state.haku}
                            handleHaku={this.handleHaku} />

                    </div>
                </div>
            </div>
        )
    }
}

export default Ohjaustiedot