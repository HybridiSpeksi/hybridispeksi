import React, { Component } from 'react'

class Esitysvalinta extends Component {
    render() {
        let ticketCount = 0;
        let esitykset = this.props.esitykset.map((t, i) => {
            ticketCount = ticketCount + t.bookingCount;
            return (
                <tr key={i} onClick={() => this.props.valitseEsitys(t)}>
                    <td>{t.name}</td>
                    <td>{t.bookingCount}/130</td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table table-inverse">
                    <tbody>
                        {esitykset}
                        <tr className="bg-info" style={{color:'black'}} onClick={this.props.haeKaikkiVaraukset}>
                            <td> Kaikki varaukset</td>
                            <td> {ticketCount}/1040</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Esitysvalinta