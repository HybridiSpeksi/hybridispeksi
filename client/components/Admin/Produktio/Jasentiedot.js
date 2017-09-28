import React, { Component } from 'react'
import { Text, Dropdown } from '../../Utils/Form';
import styles from './Produktionjasenet.css';

class Jasentiedot extends Component {

    render() {
        if (!this.props.jasen.tehtavat) {
            this.props.jasen.tehtavat = []
        }
        let tehtavaValinnat = this.props.jasen.tehtavat.map((t, i) => {
            return (
                <div className="col" key={i}>
                    <Dropdown
                        options={this.props.tehtavat}
                        selected={t}
                        id={i}
                        label=""
                        name={"tehtavat"}
                        onChange={this.props.handleChange}
                    />
                </div>
            )
        })
        return (
            <div className="row">
                <div className={"col " + styles.jasentiedotlaatikko}>
                    <h3>{this.props.jasen.fname} {this.props.jasen.sname}</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <Text
                                value={this.props.jasen.email}
                                name="email"
                                type="email"
                                onChange={this.props.handleChange}
                                placeholder="Sähköposti"
                                id="email-input"
                                autofocus="false"
                                label=""
                            />
                        </div>
                        <div className="col-sm-6">
                            <Text
                                value={this.props.jasen.pnumber}
                                name="pnumber"
                                type="tel"
                                onChange={this.props.handleChange}
                                placeholder="Puh"
                                id="pnumber-input"
                                autofocus="false"
                            />
                        </div>
                    </div>
                    <div className="row">
                        {tehtavaValinnat}
                    </div>
                    <div className="row">
                        <div className="col">
                            <p><i>"{this.props.jasen.lisatiedot}"</i></p>
                        </div>
                    </div>
                    {this.props.jasen.email ? <button className="btn btn-warning" onClick={() => this.props.valitseJasen(false)}>Tyhjennä valinta</button> : ""}
                </div>
            </div>
        )
    }
}

export default Jasentiedot