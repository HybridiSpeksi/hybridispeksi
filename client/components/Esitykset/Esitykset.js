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
              <p>Esitykset pidetään keväällä.</p>
              <p>Tästä lisää infoa myöhemmin.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Esitykset