import React, { Component } from 'react'

class Jasentiedot extends Component {
    render () {
        return (
            <div>
                <h3>{this.props.jasen.fname} {this.props.jasen.sname}</h3>
            </div>
        )
    }
}

export default Jasentiedot