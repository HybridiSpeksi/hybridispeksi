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

class Textarea extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <textarea
                    className="form-control"
                    name={this.props.name}
                    id={this.props.id}
                    rows={this.props.rowd}
                    value={this.props.value}
                    onChange={this.props.onChange}>
                </textarea>
            </div>
        )
    }
}

class Dropdown extends Component {
    render() {
        if (!this.props.options) {
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

/**
 * @param options: label, value
 * @param value
 * @param name
 * @param onChange
 */
class Radio extends Component {
    render() {
        let options = this.props.options.map((option, i) => {
            return (
                <div className="form-check" key={i}>
                    <label className="form-check-label">
                        <input className="form-check-radio" type="radio" onChange={this.props.onChange} value={option.value} checked={option.value === this.props.value} name={this.props.name} />
                        {option.label}
                    </label>
                </div>
            )
        })
        return (
            <div>
                {options}
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
    Textarea: Textarea,
    Dropdown: Dropdown,
    Radio: Radio,
    Checkbox: Checkbox
}