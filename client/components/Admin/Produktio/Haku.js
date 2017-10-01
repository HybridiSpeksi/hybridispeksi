import React, { Component } from 'react'
import styles from './Produktionjasenet.css';
import { Text, Dropdown } from '../../Utils/Form';

class Haku extends Component {
    render() {
        return (
            <div className={"row " + styles.hakulaatikko}>
                <div className="col">
                    <h3>Henkilöhaku</h3>
                    <div className="row">
                        <div className={"col"}>
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
                    <div className="row">
                        <div className="col">
                            <Dropdown
                                options={this.props.tehtavat}
                                id="tehtava-haku"
                                value=""
                                onChange={this.props.handleChange}
                                name="tehtava"
                            />
                        </div>
                        <div className="col">
                            <Dropdown
                                options={this.props.jarjestot}
                                id="jarjesto-haku"
                                value=""
                                onChange={this.props.handleChange}
                                name="jarjesto"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Haku