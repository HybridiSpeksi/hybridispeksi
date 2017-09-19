import React, { Component } from 'react'

import styles from './Home.css';

class Home extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className={"container-fluid " + styles.container}>
            	<div className="row align-self-end">
            		<div className="col-sm-6">
                		<h1>Home hello asdasdas</h1>
                	</div>
                </div>
            </div>
        )
    }
}

export default Home