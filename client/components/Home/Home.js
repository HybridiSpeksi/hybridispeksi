import React, { Component } from 'react'

import styles from './Home.css';

class Home extends Component {

    componentDidMount() {

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