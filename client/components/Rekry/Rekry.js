import React, { Component } from 'react'
//import { BrowserRouter, Route } from 'react-router-dom';

import styles from './Rekry.css';
import Rekryform from './Rekryform';
import Kiitos from './Kiitos';

import utils from '../Utils/Utils';
import ajax from '../Utils/Ajax';
import Messages from '../Utils/Messages';

let MESSAGE_SUCCESS = "success";
let MESSAGE_WARNING = "warning";
let MESSAGE_ERROR = "error";

class Rekry extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            fname: '',
            sname: '',
            email: '',
            pnumber: '',
            tehtavat: [],
            jarjesto: '',
            lisatiedot: '',
            jasenyys: "true",
            messages: [],
            warnings: [],
            errors: [],
            authState: 0,
            kaikkiTehtavat: [],
            kaikkiJarjestot: [] ,
            rekryAuki: false 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTehtavaChange = this.handleTehtavaChange.bind(this);
    }

    componentDidMount() {
        ajax.sendGet('/tehtavat')
        .then(tehtavat => {
            this.setState({kaikkiTehtavat: tehtavat.data});
        })
        .catch(err => {
            console.log(err)
        })
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
    handleTehtavaChange(e) {
        let uusiTehtavat = this.state.tehtavat;

        if(e.target.name === "tehtavat1"){
            uusiTehtavat[0] = e.target.value;
        }
        else if(e.target.name === "tehtavat2"){
            uusiTehtavat[1] = e.target.value;
        }
        else { 
            uusiTehtavat[2] = e.target.value;
        }
        
        this.setState({ tehtavat: uusiTehtavat });
        this.setState({ 
            messages: [],
            warnings: [],
            errors: []
        });

    }

    // Submit form
    handleSubmit(e) {
        e.preventDefault();
        let url = "/produktionjasen";

        if (this.validateRekry()) {
            ajax.sendPut(
                url,
                {
                    fname: this.state.fname,
                    sname: this.state.sname,
                    email: this.state.email,
                    pnumber: this.state.pnumber,
                    tehtavat: this.state.tehtavat,
                    jarjesto: this.state.jarjesto,
                    lisatiedot: this.state.lisatiedot,
                    jasenyys:this.state.jasenyys === "true"

                }).then(data => {
                    if (data.success === true) {
                        this.setState({ authState: 1 });
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
            || this.state.sname === ""
            || this.state.email === ""
            || this.state.pnumber === ""
            || this.state.tehtavat[0] === ""
            || this.state.jarjesto === ""
            || this.state.lisatiedot === ""
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
            {this.state.authState === 0 ? (
                <Rekryform
                    rekryAuki={this.state.rekryAuki}
                    fname={this.state.fname}
                    sname={this.state.sname}
                    email={this.state.email}
                    pnumber={this.state.pnumber}
                    tehtavat={this.state.tehtavat}
                    jarjesto={this.state.jarjesto}
                    lisatiedot={this.state.lisatiedot}
                    jasenyys={this.state.jasenyys}
                    kaikkiTehtavat={this.state.kaikkiTehtavat}
                    kaikkiJarjestot={this.state.kaikkiJarjestot}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                    handleTehtavaChange={this.handleTehtavaChange}
                    messages={<Messages messages={this.state.messages} warnings={this.state.warnings} errors={this.state.errors}
                     />} />
            ) : (
                <Kiitos/>
            )}
            </div>
        )
    }
}

export default Rekry

