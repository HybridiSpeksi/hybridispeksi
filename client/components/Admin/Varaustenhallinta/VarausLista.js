import React, { Component } from 'react';
import MuokkaaVarausta from './MuokkaaVarausta';
import Messages from '../../Utils/Messages';

class VarausLista extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        let varaukset = this.props.varaukset.map((varaus, i) => {
            let ticketCount = varaus.ocount + varaus.ncount + varaus.scount;
            return (
                <tr key={i}>
                    <td onClick={() => this.props.toggleMuokkaaVaraustaModal(varaus)}>{varaus.fname} {varaus.sname}</td>
                    <td onClick={() => this.props.toggleMuokkaaVaraustaModal(varaus)}>{varaus.email}</td>
                    <td onClick={() => this.props.toggleMuokkaaVaraustaModal(varaus)}>{varaus.pnumber}</td>
                    <td onClick={() => this.props.toggleMuokkaaVaraustaModal(varaus)}>{ticketCount}</td>
                    <td><button type="button" className="btn btn-dark btn-sm" onClick={() => this.props.removeBooking(varaus._id)}>X</button></td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table table-striped table-inverse">
                    <thead>
                        <tr>
                            <th>Nimi</th>
                            <th>@</th>
                            <th>Puh</th>
                            <th>Liput</th>
                            <th>Poista</th>
                        </tr>
                    </thead>
                    <tbody>
                        {varaukset}
                    </tbody>
                </table>
                <MuokkaaVarausta
                    emptyFields={this.props.emptyFields}
                    handleChange={this.props.handleChange} 
                    handleUpdate={this.props.handleUpdate}
                    sendConfirmationEmail={this.props.sendConfirmationEmail}
                    fname={this.props.fname}
                    sname={this.props.sname}
                    email={this.props.email}
                    pnumber={this.props.pnumber} 
                    scount={this.props.scount}
                    ncount={this.props.ncount}
                    ocount={this.props.ocount}
                    price={this.props.price}
                    lisatiedot={this.props.lisatiedot}
                    ilmottu={this.props.ilmottu}
                    valittuEsitys={this.props.valittuEsitys}
                    esitykset={this.props.esitykset}
                    messages={this.props.messages} 
                    valittuVarausId={this.props.valittuVarausId}
                    paymentMethod={this.props.paymentMethod}
                    paid={this.props.paid}
                    sendemail={this.props.sendemail}/>
            </div>
        )
    }
}


export default VarausLista