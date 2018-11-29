import React from 'react';

import styles from './Home.css';

const HybridiSpeksiAbout = () => (
  <div className={'row justify-content-center ' + styles.content_speksi}>
    <div className={'col-sm-12 ' + styles.hslogo} />
    <div className={'col-md-10 col-lg-8 col-xl-6  ' + styles.speksi_desc}>
      {/* <p className={"d-block text-center material-icons " + styles.infoicon}>info_outline</p> */}
      <h1 className={styles.otsikko}>HybridiSpeksi</h1>
      <p>HybridiSpeksi on Turun yliopiston luonnontieteiden
        ja tekniikan tiedekunnan opiskelijoiden vuosittain toteuttama teatteriproduktio.
        Ensimmäinen HybridiSpeksi nähtiin vuonna 2015 Barker-teatterilla.
      </p>
      <h3>2019 - 5 v. juhlavuosispeksi</h3>
      <p>Keväällä 2019 HybridiSpeksin näytökset valtaavat speksiscenen jo
        viidettä kertaa Turun historiassa. Tulevan produktion tuotanto- ja käsikirjoitustiimi
        valittiin ennen kesää. Rekrytilaisuus pidettiin 18.9.
        ja tämä viime kesäkuussa aloitettu produktio
        saakin ensi-iltansa 27.3. Manilla-teatterilla yli sadan ahkeran speksiläisen työn tuloksena.
      </p>
      <h3>Speksi</h3>
      <p>Speksi on interaktiivista opiskelijateatteria.
        Siinä yhdistyvät käsikirjoitettu teatteri, improvisaatio ja musikaali.
        Esityksissä yleisö voi vaikuttaa muutoin käsikirjoitetun esityksen kulkuun huutamalla
        <strong>“Omstart”</strong>, jolloin edellinen toiminta, repliikki tai musiikkinumero
        tehdään uudelleen erilaisella tavalla improvisoiden.
        Lisää spekseistä ja niiden historiasta voi lukea esimerkiksi
        <a className={styles.externallink} href="https://fi.wikipedia.org/wiki/Speksi">Wikipediasta</a>.
      </p>
    </div>
  </div>
);

export default HybridiSpeksiAbout;
