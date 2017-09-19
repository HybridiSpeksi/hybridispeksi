import React, { Component } from 'react'

import styles from './Home.css';

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
            <div className={"container-fluid " + this.props.globalStyles.test}>
                <h1>Home hello</h1>
            </div>
        )
    }
}

export default Home