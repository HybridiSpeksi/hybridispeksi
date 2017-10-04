import React, { Component } from 'react'

import auth from '../../Utils/Auth';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';
// import utils from '../../Utils/Utils'

import Kayttajalista from './Kayttajalista';

class Kayttajat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kayttajat: []
        }
        this.teeHaut = this.teeHaut.bind(this);
    }

    componentDidMount() {
        this.teeHaut();
    }

    teeHaut() {
        ajax.sendGet('/admin/w/kayttajat')
        .then(k => {
            this.setState({kayttajat: k.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render () {
        return (
            <div className="container-fluid">
                <h1>Käyttäjät</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <Kayttajalista kayttajat={this.state.kayttajat} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Kayttajat