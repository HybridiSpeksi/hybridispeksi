import React, { Component } from 'react';
import styles from './Messages.css';

class Messages extends Component {

    render() {
        let messages = this.props.messages.map((message, i) => {
            return (
                <div key={i} className="alert alert-info" role="alert">
                    <strong>{message.header}</strong> {message.text}
                </div>
            )
        })
        let warnings = this.props.warnings.map((message, i) => {
            return (
                <div key={i} className="alert alert-warning" role="alert">
                    <strong>{message.header}</strong> {message.text}
                </div>
            )
        })
        let errors = this.props.errors.map((message, i) => {
            return (
                <div key={i} className="alert alert-danger" role="alert">
                    <strong>{message.header}</strong> {message.text}
                </div>
            )
        })
        return (
            <div>
                {messages}
                {warnings}
                {errors}
            </div>
        )
    }
}

export default Messages