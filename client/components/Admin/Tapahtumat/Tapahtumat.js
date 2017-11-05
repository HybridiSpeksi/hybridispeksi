import React, { Component } from 'react'

import Tapahtumavalinta from './Tapahtumavalinta';

import ajax from '../../Utils/Ajax';

class Tapahtumat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tapahtumat: [],
            ilmot: [],
            valittuTapahtuma: {}
        }
    }

    componentDidMount() {
        ajax.sendGet('/admin/tapahtumat')
        .then(_data => {
            this.setState({tapahtumat: _data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Tapahtumat</h1>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-4">
                        <Tapahtumavalinta tapahtumat={this.state.tapahtumat} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Tapahtumat