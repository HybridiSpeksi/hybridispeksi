import React, { Component } from 'react'

class Text extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type={this.props.type}
                    autoFocus={this.props.autoFocus}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    className="form-control"
                    placeholder={this.props.placeholder}
                    id={this.props.id} />
            </div>
        )
    }
}

class Dropdown extends Component {
    render() {
        if(!this.props.options) {
            this.props.otions = []
        }
        let options = this.props.options.map((opt, i) => {
            return (
                <option key={i} value={opt.value}>{opt.name}</option>
            )
        })
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <select
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.selected}
                    className="form-control"
                    id={this.props.id}
                    >
                    {options}
                </select>
            </div>
        )
    }
}

class Radio extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

class Checkbox extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

module.exports = {
    Text: Text,
    Dropdown: Dropdown,
    Radio: Radio,
    Checkbox: Checkbox
}