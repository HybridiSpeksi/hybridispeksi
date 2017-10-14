import React, { Component } from 'react';

import { Text, Textarea, Dropdown } from '../../Utils/Form';

class Ohjaustieto extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <p><i>_id: {this.props.ohjaustieto._id}</i></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Text
                            type="text"
                            autoFocus={true}
                            name="key"
                            onChange={this.props.handleChange}
                            value={this.props.ohjaustieto.key}
                            placeholder="Key"
                            id="key-input" />
                    </div>
                    <div className="col">
                        <Text
                            type="text"
                            name="value"
                            onChange={this.props.handleChange}
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
                            placeholder="Nimiteksti"
                            rows={5}
                            value={this.props.ohjaustieto.name}
                            onChange={this.props.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Ohjaustieto