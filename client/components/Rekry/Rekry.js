import React, { Component } from 'react'
//import { BrowserRouter, Route } from 'react-router-dom';

import styles from './Rekry.css';
import Rekryform from './Rekryform';
import Kiitos from './Kiitos';

//import utils from '../../Utils/Utils';

class Login extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            fname: '',
            lname: '',
            email: '',
            pnumber: '',
            tehtavat: '',
            jarjesto: '',
            lisatiedot: '',
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
        /*console.log(e.target);
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
        }
        console.log("submitted"); */
    }

    render() {
        let form = null;
        return (
            <div>
            {this.state.authState === 0 ? (
                <Rekryform
                    fname={this.state.fname}
                    lname={this.state.lname}
                    email={this.state.email}
                    pnumber={this.state.pnumber}
                    tehtavat={this.state.tehtavat}
                    jarjesto={this.state.jarjesto}
                    lisatiedot={this.state.lisatiedot}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
            
            ) : (
                <Kiitos/>
            )}
            </div>
        )
    }
}

export default Login

