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
                    onChange=""
                    value=""
                    placeholder="Pikahaku"
                    id="pikahaku-input"
                    />
                    
                </div>
            </div>
        )
    }
}

export default Haku