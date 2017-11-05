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

        this.valitseTapahtuma = this.valitseTapahtuma.bind(this);
    }

    componentDidMount() {
        ajax.sendGet('/admin/tapahtumat')
        .then(_data => {
            this.setState({tapahtumat: _data.data})
            this.setState({valittuTapahtuma: _data.data})
            this.haeIlmot();
        })
        .catch(err => {
            console.log(err);
        })
    }

    valitseTapahtuma(t) {
        console.log(t)
        this.setState({valittuTapahtuma: t});
    }

    haeIlmot() {
        ajax.sendGet('/admin/ilmo')
        .then(_data => {
            this.setState({ilmot: _data.data})
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
                        <Tapahtumavalinta 
                            tapahtumat={this.state.tapahtumat}
                            valitseTapahtuma={this.valitseTapahtuma} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Tapahtumat