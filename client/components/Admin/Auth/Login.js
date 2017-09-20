import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Loginform from './Loginform';
import Signupform from './Signupform';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        if (!isNaN(value) ) {
            value = Number.parseInt(value);
        }

        this.setState({ [e.target.name]: value });
    }

    // Submit form
    handleSubmit(e) {
        e.preventDefault();
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

