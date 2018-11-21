import React, { Component } from 'react'

class IlmoLista extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let ilmot = this.props.ilmot.map((ilmo, i) => {
            return (
                <tr key={i}>
                    <td>{ilmo.fname} {ilmo.sname}</td>
                    <td>{ilmo.email}</td>
                    <td>{ilmo.ruokavalio}</td>
                    <td>{ilmo.juoma}</td>
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
                            <th>Ruokavalio</th>
                            <th>Juoma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ilmot}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default IlmoLista