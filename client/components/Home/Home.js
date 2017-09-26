import React, { Component } from 'react'

import styles from './Home.css';

class Home extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-end " + styles.content_home}>
          <div className={"col-sm-6 " + styles.slogan}>
            <h1 className={"d-none d-sm-block " + styles.slogan}>ASDFASDFHybridiSpeksin rekrytilaisuus<br /><span className={styles.date}>26.9.</span><br />@ARC 1, Arcanum</h1>
            <h1 className="d-sm-none">HybridiSpeksin rekrytilaisuusDGSBSDGB<br />26.9.<br />@ARC 1, Arcanum</h1>
          </div>
        </div>
        <div className={"row align-items-end " + styles.content_speksi}>
          <div className={"col-sm-6"}>
          </div>
          <div className={"col-sm-6 " + styles.speksi_desc}>
            <h1>HybridiSpeksi</h1>
            <p>HybridiSpeksi on Turun yliopiston matemaattis-luonnontieteellisen tiedekunnan opiskelijoiden vuosittain toteuttama opiskelijateatteriproduktio.
                          Ensimmäinen HybridiSpeksi nähtiin vuonna 2015 Barker-teatterilla. Ensimmäinen speksi kantoi nimeä <strong>H.A.L.I.</strong>
            </p>
            <p>2016 Tanssiteatteri ERIn valtasi <strong>BratvaKontra</strong>, lähitulevaisuuteen sijoittuva tiivistunnelmainen etsiväseikkailu. 2017 HybridiSpeksi siirtyi
                          Manilla-teatteriin jossa nähtiin kansallisromanttinen <strong>Kruunun Kohtalo - Kalevalan perintö</strong>
            </p>
            <h3>2018</h3>
            <p>HybridiSpeksin tuotantotiimi vuoden 2018 speksiin valittiin ennen kesää, ja töitä on tehty jo kovalla tahdilla. 26.9. järjestetään <strong>rekrytilaisuus </strong>
              Arc 1 -salissa, jossa hybridiläiset voivat hakea mukaan toteuttamaan tämän vuoden speksiä.</p>
            <h3>Speksi</h3>
            <p>Speksi on interaktiivista opiskelijateatteria. Siinä yhdistyvät käsikirjoitettu teatteri, improvisaatio ja musikaali. Yleisö voi milloin tahansa osallistua
                          esitykseen huutamalla <strong>Omstart!</strong> Huudon kuultuaan esiintyjät toteuttavat edellisen kohtauksen/ohjelmanumeron uudelleen improvisoiden.
                        </p>
          </div>
        </div>
        {/*
                <div className={"row align-items-center justify-content-center " + styles.content_contact}>
                    <div className={"col-sm-8 " + styles.contact_box}>
                        <h1>Yhteystiedot</h1>
                    </div>
                </div>
                */}
      </div>

      /*
      //Carousel under construction

      <div id="carousel" className={"carousel slide " + styles.carousel} data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className={"d-block h-100 " + styles.carousel_image} src="assets/images/carousel/1_peikot.jpg" alt="First slide"/>
            <div class="carousel-caption d-md-block">
              <h3>Otsikko 1</h3>
              <p>Alaotsikko 1</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className={"d-block " + styles.carousel_image} src="assets/images/carousel/2_ilmari1.jpg" alt="Second slide"/>
            <div class="carousel-caption d-none d-md-block text-left">
              <h3>Otsikko 2</h3>
              <p>Alaotsikko 2</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className={"d-block w-100 " + styles.carousel_image} src="assets/images/carousel/3_ilmari2.jpg" alt="Third slide"/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Otsikko 3</h3>
              <p>Alaotsikko 3</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      */

    )
  }
}

export default Home