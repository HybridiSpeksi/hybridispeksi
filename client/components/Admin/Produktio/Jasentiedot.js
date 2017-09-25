import React, { Component } from 'react'

class Jasentiedot extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.jasen.fname} {this.props.jasen.sname}</h3>

                {this.props.jasen.email ? <button className="btn btn-warning" onClick={() => this.props.valitseJasen({})}>Tyhjennä valinta</button> : ""}
            </div>
        )
    }
}

export default Jasentiedot