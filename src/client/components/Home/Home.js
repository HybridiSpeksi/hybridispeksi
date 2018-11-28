import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.css';

class Home extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div className={'row justify-content-center align-items-center ' + styles.content_home}>
          <div className={'col-sm-12 col-xl-11  align-items-center ' + styles.slogan}>
            <div className={'d-md-block align-items-center ' + styles.slogan}>
                <h1 className={styles.sloganh1}>Hybridispeksi 2019</h1>
                <p className={styles.slogandate}>
                  Ensi-ilta 27.3.<br />
                  @Manilla
                </p>
            </div>
          </div>
        </div>
        <div className={'row align-items-top justify-content-center text-center ' + styles.content_contents}>
          <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
            <Link className={styles.internallink} to="/speksit">
              <p className={'material-icons ' + styles.linkicon}>history</p>
              <h3>Aiemmat speksit</h3>
              <p className="">HybridiSpeksi on järjestetty jo vuodesta 2015! Lue lisää täältä.</p>
            </Link>
          </div>
          {/* <div className="col-sm-3 align-items-center">
          <Link to="/galleria">
            <p className={"material-icons " + styles.linkicon}>insert_photo</p>
            <h3>Kuvagalleria</h3>
            <p className="">Speksiä tehdessä on aina hyvä fiilis! Kuvat kertovat enemmän kuin tuhat sanaa ja täällä niitä kuvia voi katsella!</p>
          </Link>
          </div> */}
          <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
            <Link className={styles.internallink} to="/yhdistys">
              <p className={'material-icons ' + styles.linkicon}>face</p>
              <h3>Yhdistys</h3>
              <p className="">Kuka tekee speksissä mitäkin? Lavan tapahtumien lisäksi projektissa on suuri joukko muita  tiimejä ja tiimiläisiä.
                            Yhdistys-sivulta löydät yhteystietojen lisäksi hallituksen ja tuotantotiimin kokoonpanot.
              </p>
            </Link>
          </div>
          <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
            <Link className={styles.internallink} to="/muutspeksit">
              <p className={'material-icons ' + styles.linkicon}>local_play</p>
              <h3>Turun muut speksit</h3>
              <p className="">Speksi on opiskelijateatteria parhaimmillaan! Tutustu Turun muihin spekseihin täältä.</p>
            </Link>
          </div>
        </div>

        <div className={'row justify-content-center ' + styles.hr}>
          <div className="col-8">
            <hr />
          </div>
        </div>

        <div className={'row justify-content-center ' + styles.content_speksi}>
          <div className={'col-sm-12 ' + styles.hslogo} />
          <div className={'col-md-10 col-lg-8 col-xl-6  ' + styles.speksi_desc}>
            {/* <p className={"d-block text-center material-icons " + styles.infoicon}>info_outline</p> */}
            <h1 className={styles.otsikko}>HybridiSpeksi</h1>
            <p>HybridiSpeksi on Turun yliopiston luonnontieteiden ja tekniikan tiedekunnan opiskelijoiden vuosittain toteuttama teatteriproduktio.
            Ensimmäinen HybridiSpeksi nähtiin vuonna 2015 Barker-teatterilla.
            </p>
            <h3>2019 - 5 v. juhlavuosispeksi</h3>
            <p>Keväällä 2019 HybridiSpeksin näytökset valtaavat speksiscenen jo 
            viidettä kertaa Turun historiassa. Tulevan produktion tuotanto- ja käsikirjoitustiimi 
            valittiin ennen kesää. Rekrytilaisuus pidettiin 18.9. ja tämä viime kesäkuussa aloitettu produktio 
            saakin ensi-iltansa 27.3. Manilla-teatterilla yli sadan ahkeran speksiläisen työn tuloksena.
            </p>
            <h3>Speksi</h3>
            <p>Speksi on interaktiivista opiskelijateatteria. Siinä yhdistyvät käsikirjoitettu teatteri, improvisaatio ja musikaali.
            Esityksissä yleisö voi vaikuttaa muutoin käsikirjoitetun esityksen kulkuun huutamalla <strong>“Omstart”</strong>, jolloin edellinen toiminta, repliikki tai musiikkinumero tehdään uudelleen erilaisella tavalla improvisoiden.
            Lisää spekseistä ja niiden historiasta voi lukea esimerkiksi  <a className={styles.externallink} href="https://fi.wikipedia.org/wiki/Speksi">Wikipediasta</a>.
            </p>
          </div>
        </div>

        <div className={'row justify-content-center ' + styles.hr}>
          <div className="col-8">
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className={'col-lg-6 col-md-10 col-sm-10 ' + styles.sponsors}>
            <h2>Menossa mukana</h2>
            <div className={'col-12 ' + styles.sponsor}>
              <a href="https://www.tek.fi/fi">
                <img src="/assets/images/tek.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
