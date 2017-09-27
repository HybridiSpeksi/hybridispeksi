import React, { Component } from 'react'

class Text extends Component {
    render () {
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
                    id={this.props.id}/>
            </div>
        )
    }
}

class Dropdown extends Component {
    render () {
        return (
            <div>
                
            </div>
        )
    }
}

class Radio extends Component {
    render () {
        return (
            <div>
                
            </div>
        )
    }
}

class Checkbox extends Component {
    render () {
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