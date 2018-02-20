import React, { Component } from 'react';

import Esitysvalinta from './Esitysvalinta';
import VarausLista from './VarausLista';
import UusiVaraus from './UusiVaraus';
import Sahkopostit from '../../Shared/Sahkopostit';

import ajax from '../../Utils/Ajax';
import utils from '../../Utils/Utils';
import Messages from '../../Utils/Messages';
/* import PropTypes from "" */

let MESSAGE_SUCCESS = "success";
let MESSAGE_WARNING = "warning";
let MESSAGE_ERROR = "error";

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
            pnumber: '',
            ncount: '',
            scount: '',
            ocount: '',
            nprice: '16',
            sprice: '14',
            oprice: '10',
            price: '',
            lisatiedot: '',
            ilmottu: false,
            messages: [],
            warnings: [],
            errors: []
        }

        this.valitseEsitys = this.valitseEsitys.bind(this);
        this.haeVaraukset = this.haeVaraukset.bind(this);
        this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeBooking = this.removeBooking.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.emptyFields = this.emptyFields.bind(this);
        this.countPrice = this.countPrice.bind(this);
    }

    componentDidMount() {
        ajax.sendGet('/getShowsWithCounts')
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

        if(e.target.name === "ncount" || e.target.name === "scount" || e.target.name === "ocount") {
            this.setState({ [e.target.name]: value }, () => {
                this.countPrice();
            })
        } 
        else if(e.target.name === "esitys") {
        	this.state.esitykset.map((esitys) => {
        		if (e.target.value === esitys._id){
        			this.valitseEsitys(esitys);

        		}
        	})
        }
        else {
            this.setState({[e.target.name]: value});
        }
    }

    countPrice() {
        let sum = this.state.ncount * this.state.nprice + this.state.scount * this.state.sprice + this.state.ocount * this.state.oprice
        this.setState({ price: sum })
    }


    handleSubmit(e) {
        e.preventDefault();
        let url = "/admin/varaus";
		ajax.sendPost(
            url,
            {
                fname: this.state.fname,
			    sname: this.state.sname,
			    email: this.state.email,
			    pnumber: this.state.pnumber,
			    scount: this.state.scount,
			    ncount: this.state.ncount,
			    ocount: this.state.ocount,
			    oprice: this.state.oprice,
			    paymentMethod: 0,
			    paid: true,
			    esitysId: this.state.valittuEsitys._id,
			    additional: this.state.lisatiedot
            }).then(data => {
                if(data.success) {
                    this.addMessage(MESSAGE_SUCCESS, data.data)
                    // this.setState({ilmottu: true})
                    this.haeVaraukset(this.state.valittuEsitys);
                } else {
                    this.addMessage(MESSAGE_WARNING, data.data);
                }
            }).catch(err => {
                console.log(err);
                this.addMessage(MESSAGE_ERROR, "Virhe!", "Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.");
            })
    }

    emptyFields(){
    	this.setState({ 
    		fname: '',
    		sname: '',
    		email: '',
    		pnumber: '',
    		ncount: '',
    		scount: '',
    		ocount: '',
    		price: '',
    		lisatiedot: '',
    		messages: [],
            warnings: [],
            errors: [],
            ilmottu: false
        })
    }

    removeBooking(varausId) {
        if(confirm('Haluatko varmasti poistaa varauksen?')) {
            ajax.sendDelete('/admin/varaus/' + varausId)
            .then(data => {
                if (data.success){
                    alert(data.data);
                    this.haeVaraukset(this.state.valittuEsitys);
                }
                else {
                    alert(data.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    valitseEsitys(t) {
        this.setState({valittuEsitys: t})
        this.haeVaraukset(t);
    }

    haeVaraukset(esitys) {
        ajax.sendGet('/admin/varaukset/' + esitys._id)
        .then(_data => {
            this.setState({varaukset: _data.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    //Add different kinds of error or warning messages
    addMessage(type, newHeader, newText) {
    	this.setState({ 
    		messages: [],
            warnings: [],
            errors: []
        })
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
		            pnumber={this.state.pnumber} 
		            scount={this.state.scount}
		            ncount={this.state.ncount}
		            ocount={this.state.ocount}
		            price={this.state.price}
		            lisatiedot={this.state.lisatiedot}
		            ilmottu={this.state.ilmottu}
		            valittuEsitys={this.state.valittuEsitys}
		            esitykset={this.state.esitykset}
		            messages={<Messages messages={this.state.messages} warnings={this.state.warnings} errors={this.state.errors} />} />
                
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
                            varaukset={this.state.varaukset}
                    		removeBooking={this.removeBooking} />
                    </div>
                </div>
            </div>
        )
    }
}
/* Varaustenhallinta.propTypes = {
} */

export default Varaustenhallinta;