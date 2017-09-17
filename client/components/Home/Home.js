import React, { Component } from 'react'

class Home extends Component {
    
    componentDidMount() {
        console.log("asdf")
        fetch('/api', function(res) {

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