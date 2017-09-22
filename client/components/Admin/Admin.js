import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../Utils/Auth';
import ajax from '../Utils/Ajax';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!auth.isUserLoggedIn) {
            location.replace('/login');
        }
    }

    componentDidMount() {
        auth.checkToken();
        
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