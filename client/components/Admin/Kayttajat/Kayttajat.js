import React, { Component } from 'react'

import auth from '../../Utils/Auth';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';
// import utils from '../../Utils/Utils'

import Kayttajalista from './Kayttajalista';
import Kayttaja from './Kayttaja';

class Kayttajat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            warnings: [],
            errors: [],
            roolit: [
                {value: 0, name: "Ei hyväksytty"},
                {value: 1, name: "Lipunmyynti"},
                {value: 2, name: "Ei määritelty"},
                {value: 3, name: "Tuotanto"},
                {value: 4, name: "Hallitus"},
                {value: 5, name: "Webmaster"}
            ],
            valittuKayttaja: {
                fname: "",
                sname: "",
                email: ""
            },
            kayttajat: []
        }
        this.teeHaut = this.teeHaut.bind(this);
        this.valitseKayttaja = this.valitseKayttaja.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.tallennaMuutokset = this.tallennaMuutokset.bind(this);
    }

    componentDidMount() {
        this.teeHaut();
    }

    valitseKayttaja(k) {
        let _kayttaja = JSON.parse(JSON.stringify(k));
        this.setState({valittuKayttaja: _kayttaja});
    }

    handleChange(e) {
        let _kayttaja = this.state.valittuKayttaja;
        _kayttaja[e.target.name] = e.target.value;
        this.setState({valittuKayttaja: _kayttaja})
    }

    tallennaMuutokset() {
        ajax.sendPost('/admin/w/kayttaja', this.state.valittuKayttaja)
        .then(data => {
            console.log(data)
            this.teeHaut();
            let _messages = this.state.messages;
            _messages.push({ header: "Muutokset tallennettu!", text: "Muutokset tallennettiin onnistuneesti" })
            this.setState({ messages: _messages, henkilotiedotMuuttuneet: false });
            setTimeout(() => {
                this.setState({ messages: [] });
            }, 3000)
        })
        .catch(err => {
            console.log(err)
        })
    }

    teeHaut() {
        ajax.sendGet('/admin/w/kayttajat')
        .then(k => {
            this.setState({kayttajat: k.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render () {
        return (
            <div className="container-fluid">
                <h1>Käyttäjät</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <Kayttajalista 
                            roolit={this.state.kayttajat}
                            kayttajat={this.state.kayttajat}
                            valitseKayttaja={this.valitseKayttaja} />
                    </div>
                    <div className="col-sm-6">
                        {this.state.valittuKayttaja._id ? (
                            <Kayttaja
                                kayttaja={this.state.valittuKayttaja}
                                roolit={this.state.roolit}
                                handleChange={this.handleChange}
                                tallennaMuutokset={this.tallennaMuutokset} />
                        ): ""}
                        <Messages
                            messages={this.state.messages}
                            warnings={this.state.warnings}
                            errors={this.state.errors} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Kayttajat