import React, { Component } from 'react';

import { Text, Textarea, Radio } from '../../../Utils/Form';

class Ohjaustieto extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="col">
            <p>
              <i>_id: {this.props.ohjaustieto._id}</i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Text
              type="text"
              autoFocus
              name="key"
              onChange={this.props.handleChange}
              value={this.props.ohjaustieto.key}
              placeholder="Key"
              id="key-input"
            />
          </div>
          <div className="col">
            <Text
              type="text"
              name="value"
              onChange={this.props.handleChange}
              value={this.props.ohjaustieto.value}
              placeholder="Value"
              id="value-input"
            />
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
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Radio
              options={[{ label: 'true', value: true }, { label: 'false', value: false }]}
              value={this.props.ohjaustieto.truefalse}
              name="truefalse"
              onChange={this.props.handleChange}
              legend="Boolean -arvo"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Ohjaustieto;
