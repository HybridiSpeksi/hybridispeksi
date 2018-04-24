import React, { Component } from 'react'
//import { BrowserRouter, Route } from 'react-router-dom';

import styles from './Palaute.css';
import Palauteform from './Palauteform';

import utils from '../Utils/Utils';
import ajax from '../Utils/Ajax';
import Messages from '../Utils/Messages';

let MESSAGE_SUCCESS = "success";
let MESSAGE_WARNING = "warning";
let MESSAGE_ERROR = "error";

class Palaute extends Component {
    constructor(props) {
        super(props);   

        // Initial state
        this.state = {
            name: '',
            email: '',
            feedback: '',
            messages: [],
            warnings: [],
            errors: [],
            ilmonneet: [],
            lahetetty: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        $(window).scrollTop(0);
    }


    handleChange(e) {
        let value = e.target.value;

        this.setState({ [e.target.name]: value });
        this.setState({ 
            messages: [],
            warnings: [],
            errors: []
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let url = "/palaute";
        this.setState({ 
            messages: [],
            warnings: [],
            errors: []
        },() => {
        if (this.validatePalaute()) {
            ajax.sendPost(
                url,
                {   
                    name: this.state.name,
                    email: this.state.email,
                    feedback: this.state.feedback
                }).then(data => {
                    this.addMessage(MESSAGE_SUCCESS, "Palautteen lähetys onnistui!")
                    this.setState({ilmottu: true})
                }).catch(err => {
                    console.log(err);
                    this.addMessage(MESSAGE_ERROR, "Virhe!", "Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen.");
                })
            }
        });
    }

    //Validates if all necessary info has been given
    validatePalaute() {
        let valid = true;
        if (this.state.feedback === "") {
            this.addMessage(MESSAGE_WARNING, "Virhe!", "Palaute-kenttä on pakollinen!");
            valid = false;
        }
        if (this.state.email != "" && !utils.isValidEmail(this.state.email)) {
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
                <Palauteform
                    lahetetty={this.state.lahetetty}
                    name={this.state.name}
                    email={this.state.email}
                    feedback={this.state.feedback}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                    messages={<Messages messages={this.state.messages} warnings={this.state.warnings} errors={this.state.errors}/>} 
                />
            </div>
        )
    }
}

export default Palaute

