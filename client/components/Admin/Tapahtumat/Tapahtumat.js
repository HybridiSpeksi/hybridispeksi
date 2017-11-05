import React, { Component } from 'react'

import Tapahtumavalinta from './Tapahtumavalinta';
import IlmoLista from './IlmoLista';

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
        this.haeIlmot = this.haeIlmot.bind(this);
    }

    componentDidMount() {
        ajax.sendGet('/admin/tapahtumat')
        .then(_data => {
            this.setState({tapahtumat: _data.data})
            this.setState({valittuTapahtuma: _data.data[0]})
            this.haeIlmot(_data.data[0]);
        })
        .catch(err => {
            console.log(err);
        })
    }

    valitseTapahtuma(t) {
        this.setState({valittuTapahtuma: t})
        this.haeIlmot(t);
    }

    haeIlmot(t) {
        ajax.sendGet('/admin/ilmo/' + t.value)
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
                        <h3>Valitse tapahtuma</h3>
                        <Tapahtumavalinta 
                            tapahtumat={this.state.tapahtumat}
                            valitseTapahtuma={this.valitseTapahtuma} />
                    </div>
                    <div className="col">
                        <h3>{this.state.valittuTapahtuma.name}</h3>
                        <IlmoLista 
                            ilmot={this.state.ilmot} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Tapahtumat