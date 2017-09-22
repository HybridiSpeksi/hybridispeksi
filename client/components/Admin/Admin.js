import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../Utils/Auth';
import ajax from '../Utils/Ajax';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (false) {
            location.replace('/login');
        }
        ajax.sendGet('/admin/kayttajat')
        .then(data => {
            console.log(data);
        }) 
        .catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        console.log(this.props.test)
        fetch('/api/')
    }

    render() {
        return (
            <div>
                <h1>Admin</h1>
            </div>
        )
    }
}

export default Admin