import React, { Component } from 'react'

import styles from './Vahvistus.css';

class Vahvistus extends Component {

  componentDidMount() {
    $(window).scrollTop(0);
  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-start justify-content-center " + styles.header}>
          <div className="col-sm-4 col-11">
            <h2 className="">Tervetuloa katsomaan HybridiSpeksiä 2018!</h2><br/>
            <div className="row">
              <div className="col-sm-12 col-12">
                <h4>Varauksesi tiedot:</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Nimi</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>hallitus@hybridispeksi.fi</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Sähköposti</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>FI64 5711 1320 1361 76</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Puhelin</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>2732017-8</p>
              </div>
            </div>
            <br/>
          </div>
             <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <img src="/assets/images/logo_lapinak_valk.png"/>
          </div>

        </div>
        <div className={"row justify-content-center " + styles.content}>
          <div className={"col-sm-8 col-11 "}>
            <h2>Ohjeita jatkoon</h2>
            <ol>
            <li>Sait sähköpostiin varausnumeron, jota näyttämällä pääset </li>
            <li></li>
            <li></li>
            </ol>
              
          </div>
        </div>
      </div>
    )
  }
}

export default Vahvistus