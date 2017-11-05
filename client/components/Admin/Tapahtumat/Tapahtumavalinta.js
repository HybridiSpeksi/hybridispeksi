import React, { Component } from 'react'

class Tapahtumavalinta extends Component {
    render() {
        let tapahtumat = this.props.tapahtumat.map((t, i) => {
            return (
                <tr key={i}>
                    <td>{t.name}</td>
                    <td></td>
                </tr>
            )
        })
        return (
            <div>
                <table className="table table-striped">
                    <tbody>
                        {tapahtumat}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tapahtumavalinta