import React, { Component } from 'react'

class Esitysvalinta extends Component {
    render() {
        let ticketCount = 0;
        let esitykset = this.props.esitykset.map((t, i) => {
            ticketCount = ticketCount + t.bookingCount;
            return (
                <tr key={i} onClick={() => this.props.valitseEsitys(t)}>
                    <td className="table-inverse">{t.name}</td>
                    <td className="table-inverse">{t.bookingCount}/130</td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table">
                    <tbody>
                        {esitykset}
                        <tr>
                            <td> Lippuja myyty yhteensä:</td>
                            <td> {ticketCount}/1040</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Esitysvalinta