import React, { Component } from 'react';

import Esitysvalinta from './Esitysvalinta';
import VarausLista from './VarausLista';
import UusiVaraus from './UusiVaraus';
import Sahkopostit from '../../Shared/Sahkopostit';

import ajax from '../../Utils/Ajax';
import utils from '../../Utils/Utils';
import Messages from '../../Utils/Messages';
/* import PropTypes from "" */

class Varaustenhallinta extends Component {
    constructor(props) {
        super(props);

        this.state = {
            esitykset: [],
            varaukset: [],
            valittuEsitys: {},
            naytaSahkopostit: false,
            fname: '',
            sname: '',
            email: '',
            phone: '',
            ticketsN: '',
            ticketsS: '',
            ticketsO: '',
            priceN: '16',
            priceS: '14',
            price: '',
            lisatiedot: ''
        }

        this.valitseEsitys = this.valitseEsitys.bind(this);
        this.haeVaraukset = this.haeVaraukset.bind(this);
        this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.emptyFields = this.emptyFields.bind(this);
    }

    componentDidMount() {
        ajax.sendGet('/esitykset')
        .then(_data => {
            this.setState({esitykset: _data.data})
            this.setState({valittuEsitys: _data.data[0]})
            this.haeVaraukset(_data.data[0]);
        })
        .catch(err => {
            console.log(err);
        })
        /*ajax.sendGet('/price')
        .then(_data =>{
        	this.setState({priceS: _data.data[0].value})
        	this.setState({priceN: _data.data[1].value});
        })
        .catch(err => {
        	console.log(err);
        })*/
    }

    toggleSahkopostit() {
        this.setState({ naytaSahkopostit: !this.state.naytaSahkopostit })
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState({ [e.target.name]: value });

        // if(e.target.name == "ticketsN" || e.target.name == "ticketsS") {
        	let sum = this.state.ticketsN * this.state.priceN + this.state.ticketsS * this.state.priceS
        	this.setState({ price: sum  + " €"})
        // }

    }


    handleSubmit(e) {
        e.preventDefault();
        let url = "/varaukset";

        if (this.validateVaraus()) {
            ajax.sendPut(
                url,
                {   
                    tapahtuma: this.state.tapahtuma,
                    fname: this.state.fname,
                    sname: this.state.sname,
                    email: this.state.email,
                    jarjesto: this.state.jarjesto,
                    juoma: this.state.holillisuus,
                    ruokavalio: this.state.lisatiedot,


                }).then(data => {
                    this.addMessage(MESSAGE_SUCCESS, "Ilmoittautuminen onnistui!")
                    this.setState({ilmottu: true})
                }).catch(err => {
                    console.log(err);
                    this.addMessage(MESSAGE_ERROR, "Virhe!", "Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.");
                })
            }
    }
    validateSitsit() {
        this.countSpeksit();

        let valid = true;
        if (
            this.state.fname === ""
            || this.state.sname === ""
            || this.state.email === ""
            || this.state.jarjesto === ""
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

    emptyFields(){
    	this.setState({ 
    		fname: '',
    		sname: '',
    		email: '',
    		phone: '',
    		ticketsN: '',
    		ticketsS: '',
    		price: '',
    		lisatiedot: ''})
    }

    valitseEsitys(t) {
        this.setState({valittuEsitys: t})
        this.haeVaraukset(t);
    }

    haeVaraukset(t) {
        ajax.sendGet('/admin/varaukset/' + t._id)
        .then(_data => {
            this.setState({varaukset: _data.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render () {
        return (
            <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <h1>Varaustenhallinta</h1>
                    </div>
                    <div className="col d-flex justify-content-end">
                    	<button 
                    		className="btn btn-default"
                    		data-toggle="modal" data-target="#exampleModal">Lisää uusi varaus</button>
                    </div>
                </div>
                <UusiVaraus
                	emptyFields={this.emptyFields}
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    fname={this.state.fname}
		            sname={this.state.sname}
		            email={this.state.email}
		            phone={this.state.phone} 
		            ticketsN={this.state.ticketsN}
		            ticketsS={this.state.ticketsS}
		            ticketsO={this.state.ticketsO}
		            price={this.state.price}
		            lisatiedot={this.state.lisatiedot}
		            valittuEsitys={this.state.valittuEsitys} />
                
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Valitse esitys</h3>
                        <Esitysvalinta 
                            esitykset={this.state.esitykset}
                            valitseEsitys={this.valitseEsitys} />

                        {this.state.naytaSahkopostit ? (
                            <Sahkopostit
                                jasenet={this.state.varaukset}
                                toggleSahkopostit={this.toggleSahkopostit} />

                        ) : (
                                <button
                                    className="btn btn-default"
                                    onClick={this.toggleSahkopostit}>Näytä sähköpostit</button>
                            )}
                    </div>
                    <div className="col">
                        <h3>{this.state.valittuEsitys.name}</h3>
                        <VarausLista 
                            varaukset={this.state.varaukset} />
                    </div>
                </div>
            </div>
        )
    }
}
/* Varaustenhallinta.propTypes = {
} */

export default Varaustenhallinta;