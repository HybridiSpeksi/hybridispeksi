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
            <div className={"col-sm-6 col-11 text-center " + styles.esitykset_desc}>
              <h1>Esitykset</h1>
              <br/>
              <p>Esitykset pidetään keväällä. Tästä lisää infoa myöhemmin. </p>
              <p>Kannattaa kuitenkin seurata HybridiSpeksiä Facebookissa ja Instagramissa!</p>
              <h3>Stay tuned!</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Esitykset