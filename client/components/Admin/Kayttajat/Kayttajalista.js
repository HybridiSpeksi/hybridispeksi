import React, { Component } from 'react'

class Kayttajalista extends Component {
    render () {
        let rows = this.props.kayttajat.map((kayttaja, i) => {
            return (
                <tr key={i} onClick={() => this.props.valitseKayttaja(kayttaja)}>
                    <td>{kayttaja.fname} {kayttaja.sname}</td>
                    <td>{kayttaja.email}</td>
                    <td>{kayttaja.role}</td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table table-inverse">
                    <thead>
                        <tr>
                            <th>Nimi</th>
                            <th>@</th>
                            <th>Rooli</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Kayttajalista