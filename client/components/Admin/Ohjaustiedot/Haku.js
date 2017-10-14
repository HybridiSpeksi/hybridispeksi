import React, { Component } from 'react'

import { Text, Dropdown } from '../../Utils/Form'

class Haku extends Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <p><i>Haku</i></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Dropdown
                            label="Hae avaimella"
                            id="avain-haku"
                            name="key"
                            onChange={this.props.handleHaku}
                            value={this.props.haku.key}
                            options={this.props.avaimet} />  
                    </div>
                </div>
            </div>
        )
    }
}

export default Haku