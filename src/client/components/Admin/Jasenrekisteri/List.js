import React, { Component } from 'react'
import Moment from 'react-moment';

import styles from './Jasenrekisteri.css'

class List extends Component {

    render() {
        let list = this.props.jasenet.map((jasen, i) => {
            return (
                <tr onClick={() => this.props.valitseJasen(jasen)} key={i}>
                    <td>{i + 1}</td>
                    <td>{jasen.fname} {jasen.sname}</td>
                    <td>{jasen.email}</td>
                    <td>{jasen.approved ? <i className="fa fa-check" aria-hidden="true"></i>: ""}</td>
                    <td><Moment format="DD.MM.YYYY">{jasen.joinDate}</Moment></td>
                </tr>
            )
        })
        return (
            <div className={styles.table}>
                <table className={"table table-inverse table-striped"}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nimi</th>
                            <th>@</th>
                            <th>Hyväksytty</th>
                            <th>Hakupv</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List