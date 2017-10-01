import React, { Component } from 'react'

import auth from '../../Utils/Auth';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';
import utils from '../../Utils/Utils'

import ProduktionjasenLista from './ProduktionjasenLista';
import Jasentiedot from './Jasentiedot';
import Haku from './Haku';
import Sahkopostit from './Sahkopostit';

import css from './Produktionjasenet.css';

class Produktio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            warnings: [],
            errors: [],

            ajaxReady: false,
            naytaSahkopostit: false,

            tehtavat: [],
            produktionjasenet: [],
            produktionjasenetFiltered: [],
            haku: {
                pikahaku: "",
                fname: "",
                sname: "",
                email: "",
                tehtava: ""
            },
            valittuJasen: {
                fname: "",
                sname: "",
                email: "",
                pnumber: "",
                tehtavat: [],
                tuotannonMuistiinpanot: ""
            }
        }
        this.valitseJasen = this.valitseJasen.bind(this);
        this.handleJasenChange = this.handleJasenChange.bind(this);
        this.handleHaku = this.handleHaku.bind(this);
        this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
        this.poistaTehtava = this.poistaTehtava.bind(this);
    }

    componentWillMount() {
        auth.checkToken();
    }

    componentDidMount() {
        ajax.sendGet('/admin/produktionjasen/2018')
            .then(jasenet => {
                this.setState({ produktionjasenet: jasenet });
                this.setState({ produktionjasenetFiltered: jasenet })
                this.setState({ ajaxReady: true });
            })
            .catch(err => {
                console.log(err);
                this.setState({ errors: [{ header: "Palvelinvirhe!", text: "Virhe haettaessa produktionjäseniä palvelimelta" }] })
            })
        ajax.sendGet('/tehtavat')
            .then(t => {
                console.log(t)
                this.setState({ tehtavat: t.data })
            })
            .catch(err => {
                console.log(err);
            })
    }

    valitseJasen(jasen) {
        if (!jasen) {
            jasen = {
                email: "",
                pnumber: "",
                tehtavat: [""]
            }
        }
        let uusiJasen = JSON.parse(JSON.stringify(jasen));
        this.setState({ valittuJasen: uusiJasen });
    }

    handleHaku(e) {
        // console.log(e.target);
        let _haku = this.state.haku;
        _haku[e.target.name] = e.target.value;
        this.setState({ haku: _haku })

        let filtered = Object.assign([], this.state.produktionjasenet)
        if (_haku.pikahaku !== "" || _haku.fname !== "" || _haku.email !== "" || _haku.tehtava !== "") {


            // let toFilter = Object.assign([], this.state.produktionjasenet)
            filtered = filtered.filter((jasen) => {
                let bool = false;
                if (_haku.pikahaku !== "") {
                    let l = _haku.pikahaku.toLowerCase()
                    if (
                        jasen.fname.toLowerCase().indexOf(l) !== -1
                        || jasen.sname.toLowerCase().indexOf(l) !== -1
                        || jasen.email.toLowerCase().indexOf(l) !== -1
                        || jasen.tehtavat.indexOf(l) !== -1
                    ) {
                        bool = true;
                    }
                } else if (_haku.fname !== "") {
                    bool = true
                } else if (_haku.sname !== "") {

                } else if (_haku.email !== "") {

                } else if (_haku.tehtava !== "") {

                }
                return bool;
            })
        }
        this.setState({ produktionjasenetFiltered: filtered });
    }

    toggleSahkopostit() {
        this.setState({naytaSahkopostit: !this.state.naytaSahkopostit})
    }

    poistaTehtava(i) {
        let jasen = this.state.valittuJasen;
        jasen.tehtavat.splice(i, 1);
        this.setState({valittuJasen: jasen})
    }

    handleJasenChange(e) {
        let jasen = this.state.valittuJasen;
        if (e.target.name === "tehtavat") {
            let idNumber = utils.parseNumberIfNumber(e.target.id)
            console.log(idNumber)
            jasen.tehtavat[idNumber] = e.target.value;
        } else {
            jasen[e.target.name] = e.target.value;
        }
        console.log(jasen)
        this.setState({ valittuJasen: jasen })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Produktion jäsenten hallinta <small>{this.state.produktionjasenet.length} hlö</small></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-7 col-xs-12">
                        {this.state.ajaxReady ? (
                            <ProduktionjasenLista
                                jasenet={this.state.produktionjasenetFiltered}
                                valitseJasen={this.valitseJasen} />
                        ) : (
                                <div><h4>Ladataan...</h4></div>
                            )}
                    </div>
                    <div className="col">
                        <Haku
                            handleChange={this.handleHaku}
                            haku={this.state.haku} />
                        {this.state.valittuJasen.fname ? (
                            <Jasentiedot
                                jasen={this.state.valittuJasen}
                                valitseJasen={this.valitseJasen}
                                handleChange={this.handleJasenChange}
                                tehtavat={this.state.tehtavat}
                                poistaTehtava={this.poistaTehtava} />
                        ) : ("")}

                        {this.state.naytaSahkopostit ? (
                            <Sahkopostit 
                                jasenet={this.state.produktionjasenetFiltered}
                                toggleSahkopostit={this.toggleSahkopostit} />
                                
                        ): (
                            <button 
                                className="btn btn-default"
                                onClick={this.toggleSahkopostit}>Näytä sähköpostit</button>
                        )}

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Messages messages={this.state.messages} warnings={this.state.warnings} errors={this.state.errors} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Produktio