import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import styles from './Home.css';

class Home extends Component {

  componentDidMount() {
  }
  componentDidUpdate(){
    $(window).scrollTop();
  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row justify-content-center " + styles.content_home}>
          <div className={"col-sm-8 " + styles.slogan}>
            <div className={"d-md-block " + styles.slogan}>
              <h2>HYBRIDISPEKSI</h2>
              <h2 className={styles.year}>2018</h2>
              <h2 className={styles.date}>ENSI-ILTA 27.3.</h2>
            </div>
          </div>
        </div>
        <div className={"row align-items-top justify-content-center text-center " + styles.content_contents}>
          <div className={"col-sm-3 align-items-center " + styles.internallink}>
          <Link className={styles.internallink} to="/speksit">
            <p className={"material-icons " + styles.linkicon}>history</p>
            <h3>Aiemmat speksit</h3>
            <p className="">HybridiSpeksi on järjestetty jo kolme kertaa. Näistä aiemmista speksistä voit lukea lisää täältä!</p>
          </Link>
          </div>
          {/*<div className="col-sm-3 align-items-center">
          <Link to="/galleria">
            <p className={"material-icons " + styles.linkicon}>insert_photo</p>
            <h3>Kuvagalleria</h3>
            <p className="">Speksiä tehdessä on aina hyvä fiilis! Kuvat kertovat enemmän kuin tuhat sanaa ja täällä niitä kuvia voi katsella!</p>
          </Link>
          </div>*/}
          <div className={"col-sm-3 align-items-center " + styles.internallink}>
          <Link className={styles.internallink} to="/yhdistys">
            <p className={"material-icons " + styles.linkicon}>face</p>
            <h3>Yhdistys</h3>
            <p className="">Haluatko tietää, ketä tekee speksissä mitäkin? Yhdistys-sivulta löytyvät yhteystiedot ja hallituksen sekä tuotannon henkilöt!</p>
          </Link>
          </div>
          <div className={"col-sm-3 align-items-center " + styles.internallink}>
          <Link className={styles.internallink} to="/muutspeksit">
            <p className={"material-icons " + styles.linkicon}>record_voice_over</p>
            <h3>Muut speksit</h3>
            <p className="">Jos opiskelijateatteri kiinnostaa, kannattaa tutustua myös Turun muihin spekseihin!</p>
          </Link>
          </div>
        </div>
        <div className={"row justify-content-center " + styles.content_speksi}>
          <div className={"col-sm-6 " + styles.speksi_desc}>
            <p className={"d-block text-center material-icons " + styles.infoicon}>info_outline</p>
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