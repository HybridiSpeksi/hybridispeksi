import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Loginform from './Loginform';
import Signupform from './Signupform';

import utils from '../../Utils/Utils';
import auth from '../../Utils/Auth';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';

let MESSAGE_SUCCESS = "success";
let MESSAGE_WARNING = "warning";
let MESSAGE_ERROR = "error";
class Login extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            email: '',
            password: '',
            passwordAgain: '',
            fname: '',
            sname: '',
            authState: 0,
            messages: [],
            warnings: [],
            errors: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.state.warnings);
    }

    // Handle all input events
    handleChange(e) {
        this.setState({ warnings: [] })
        let value = e.target.value;

        // Check if numeric value and parse
        value = utils.parseNumberIfNumber(value);

        this.setState({ [e.target.name]: value });
    }

    // Submit form
    handleSubmit(e) {
        e.preventDefault();
        let url = "";
        if (e.target.name === "login") {
            url += "/authenticate";
            ajax.sendPost(
                url,
                { email: this.state.email, password: this.state.password }
            ).then(data => {
                if (data.success === true) {
                    auth.signIn(data.token);
                    location.replace('/admin');
                } else {
                    this.addMessage(MESSAGE_WARNING, "Kirjautuminen epäonnistui!", data.message)
                }
            }).catch(err => {
                this.addMessage(MESSAGE_ERROR, "Virhe!", "Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.");
            })
        } else if (e.target.name === "signup") {
            if (this.validateSignup()) {
                url += "/signup";
                ajax.sendPost(
                    url,
                    {
                        fname: this.state.fname,
                        sname: this.state.sname,
                        email: this.state.email,
                        password: this.state.password
                    }).then(data => {
                        if (data.success === true) {
                            this.addMessage(MESSAGE_SUCCESS, "Rekisteröinti onnistui!", "Pääset kirjautumaan sisään kun sinut on hyväksytty webmasterien toimesta.");
                        }
                    }).catch(err => {
                        console.log(err);
                        this.addMessage(MESSAGE_ERROR, "Virhe!", "Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.");
                    })
            }
        }
    }

    validateSignup() {
        let valid = true;
        if (
            this.state.fname === ""
            || this.state.sname === ""
            || this.state.email === ""
        ) {
            this.addMessage(MESSAGE_WARNING, "Virhe!", "Kaikki kentät on täytettävä");
            valid = false;
        }
        if (!utils.isValidEmail(this.state.email)) {
            this.addMessage(MESSAGE_WARNING, "Virhe!", "Sähköposti on virheellinen");
            valid = false;
        }
        if (this.state.password !== this.state.passwordAgain) {
            this.addMessage(MESSAGE_WARNING, "Virhe!", "Salasanat eivät täsmää");
            valid = false;
        }
        return valid;
    }

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
                {this.state.authState === 0 ? (
                    <Loginform
                        email={this.state.email}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        messages={<Messages messages={this.state.messages} warnings={this.state.warnings} errors={this.state.errors} />} />
                ) : (
                        <Signupform
                            fname={this.state.fname}
                            sname={this.state.sname}
                            email={this.state.email}
                            password={this.state.password}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            messages={<Messages messages={this.state.messages} warnings={this.state.warnings} errors={this.state.errors} />} />
                    )}
            </div>
        )
    }
}

export default Login

