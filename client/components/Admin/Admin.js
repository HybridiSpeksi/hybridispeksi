import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../Utils/Auth';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (false) {
            location.replace('/login');
        }
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