import React, { Component } from 'react'

class VarausLista extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let varaukset = this.props.varaukset.map((varaus, i) => {
            return (
                <tr key={i}>
                    <td>{varaus.fname} {varaus.sname}</td>
                    <td>{varaus.email}</td>
                    <td>{varaus.pnumber}</td>
                    <td>{varaus.ocount}</td>
                    <td>{varaus.ncount}</td>
                    <td>{varaus.scount}</td>
                    <td>{varaus.oprice}</td>
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
                            <th>O</th>
                            <th>N</th>
                            <th>S</th>
                            <th>€</th>
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