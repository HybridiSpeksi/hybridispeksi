import React, { Component } from 'react'

import { Dropdown } from './../Utils/Form';

class VarausForm extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="esitysInput" className="">Esitys:</label>
                        </div>
                        <div className={"col"}>
                        <Dropdown
                            options={this.props.esitykset}
                            selected={this.props.valittuEsitys._id}
                            id={"esitysInput"}
                            label=""
                            name={"esitys"}
                            onChange={this.props.handleChange}
                            />
                            {/* 
                            <select name="esitys" id="esitysInput" className="form-control" onChange={this.props.handleChange} default={this.props.valittuEsitys.name}>
                                {esityslista}
                            </select>
                            <input name="fname" id="fnameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.valittuEsitys.name} placeholder="Etunimi"/> */}
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="fnameInput" className="">Etunimi:</label>
                        </div>
                        <div className={"col"}>
                            <input name="fname" id="fnameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.fname} placeholder="Etunimi"/>
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="snameInput" className="">Sukunimi:</label>
                        </div>
                        <div className={"col"}>
                            <input name="sname" id="snameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.sname} placeholder="Sukunimi"/>
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="emailInput" className="">Sähköposti:</label>
                        </div>
                        <div className={"col"}>
                            <input name="email" id="emailInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.email} placeholder="Sähköposti"/>
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="pnumberInput" className="">Puhelinnumero:</label>
                        </div>
                        <div className={"col"}>
                            <input name="pnumber" id="pnumberInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.pnumber} placeholder="Puhelinnumero"/>
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3 justify-contents-center"}>
                            <label htmlFor="ticketsInput" className="">Liput:</label>
                        </div>
                        <div className={"col-3 justify-contents-center"}>
                            Normaali<input name="ncount" id="ticketsInput" className="form-control" type="number" min="0" onChange={this.props.handleChange} value={this.props.ncount} placeholder="Normaali"/>16 €/kpl
                        </div>
                        <div className={"col-3 justify-contents-center"}>
                            Opiskelija<input name="scount" id="ticketsInput" className="form-control" type="number" min="0" onChange={this.props.handleChange} value={this.props.scount} placeholder="Opiskelija"/> 14 €/kpl
                        </div>
                        <div className={"col-3 justify-contents-center"}>
                            Kannatus<input name="ocount" id="ticketsInput" className="form-control" type="number" min="0" onChange={this.props.handleChange} value={this.props.ocount} placeholder="Kannatus"/> 25 €/kpl
                        </div>
                    </div>
                     <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="priceInput" className="">Hinta:</label>
                        </div>
                        <div className={"col"}>
                            <input readOnly name="price" id="priceInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.price  + " €"} placeholder="Hinta"/>
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                            <div className={"col-sm-3"}>
                                <label htmlFor="lisatiedotInput" className="">Lisätiedot:</label>
                            </div>
                            <div className={"col"}>
                                <textarea rows="2" name="lisatiedot" id="lisatiedotInput" className="form-control" onChange={this.props.handleChange} value={this.props.lisatiedot}></textarea>  
                            </div>
                    </div>
                    {/*}
                    <hr/>
                    <div className={"row form-group align-items-center "}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="maksutapaInput" className="">Maksutapa:</label>
                        </div>
                        <div className={"col form-check form-check-inline"}>
                            <input checked={this.props.maksutapa === "0"} className="" type="radio" name="maksutapa" value="0" onChange={this.props.handleChange}/> Käteinen 
                            <input checked={this.props.maksutapa === "1"} className="" type="radio" name="maksutapa" value="1" onChange={this.props.handleChange}/> Lasku 
                            <input checked={this.props.maksutapa === "2"} className="" type="radio" name="maksutapa" value="2" onChange={this.props.handleChange}/> Paytrail 
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="maksettuInput" className="">Maksettu:</label>
                        </div>
                        <div className={"col form-check form-check-inline justify-contents-start"}>
                            <input checked={this.props.maksettu === "0"} className="" type="radio" name="maksettu" value="0" onChange={this.props.handleChange}/> Kyllä 
                            <input checked={this.props.maksettu === "1"} className="" type="radio" name="maksettu" value="1" onChange={this.props.handleChange}/> Ei 
                        </div>
                    </div>
                                        <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="sendmailInput" className="">Lähetetäänkö maili:</label>
                        </div>
                        <div className={"col form-check form-check-inline justify-contents-start"}>
                            <input checked={this.props.sendmail === "0"} className="" type="radio" name="sendmail" value="0" onChange={this.props.handleChange}/> Kyllä
                            <input checked={this.props.sendmail === "1"} className="" type="radio" name="sendmail" value="1" onChange={this.props.handleChange}/> Ei
                        </div>
                    </div>
                    */}
                </form>
            </div>
        )
    }
}


export default VarausForm