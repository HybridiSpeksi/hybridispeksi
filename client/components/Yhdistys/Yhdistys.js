import React, { Component } from 'react'

import styles from './Yhdistys.css';

class Yhdistys extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-center justify-content-center " + styles.header}>
          <div className="col-sm-9 col-11">
            <h2 className="">HybridiSpeksi ry</h2><br/>
            <div className="row">
              <div className="col-sm-2 col-4">
                <p><i>Sähköposti</i></p>
              </div>
              <div className="col-sm-4 col-8">
                <p>hallitus@hybridispeksi.fi</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-4">
                <p><i>Tilinumero</i></p>
              </div>
              <div className="col-sm-4 col-8">
                <p>FI64 5711 1320 1361 76</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-4">
                <p><i>Y-tunnus</i></p>
              </div>
              <div className="col-sm-4 col-8">
                <p>2732017-8</p>
              </div>
            </div>
            <br/>
            </div>
        </div>
        <div className={"row justify-content-center " + styles.content}>
          <div className={"col-sm-8 col-11 " + styles.yhdistys_desc}>
            <div className="row">
              <div className={"col-lg-6 col-md-11"}>
                <h3 className={styles.otsikko}>Hallitus</h3>
                <div className="row">
                  <div className="col-11">
                    <p><strong>Laura Forsman</strong><br/>
                    <i>Puheenjohtaja</i><br/>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-11">
                    <p><strong>Pyry Pajunpää</strong><br/>
                    <i>Varapuheenjohtaja</i>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-11">
                    <p><strong>Maija Jortikka</strong><br/>
                    <i>Sihteeri</i>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-11">
                    <p><strong>Jenni Peuhkurinen</strong><br/>
                    <i>Taloudenhoitaja</i></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p><strong>Sampsa Vuorela</strong><br/>
                    <i>Taloudellisen tiimin vastaava</i></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p><strong>Ilmari Kautiala</strong><br/>
                    <i>Esiintyjien yhdyshenkilö</i></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p><strong>Oliver Boucht</strong><br/>
                    <i>Visuaalisen tiimin yhdyshenkilö</i></p>
                  </div>
                </div>                
              </div>
              <div className={"col-lg-6 col-md-11"}>
                <h3 className={styles.otsikko}>Tuotantotiimi</h3>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Tuottaja</p>
                    </div>
                    <div className="col-7">
                      <p>Matias Kari</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Apulaisuottaja</p>
                    </div>
                    <div className="col-7">
                      <p>Maija Jortikka</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Ohjaaja</p>
                    </div>
                    <div className="col-7">
                      <p>Ilmari Kautiala</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Apulaisohjaaja</p>
                    </div>
                    <div className="col-7">
                      <p>Milla Weckman</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Pääkoreagrafi</p>
                    </div>
                    <div className="col-7">
                      <p>Maria Nieminen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Koreagrafi</p>
                    </div>
                    <div className="col-7">
                      <p>Saara Koskela</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Kapellimestari</p>
                    </div>
                    <div className="col-7">
                      <p>Lassi Lehtinen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Käsikirjoitus</p>
                    </div>
                    <div className="col-7">
                      <p>Otto-Harald Hirvonen<br/>
                      Justus Anttila</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Lavastus</p>
                    </div>
                    <div className="col-7">
                      <p>Teppo Lindberg</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Maskeeraus</p>
                    </div>
                    <div className="col-7">
                      <p>Sini Toivola</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Puvustus</p>
                    </div>
                    <div className="col-7">
                      <p>Anna Vahlberg</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Kuvaus</p>
                    </div>
                    <div className="col-7">
                      <p>Sami Nieminen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Grafiikka</p>
                    </div>
                    <div className="col-7">
                      <p>Aleksei Myller</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Virkistys</p>
                    </div>
                    <div className="col-7">
                      <p>Oliver Boucht</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Varainhankinta</p>
                    </div>
                    <div className="col-7">
                      <p>Janita Louhelainen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Markkinointi</p>
                    </div>
                    <div className="col-7">
                      <p>Sampsa Vuorela</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Some</p>
                    </div>
                    <div className="col-7">
                      <p>Magdaleena Kupila</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Huolto</p>
                    </div>
                    <div className="col-7">
                      <p>Ela Arasola</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Äänitekniikka</p>
                    </div>
                    <div className="col-7">
                      <p>Pyry Pajunpää</p>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Valot</p>
                    </div>
                    <div className="col-7">
                      <p>-</p>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Nettisivut</p>
                    </div>
                    <div className="col-7">
                      <p>Tatu Heinonen</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Yhdistys