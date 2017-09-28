import React, { Component } from 'react'
import styles from './Produktionjasenet.css';
import {Text, Dropdown } from '../../Utils/Form';

class Haku extends Component {
    render () {
        return (
            <div className="row">
                <div className={styles.hakulaatikko + " col"}>
                <Text
                    type="text"
                    autoFocus="false"
                    name="pikahaku"
                    onChange={this.props.handleChange}
                    value={this.props.haku.pikahaku}
                    placeholder="Pikahaku"
                    id="pikahaku-input"
                    label=""
                    />
                    <p>Hae nimellä, sähköpostilla tai tehtävällä. Kirjoita tehtävä kokonaan. Vain yksi hakutermi.</p>
                </div>
            </div>
        )
    }
}

export default Haku