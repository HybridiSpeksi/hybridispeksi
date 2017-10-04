import React, { Component } from 'react'

import auth from '../../Utils/Auth';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';
// import utils from '../../Utils/Utils'

class Kayttajat extends Component {
    constructor(props) {
        super(props)

        this.teeHaut = this.teeHaut.bind(this);
    }

    componentDidMount() {
        this.teeHaut();
    }

    teeHaut() {

    }

    render () {
        return (
            <div>
                <h1>Käyttäjät</h1>
            </div>
        )
    }
}

export default Kayttajat