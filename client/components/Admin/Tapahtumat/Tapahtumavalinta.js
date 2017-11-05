import React, { Component } from 'react'

class Tapahtumavalinta extends Component {
    render() {
        let tapahtumat = this.props.tapahtumat.map((t, i) => {
            return (
                <tr key={i} onClick={() => this.props.valitseTapahtuma(t)}>
                    <td>{t.name}</td>
                    <td></td>
                </tr>
            )
        })
        return (
            <div>
                <h3>Valitse tapahtuma</h3>
                <table className="table table-inverse table-striped">
                    <tbody>
                        {tapahtumat}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tapahtumavalinta