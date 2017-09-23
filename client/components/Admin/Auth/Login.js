import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Loginform from './Loginform';
import Signupform from './Signupform';

import utils from '../../Utils/Utils';
import auth from '../../Utils/Auth';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';

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

    // Handle all input events
    handleChange(e) {
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
                auth.signIn(data.token);
                location.replace('/admin');
            }).catch(err => {

            })
        } else if (e.target.name === "signup") {
            console.log("signup")
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
                        console.log(data)
                    }).catch(err => {
                        console.log(err);
                    })
            }
        }
    }

    validateSignup() {
        console.log("validate")
        let valid = true;
        if(this.state.password !== this.state.passwordAgain) {
            console.log("nomatch")
            let newWarnings = this.state.warnings
            newWarnings.push({text: "Salasanat eivät täsmää"});
            this.setState({warnings: newWarnings})
            console.log(this.state.warnings);
            valid = false;
        }
        return valid;
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

