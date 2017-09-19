import React, { Component } from 'react'

class Home extends Component {

    componentDidMount() {
        fetch('/api', function (res) {
        })
            .then(function (res) {
                console.log(res)
            })
    }
    render() {
        return (
            <div className="container-fluid">
                <h1>Home hello</h1>

            <div className="row">
                <div className="col-sm-4 col-xs-6">
                    <h1>eka</h1>
                </div>
                <div className="col-sm-4 col-xs-6">
                    <h1>toka</h1>
                </div>
                <div className="col-sm-4">
                    <h1>kolmas</h1>
                </div>
            </div>
            </div>
        )
    }
}

export default Home