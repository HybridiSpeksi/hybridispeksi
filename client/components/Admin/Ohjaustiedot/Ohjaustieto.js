import React, { Component } from 'react';

import {Text, Textarea, Dropdown} from '../../Utils/Form';

class Ohjaustieto extends Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <Text
                            type="text"
                            autoFocus={true}
                            name="key"
                            onChange={this.props.onChange}
                            value={this.props.ohjaustieto.key}
                            placeholder="Key"
                            id="key-input" />
                    </div>
                    <div className="col">
                        <Text
                            type="text"
                            name="value"
                            onChange={this.props.onChange}
                            value={this.props.ohjaustieto.value}
                            placeholder="Value"
                            id="value-input" />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Textarea 
                            id="name-input"
                            name="name"
                            rows={5}
                            value={this.props.ohjaustieto.name}
                            onChange={this.props.onChange} />  
                    </div>
                </div>
            </div>
        )
    }
}

export default Ohjaustieto