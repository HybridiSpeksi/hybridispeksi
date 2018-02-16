import React, { Component } from 'react'

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
                            <label htmlFor="fnameInput" className="">Esitys:</label>
                        </div>
                        <div className={"col"}>
                            <input disabled name="fname" id="fnameInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.valittuEsitys.name} placeholder="Etunimi"/>
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
                            <label htmlFor="phoneInput" className="">Puhelinnumero:</label>
                        </div>
                        <div className={"col"}>
                            <input name="phone" id="phoneInput" className="form-control" type="text" onChange={this.props.handleChange} value={this.props.phone} placeholder="Puhelinnumero"/>
                        </div>
                    </div>
                    <div className={"row form-group align-items-center"}>
                        <div className={"col-sm-3"}>
                            <label htmlFor="ticketsInput" className="">Liput:</label>
                        </div>
                        <div className={"col-3"}>
                            <input name="tickets" id="ticketsInput" className="form-control" type="number" onChange={this.props.handleChange} value={this.props.tickets} placeholder="O"/>
                        </div>
                        <div className={"col-3"}>
                            <input name="tickets" id="ticketsInput" className="form-control" type="number" onChange={this.props.handleChange} value={this.props.tickets} placeholder="N"/>
                        </div>
                        <div className={"col-3"}>
                            <input name="tickets" id="ticketsInput" className="form-control" type="number" onChange={this.props.handleChange} value={this.props.tickets} placeholder="S"/>
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
                </form>
            </div>
        )
    }
}


export default VarausForm