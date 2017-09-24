import React, { Component } from 'react'
//import { BrowserRouter, Route } from 'react-router-dom';

import styles from './Rekry.css';
import Rekryform from './Rekryform';
import Kiitos from './Kiitos';

import utils from '../Utils/Utils';
import ajax from '../Utils/Ajax';
import Messages from '../Utils/Messages';


class Rekry extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            fname: '',
            lname: '',
            email: '',
            pnumber: '',
            tehtavat: [],
            jarjesto: '',
            lisatiedot: '',
            messages: [],
            warnings: [],
            errors: [],
            authState: 0    
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTehtavaChange = this.handleTehtavaChange.bind(this);
    }

    // Handle all input events
    handleChange(e) {
        let value = e.target.value;
        
        // Check if numeric value and parse
        value = utils.parseNumberIfNumber(value);

        this.setState({ [e.target.name]: value });
    }
    handleTehtavaChange(e) {
        if(e.target.name === "tehtavat1"){
        }
        console.log(e.target.name);
    }

    // Submit form
    handleSubmit(e) {
        e.preventDefault();
        let url = "/produktionjasen";


        if (this.validateRekry()) {
            ajax.sendPost(
                url,
                {
                    fname: this.state.fname,
                    sname: this.state.sname,
                    email: this.state.email,
                    pnumber: this.state.pnumber,
                    //tehtavat: this.state.[],
                    jarjesto: this.state.jarjesto,
                    lisatiedot: this.state.lisatiedot

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

    //Validates if all necessary info has been given
    validateRekry() {
        let valid = true;
        if (
            this.state.fname === ""
            || this.state.lname === ""
            || this.state.email === ""
            || this.state.pnumber === ""
            || this.state.tehtavat1 === ""
            || this.state.jarjesto === ""
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
                    handleSubmit={this.handleSubmit} 
                    handleTehtavaChange={this.handleTehtavaChange}/>
            
            ) : (
                <Kiitos/>
            )}
            </div>
        )
    }
}

export default Rekry

