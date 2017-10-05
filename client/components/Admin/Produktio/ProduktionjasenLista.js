import React, { Component } from 'react'
import css from './Produktionjasenet.css';

class ProduktionjasenLista extends Component {
    render() {
        let listarivit = this.props.jasenet.map((jasen, i) => {
            let tehtavat = ""
            jasen.tehtavat.map((t, i) => {
                tehtavat = + t;
                if (jasen.tehtavat.length < i-1) {
                    tehtavat = + ", "
                }
            })
            return (
                <tr key={i} onClick={() => this.props.valitseJasen(jasen)}>
                    <td>{i + 1}</td>
                    <td>{jasen.fname} {jasen.sname}</td>
                    <td>{jasen.email}</td>
                    <td>{jasen.pnumber}</td>
                    <td>{jasen.tehtavat[0]}, {jasen.tehtavat[1]}, {jasen.tehtavat[2]}</td>
                </tr>
            )
        })
        return (
            <div className={css.jasentable}>
                <table className={"table table-inverse table-striped"}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nimi</th>
                            <th>Sähköposti</th>
                            <th>Puh</th>
                            <th>Tehtävä</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listarivit}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProduktionjasenLista