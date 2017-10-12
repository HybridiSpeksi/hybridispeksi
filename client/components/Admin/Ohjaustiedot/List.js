import React, { Component } from 'react'

import styles from './Ohjaustiedot.css';

class List extends Component {
    render() {
        return (
            <div className={styles.table}>
                <table className="table table-inverse table-striped">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.ohjaustiedot.map((o, i) => {
                            return (
                                <tr key={i} onClick={() => this.props.valitseOhjaustieto(o)}>
                                    <td>{o.key}</td>
                                    <td>{o.value}</td>
                                    <td>{o.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List