import React, { Component } from 'react'

import styles from './Esitykset.css';

class Esitykset extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-center " + styles.content}>
          <div className={"row justify-content-center " + styles.content_row}>
            <div className={"col-6 " + styles.esitykset_desc}>
              <h1>Esitykset</h1>
              <p>Esitykset pidetään keväällä.</p>
              <p>Tästä lisää infoa myöhemmin.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus ipsum nec imperdiet cursus. Nulla vel dui nulla. Etiam urna libero, rhoncus id finibus eget, pulvinar nec ante. In sollicitudin sem et velit posuere, et malesuada ligula venenatis. Mauris vel augue ac nisi pretium consectetur. Sed a massa ligula. Sed dapibus non ex at eleifend. Donec vel lacinia neque. Sed commodo varius massa vel lacinia.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Esitykset