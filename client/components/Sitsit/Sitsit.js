import React, { Component } from 'react'
//import { BrowserRouter, Route } from 'react-router-dom';

import styles from './Sitsit.css';
import Sitsitform from './Sitsitform';

import utils from '../Utils/Utils';
import ajax from '../Utils/Ajax';
import Messages from '../Utils/Messages';

let MESSAGE_SUCCESS = "success";
let MESSAGE_WARNING = "warning";
let MESSAGE_ERROR = "error";

class Sitsit extends Component {
    constructor(props) {
        super(props);   

        // Initial state
        this.state = {
            tapahtuma: 'fantasiasitsit2017',
            fname: '',
            sname: '',
            email: '',
            jarjesto: '',
            allergiat: '',
            alterego: '',
            messages: [],
            warnings: [],
            errors: [],
            rekryAuki: false 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        ajax.sendGet('/jarjestot')
        .then(jarjestot => {
            this.setState({kaikkiJarjestot: jarjestot.data});
        })
        .catch(err => {
            console.log(err)
        })
        ajax.sendGet('/rekryAuki')
        .then(tag => {
            console.log(tag.data[0])
            this.setState({rekryAuki: tag.data[0].truefalse})
        })
    }

    // Handle all input events
    handleChange(e) {
        let value = e.target.value;

        this.setState({ [e.target.name]: value });
        this.setState({ 
            messages: [],
            warnings: [],
            errors: []
        });
    }

    // Submit form
    handleSubmit(e) {
        e.preventDefault();
        let url = "/ilmo";

        if (this.validateSitsit()) {
            ajax.sendPut(
                url,
                {   
                    tapahtuma: this.state.tapahtuma,
                    fname: this.state.fname,
                    sname: this.state.sname,
                    email: this.state.email,
                    jarjesto: this.state.jarjesto,
                    allergiat: this.state.lisatiedot,
                    alterego: this.state.alterego


                }).then(data => {
                    if (data.success === true) {
                        addMessage(MESSAGE_SUCCESS, "Ilmoittautuminen onnistui!")
                        console.log('Ilmo onnistuiiiii')
                    }
                }).catch(err => {
                    console.log(err);
                    this.addMessage(MESSAGE_ERROR, "Virhe!", "Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.");
                })
            }
    }

    //Validates if all necessary info has been given
    validateSitsit() {
        let valid = true;
        if (
            this.state.fname === ""
            || this.state.sname === ""
            || this.state.email === ""
            || this.state.jarjesto === ""
            || this.state.alterego === ""
       ) {
            this.addMessage(MESSAGE_WARNING, "Virhe!", "Kaikki kentät on täytettävä");
            valid = false;
        }
        if (!utils.isValidEmail(this.state.email)) {
            this.addMessage(MESSAGE_WARNING, "Virhe!", "Sähköposti on virheellinen");
            valid = false;
        }
        return valid;
    }

    //Add different kinds of error or warning messages
    addMessage(type, newHeader, newText) {
        if (type === MESSAGE_WARNING) {
            let newWarnings = this.state.warnings;
            newWarnings.push({ header: newHeader, text: newText });
            this.setState({ warnings: newWarnings })
        } else if (type === MESSAGE_ERROR) {
            let newErrors = this.state.errors;
            newErrors.push({ header: newHeader, text: newText });
            this.setState({ erros: newErrors })
        } else if (type === MESSAGE_SUCCESS) {
            let newMessages = this.state.messages;
            newMessages.push({ header: newHeader, text: newText });
            this.setState({ messages: newMessages });
        }
    }

    render() {
        let form = null;
        return (
            <div>
                <Sitsitform
                    rekryAuki={this.state.rekryAuki}
                    fname={this.state.fname}
                    sname={this.state.sname}
                    email={this.state.email}
                    jarjesto={this.state.jarjesto}
                    allergiat={this.state.allergiat}
                    alterego={this.state.alterego}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                    messages={<Messages messages={this.state.messages} warnings={this.state.warnings} errors={this.state.errors}/>} 
                />
            </div>
        )
    }
}

export default Sitsit

