import React, { Component } from 'react'

class Home extends Component {
    
    componentDidMount() {
        fetch('/api', function(res) {
        })
        .then(function(res) {
            console.log(res)
        })
    }
    render () {
        return (
            <div>
                <h1>Home hello</h1>
            </div>
        )
    }
}

export default Home