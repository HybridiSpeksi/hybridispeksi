import React, { Component } from 'react'

import auth from '../../Utils/Auth';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';

import ProduktionjasenLista from './ProduktionjasenLista';

import css from './Produktionjasenet.css';

class Produktio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            warnings: [],
            errors: [],

            ajaxReady: false,

            produktionjasenet: []
        }
    }

    componentWillMount() {
        auth.checkToken();
    }

    componentDidMount() {
        ajax.sendGet('/admin/produktionjasen/2017')
            .then(jasenet => {
                this.setState({produktionjasenet: jasenet});
                this.setState({ajaxReady: true});
            })
            .catch(err => {
                console.log(err);
                this.setState({errors: [{header: "Palvelinvirhe!", text: "Virhe haettaessa produktionjäseniä palvelimelta"}]})
            })
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
                            <ProduktionjasenLista jasenet={this.state.produktionjasenet} />
                        ) : (
                            <div><h4>Ladataan...</h4></div>
                        )}
                    </div>
                    <div className="col">
                        <h3>Haku</h3>
                        <h3>Jäsentiedot</h3>
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