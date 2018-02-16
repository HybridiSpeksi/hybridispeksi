import React, { Component } from 'react'

class Esitysvalinta extends Component {
    render() {
        let esitykset = this.props.esitykset.map((t, i) => {
            return (
                <tr key={i} onClick={() => this.props.valitseEsitys(t)}>
                    <td>{t.name}</td>
                    <td></td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table table-inverse table-striped">
                    <tbody>
                        {esitykset}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Esitysvalinta