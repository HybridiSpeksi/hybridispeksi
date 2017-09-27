import React, { Component } from 'react'

import auth from '../../Utils/Auth';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';
import utils from '../../Utils/Utils'

import ProduktionjasenLista from './ProduktionjasenLista';
import Jasentiedot from './Jasentiedot';

import css from './Produktionjasenet.css';

class Produktio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            warnings: [],
            errors: [],

            ajaxReady: false,

            produktionjasenet: [],
            valittuJasen: {
                fname: ""
            }
        }
        this.valitseJasen = this.valitseJasen.bind(this);
        this.handleJasenChange = this.handleJasenChange.bind(this);
    }

    componentWillMount() {
        auth.checkToken();
    }

    componentDidMount() {
        ajax.sendGet('/admin/produktionjasen/2018')
            .then(jasenet => {
                this.setState({produktionjasenet: jasenet});
                this.setState({ajaxReady: true});
            })
            .catch(err => {
                console.log(err);
                this.setState({errors: [{header: "Palvelinvirhe!", text: "Virhe haettaessa produktionjäseniä palvelimelta"}]})
            })
    }

    valitseJasen(jasen) {
        this.setState({valittuJasen: jasen});
    }

    handleJasenChange(e) {
        let jasen = this.state.valittuJasen;
        // jasen[e.target.name] = e.target.value;

        // this.setState({ warnings: [] })
        let value = e.target.value;

        console.log(e.target);
        // Check if numeric value and parse
        value = utils.parseNumberIfNumber(value);

        this.setState({ [e.target.name]: value });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Produktion jäsenten hallinta</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-7 col-xs-12">
                        {this.state.ajaxReady ? (
                            <ProduktionjasenLista 
                                jasenet={this.state.produktionjasenet}
                                valitseJasen={this.valitseJasen} />
                        ) : (
                            <div><h4>Ladataan...</h4></div>
                        )}
                    </div>
                    <div className="col">
                        <h3>Haku</h3>
                        <Jasentiedot 
                            jasen={this.state.valittuJasen}
                            valitseJasen={this.valitseJasen}
                            handleChange={this.handleJasenChange} />
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