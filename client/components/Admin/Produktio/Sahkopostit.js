import React, { Component } from 'react'

class Sahkopostit extends Component {
    componentDidMount() {
        console.log("mount")
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        let sahkopostit = this.props.jasenet.map((jasen, i) => {
            console.log("asdf")
            return (
                <div key={i}>
                    {jasen.email && jasen.email !== "" ? <div>{jasen.email}, </div> : ""}
                </div>
            )

        })
        return (
            <div>
                {sahkopostit}
                <button 
                    className="btn btn-default"
                    onClick={this.props.toggleSahkopostit}>Piilota sähköpostit</button>
            </div>
        )
    }
}

export default Sahkopostit