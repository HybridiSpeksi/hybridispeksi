import React, { Component } from 'react'

import styles from './Muutspeksit.css';

class Muutspeksit extends Component {

  componentDidMount() {
    $(window).scrollTop(0);
  }
  componentDidUpdate(){
  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-center justify-content-center " + styles.header}>
          <div className="col-8">
            <h2 className="">Turun muut speksit</h2>
            <p>Turussa toimii monia muitakin speksejä HybridiSpeksin lisäksi. Speksien välinen yhteistyö on tärkeässä roolissa esimerkiksi yhteisten tapahtumien muodossa. 
            Pidä huoli, ettet jää paitsi muista huikeista produktioista ja Turun ainutlaatuisesta speksikentästä!</p>
            </div>
        </div>

        {/* KRUUNUN KOHTALO */}
        <div className={"row align-items-center justify-content-center " + styles.content}>
          <div className={"col-md-8 col-sm-11 col-11"}>
            <a href="http://iospeksi.fi/">
              <div className={"row align-items-center justify-content-between " + styles.externallink}>
                <div className="col-sm-8 col-6">
                  <h3>I/O-speksi</h3>
                </div>
                <div className="col-sm-3 col-5 text-center">
                  <img src="/assets/images/io.svg" className={styles.linkimage} />
                </div>
              </div>
            </a>
            <a href="https://lex.fi/toiminta/spex">
              <div className={"row align-items-center justify-content-between " + styles.externallink}>
                <div className="col-sm-8 col-6">
                  <h3>LEX SPEX</h3>
                </div>
                <div className="col-sm-3 col-5 text-center">
                  <img src="/assets/images/lex.svg" className={styles.linkimage} />
                </div>
              </div>
            </a>
            <a href="https://turkuspeksi.com/">
              <div className={"row align-items-center justify-content-between " + styles.externallink}>
                <div className="col-sm-8 col-6">
                  <h3>TLKS SPEKSI</h3>
                </div>
                <div className="col-sm-3 col-5 text-center">
                  <img src="/assets/images/tlks.svg" className={styles.linkimage} />
                </div>
              </div>
            </a>
            <a href="http://www.tuky.fi/speksi/">
              <div className={"row align-items-center justify-content-between " + styles.externallink}>
                <div className="col-sm-8 col-6">
                  <h3>TuKY-Speksi</h3>
                </div>
                <div className="col-sm-3 col-5 text-center">
                  <img src="/assets/images/tuky.svg" className={styles.linkimage} />
                </div>
              </div>
            </a>
            <a href="https://spex.abo.fi/">
              <div className={"row align-items-center justify-content-between " + styles.externallink}>
                <div className="col-sm-8 col-6">
                  <h3>Akademiska Spexet <br/> vid Åbo Akademi R.F.</h3>
                </div>
                <div className="col-sm-3 col-5 text-center">
                  <img src="/assets/images/abospex.svg" className={styles.linkimage} />
                </div>
              </div>
            </a>
            <a href="https://tyyala.utu.fi/humanistispeksi/">
              <div className={"row align-items-center justify-content-between " + styles.externallink}>
                <div className="col-sm-8 col-6">
                  <h3>Turkulainen humanistispeksi</h3>
                </div>
                <div className="col-sm-3 col-5 text-center">
                  <img src="/assets/images/humanisti.svg" className={styles.linkimage} />
                </div>
              </div>
            </a>
          </div>
        </div>  
      </div>
    )
  }
}

export default Muutspeksit