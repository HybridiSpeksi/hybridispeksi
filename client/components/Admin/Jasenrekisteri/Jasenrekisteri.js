import React, { Component } from 'react'
import ajax from '../../Utils/Ajax';

import List from './List'
import Jasentiedot from './Jasentiedot'

class Jasenrekisteri extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jasenet: [],
            valittuJasen: {}
        }

        this.teeHaut = this.teeHaut.bind(this);
        this.valitseJasen = this.valitseJasen.bind(this);
    }

    componentDidMount() {
        this.teeHaut();
    }

    valitseJasen(jasen) {
        this.setState({ valittuJasen: jasen })
    }

    teeHaut() {
        ajax.sendGet('/admin/h/jasenrekisteri')
            .then(j => {
                this.setState({ jasenet: j.data })
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
                    <div className="col-sm-6">
                        <List
                            jasenet={this.state.jasenet}
                            valitseJasen={this.valitseJasen} />
                    </div>
                    <div className="col-sm-6">
                        {this.state.valittuJasen._id ? (
                            <Jasentiedot jasen={this.state.valitseJasen} />
                        ): ""}
                    </div>
                </div>
            </div>
        )
    }
}

export default Jasenrekisteri

haeJasenet: () => {

}