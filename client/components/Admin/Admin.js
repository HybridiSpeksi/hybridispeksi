import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../Utils/Auth';
import ajax from '../Utils/Ajax';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        auth.checkToken();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <h1>HybridiSpeksi <small>tuotantopaneeli</small></h1>
            </div>
        )
    }
}

export default Admin