import React, { Component } from 'react'

import { Dropdown, Radio } from '../../Utils/Form';

class VarausForm extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        let paymentMethodOptions = [{label:'Käteinen', value:'0'}, {label:'Lasku', value:'1'}, {label:'Paytrail', value:'2'}];
        let paidOptions = [{label:'Kyllä', value:'true'}, {label:'Ei', value:'false'}]
        let sendemailOptions = [{label:'Kyllä', value:'true'},{label:'Ei', value:'false'}]
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="esitysInput" className="">Esitys:</label>
                        </div>
                        <div className={"col align-items-center"}>
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
                            Normaali<input name="ncount" id="ticketsInput" className="form-control" type="number" min="0" onChange={this.props.handleChange} value={this.props.ncount} placeholder="N"/>16 €/kpl
                        </div>
                        <div className={"col-3 justify-contents-center"}>
                            Opiskelija<input name="scount" id="ticketsInput" className="form-control" type="number" min="0" onChange={this.props.handleChange} value={this.props.scount} placeholder="S"/> 14 €/kpl
                        </div>
                        <div className={"col-3 justify-contents-center"}>
                            Special<input name="ocount" id="ticketsInput" className="form-control" type="number" min="0" onChange={this.props.handleChange} value={this.props.ocount} placeholder="O"/> 10 €/kpl
                        </div>
                    </div>
                     <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="priceInput" className="">Hinta:</label>
                        </div>
                        <div className={"col"}>
                            <input readOnly name="price" id="priceInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.price} placeholder="Hinta"/>
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
                    
                    <hr style={{backgroundColor:'lightgray', margin:'30px'}}/>

                    <div className={"row form-group align-items-center "}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="maksutapaInput" className="">Maksutapa:</label>
                        </div>
                        <div className={"col form-check form-check-inline"}>
                            <Radio 
                                options={paymentMethodOptions}
                                onChange={this.props.handleChange}
                                value={this.props.paymentMethod}
                                name='paymentMethod' />
                        </div>
                        {/*
                            <input checked={this.props.paymentMethod === 0} className="" type="radio" name="paymentMethod" value={0} onChange={this.props.handleChange}/> Käteinen <br/>
                            <input checked={this.props.paymentMethod === 1} className="" type="radio" name="paymentMethod" value={1} onChange={this.props.handleChange}/> Lasku <br/>
                            <input checked={this.props.paymentMethod === 2} className="" type="radio" name="paymentMethod" value={2} onChange={this.props.handleChange}/> Paytrail <br/>
                        */}
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="maksettuInput" className="">Maksettu:</label>
                        </div>
                        <div className={"col form-check form-check-inline"}>
                            <Radio 
                                options={paidOptions}
                                onChange={this.props.handleChange}
                                value={this.props.paid}
                                name='paid' />
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="sendmailInput" className="">Lähetetäänkö maili:</label>
                        </div>
                        {/* <div className={"col form-check form-check-inline"}>
                            <Radio 
                                options={sendemailOptions}
                                onChange={this.props.handleChange}
                                value={this.props.sendemail}
                                name='sendemail'
                                disabled={this.props.valittuVarausId ? true : false} /> 
                        </div> */}
                    </div>
                </form>
            </div>
        )
    }
}


export default VarausForm