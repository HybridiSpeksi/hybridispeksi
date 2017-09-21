import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Loginform from './Loginform';
import Signupform from './Signupform';

import utils from '../../Utils/Utils';

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
            authState: 0
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
        console.log(e.target);
        e.preventDefault();
        let url = "/api";
        if (e.target.name === "login") {
            url += "/authenticate";
            fetch(url, {
                method: "POST",
                data: {
                    email: this.state.email,
                    password: this.state.password
                }
            })
            .catch(function(err) {
                console.warn(err);
            })
            .then(function(data) {
                console.log(data);
            })
        }
        console.log("submitted");
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
                        handleSubmit={this.handleSubmit} />
                ) : (
                        <Signupform
                            fname={this.state.fname}
                            sname={this.state.sname}
                            email={this.state.email}
                            password={this.state.password}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit} />
                    )}
            </div>
        )
    }
}

export default Login

