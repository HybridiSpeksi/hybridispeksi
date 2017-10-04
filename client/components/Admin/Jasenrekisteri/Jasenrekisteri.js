import React, { Component } from 'react'
import ajax from '../../Utils/Ajax';

import List from './List'

class Jasenrekisteri extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jasenet: [],

        }

        this.haeJasenet = this.haeJasenet.bind(this);
    }

    componentDidMount() {
        this.haeJasenet();
    }

    valitseJasen(jasen) {
        this.setState({valittuJasen: jasen})
    }

    haeJasenet() {
        ajax.sendGet('/admin/h/jasenrekisteri')
        .then(j => {
            this.setState({jasenet: j.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Jäsenrekisteri</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <List jasenet={this.state.jasenet} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Jasenrekisteri

haeJasenet: () => {
    
}