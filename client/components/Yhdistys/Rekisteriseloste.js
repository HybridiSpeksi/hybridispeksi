import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Yhdistys.css';

class Rekisteriseloste extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div className={'row align-items-center justify-content-center ' + styles.header}>
          <div className="col-sm-10 col-11">
            <h2 className="">Rekisteriseloste</h2>
          </div>
        </div>
        <div className={'row justify-content-center ' + styles.content}>
          <div className={"col-11 col-sm-11 col-md-10 " + styles.saannotJaSeloste}>
            {/*<p className={"d-block text-center material-icons " + styles.infoicon}>info_outline</p>*/}
            <h3>Henkilötietolaki (523/99) 10 §</h3>
            <h4>Rekisterin pitäjä</h4>
            <p>HybridiSpeksi ry<br/>
            Itäinen Pitkäkatu 16 B 63<br/>
            20520 Turku</p>
            <h4>Rekisteriasioista vastaava henkilö</h4>
            <p>HybridiSpeksi ry:n varapuheenjohtaja<br/>
            Yhteystiedot löytyvät osoitteesta https://hybridispeksi.fi/yhdistys</p>
            <h4>Rekisterin nimi</h4>
            <p>HybridiSpeksi ry  – Jäsenrekisteri</p>
            <h4>Henkilötietojen käsittelyn tarkoitus (rekisterin käyttötarkoitus)</h4>
            <p>Yhdistyksen jäsenyyksien hallinta (yhdistyslain 3. luvun 11 §:n tarkoittama jäsenluettelo)</p>
            <h4>Rekisterin tietosisältö</h4>
            <p>Rekisteri pitää sisällään jäsenen nimen, sähköpostiosoitteen, onko ylioppilaskunnan jäsen ja kotikunnan.</p>
            <h4>Säännönmukaiset tietolähteet</h4>
            <p>Kaikki jäsentiedot kerätään jäseniltä liittymisen yhteydessä.</p>
            <h4>Säännönmukaiset tietojen luovutukset ja tietojen siirto EU:n tai Euroopan talousalueen ulkopuolelle</h4>
            <p>Tietoja ei luovuteta kenellekään kolmannelle osapuolelle ilman jäsenen suostumusta.</p>
            <h4>Tietojen säilytys</h4>
            <p>Rekisteritiedot poistetaan, kun henkilö pyytää niiden poistamista lähettämällä sähköpostia rekisterissä olevasta 
            sähköpostiosoitteesta tai kirjallisesti rekisteriä hoitavalta henkilöltä.</p>
            <h4>Rekisterin suojauksen periaatteet</h4>
            <p>Rekisterin tiedot säilytetään tietojärjestelmässä, johon on pääsy vain rajatulla joukolla. Joukko pitää sisällään jäsenrekisterin ylläpidon kannalta välttämättömät henkilöt eli HybridiSpeksi 
            ry:n istuvan hallituksen (kts. ”Rekisteriasioista vastaava henkilö”). Rekisterijärjestelmä on suojattu salasanalla.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Rekisteriseloste;
