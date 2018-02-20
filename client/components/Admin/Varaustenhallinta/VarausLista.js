import React, { Component } from 'react'

class VarausLista extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let varaukset = this.props.varaukset.map((varaus, i) => {
            let ticketCount = varaus.ocount + varaus.ncount + varaus.scount;
            return (
                <tr key={i}>
                    <td>{varaus.fname} {varaus.sname}</td>
                    <td>{varaus.email}</td>
                    <td>{varaus.pnumber}</td>
                    <td>{ticketCount}</td>
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
            </div>
        )
    }
}


export default VarausLista