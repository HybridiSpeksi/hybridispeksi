import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Yhdistys.css';

class Saannot extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div className={'row align-items-center justify-content-center ' + styles.header}>
          <div className="col-sm-10 col-11">
            <h2 className="">Säännöt</h2>
          </div>
        </div>
        <div className={'row justify-content-center ' + styles.content}>
          <div className={"col-11 col-sm-10 col-md-10 " + styles.saannotJaSeloste}>
            {/*<p className={"d-block text-center material-icons " + styles.infoicon}>info_outline</p>*/}
            <h3>HYBRIDISPEKSI RY <br/>
            YHDISTYKSEN SÄÄNNÖT</h3>
            <h4>1§</h4>
            <p>Yhdistyksen nimi on HybridiSpeksi ja sen kotipaikka on Turku. Yhdistyksen kieli on suomi.</p>
            <h4>2§ Yhdistyksen tarkoitus</h4>
            <p>Yhdistyksen tarkoituksena on järjestää harrastustoimintaa Turun yliopiston matemaattis-luonnontieteellisen tiedekunnan 
            opiskelijoille ja toteuttaa vuosittain teatteriproduktio yhdistyksen jäsenten kesken.</p>
            <h4>3§ Yhdistyksen toiminnan laatu</h4>
            <p>Tarkoituksensa toteuttamiseksi yhdistys järjestää yhteistoimintaa ja illanviettoja jäsenistölleen. Yhdistys suunnittelee ja 
            toteuttaa teatteriproduktion, joka esitetään yhdistyksen ulkopuolisille henkilöille.</p>
            <p>Toimintansa tukemiseksi yhdistys voi toimeenpanna asianmukaisen luvan saatuaan rahan-keräyksiä järjestääkseen 
            huvitilaisuuksia, sekä omistaa toimintaansa varten tarpeellista kiinteää, irtainta sekä aineetonta omaisuutta. 
            Yhdistys voi ottaa vastaan avustuksia ja lahjoituksia. Produktion päätteeksi järjestetään teatteriesitykset, joihin yhdistys 
            kerää yhdistyksen ulkopuolisilta katsojilta lipputuloja menojen kattamiseksi. Yhdistys on voittoa tavoittelematon.</p>
            <h4>4§ Yhdistyksen jäsenet</h4>
            <p>Yhdistyksen jäseneksi voi liittyä jokainen HybridiSpeksi-produktioon osallistuva. Yhdistys pitää yllä jäsenrekisteriä.</p>
            <h4>5§ Yhdistyksestä eroaminen</h4>
            <p>Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä kirjallisesti hallitukselle tai 
            sen puheenjohtajalle taikka ilmoittamalla erosta yhdistyksen kokouksessa merkittäväksi pöytäkirjaan. 
            Hallitus voi erottaa jäsenen yhdistyksestä, jos jäsen on jättänyt täyttämättä ne velvoitukset, joihin 
            hän on yhdistykseen liittymällä sitoutunut tai on menettelyllään yhdistyksessä tai sen ulkopuolella 
            huomattavasti vahingoittanut yhdistystä tai ei enää täytä laissa taikka yhdistyksen säännöissä mainittuja 
            jäsenyyden ehtoja.</p>
            <h4>6§ Jäsenmaksun määräytyminen</h4>
            <p>Vuotuisen jäsenmaksun perimisestä ja suuruudesta päättää kevätkokous.</p>
            <h4>7§ Hallitus</h4>
            <p>Yhdistyksen toimeenpanevana elimenä on ja yhdistystä edustaa hallitus, johon 
            kuuluvat kevätkokouksessa valitut puheenjohtaja, varapuheenjohtaja, sihteeri, 
            taloudenhoitaja ja nollasta (0) kolmeen (3) muuta jäsentä. Hallituksen toimikausi on 
            vuoden mittainen kesäkuun 1. päivästä seuraavan vuoden toukokuun 31. päivään. Hallituksen 
            vastaavuusalueita ja toimintaa ohjaa kevätkokouksessa vahvistettu hallituksen johtosääntö. 
            Johtosäännön muutokset hyväksyy yhdistyksen kokous 2/3 äänten enemmistöllä. Tarpeen mukaan 
            hallitus voi valita muita virkailijoita keskuudestaan tai hallituksen ulkopuolelta yhdistyksen 
            jäsenistä, muihin kuin hallituksen tehtäviin. Hallituksen toimintasuunnitelman vahvistaa yhdistyksen kokous.</p>
            <p>Hallitus kokoontuu puheenjohtajan tai hänen estyneenä ollessaan varapuheenjohtajan kutsusta, 
            kun he katsovat siihen olevan aihetta tai kun vähintään puolet (½) hallituksen jäsenistä 
            sitä vaatii kuitenkin vähintään kerran (1) kuukaudessa muiden paitsi touko-, kesä-, heinä- ja elokuun 
            aikana. Päätökset hallituksen kokouksissa tehdään yksinkertaisella äänten enemmistöllä. Äänten mennessä 
            tasan ratkaisee puheenjohtajan ääni, paitsi vaaleissa arpa. Hallitus on päätösvaltainen, kun puheenjohtaja 
            tai varapuheenjohtaja ja vähintään puolet (½) sen jäsenistä on paikalla.</p>
            <p>Hallituksen jäsen voi erota hallituksesta kesken kauden toimittamalla hallitukselle 
            kirjallisen eroanomuksen. Mikäli hallituksen jäsen eroaa kesken kauden, on hallituksen 
            kutsuttava koolle yhdistyksen ylimääräinen kokous neljäntoista (14) vuorokauden kuluessa siitä, 
            kun eroanomus on tuotu esiin hallituksen kokouksessa. Yhdistyksen kokous myöntää eron ja valitsee 
            eronneen tilalle uuden edustajan.</p>
            <h4>8§ Yhdistyksen nimen kirjoittaminen</h4>
            <p>Yhdistyksen nimen kirjoittaa hallituksen puheenjohtaja yhdessä sihteerin tai taloudenhoitajan kanssa.</p>
            <h4>9§ Yhdistyksen tilikausi</h4>
            <p>Yhdistyksen tilikausi on vuosi, kesäkuun 1. päivästä seuraavan vuoden toukokuun 31. päivään. 
            Yhdistyksen tilejä tarkastamaan valitaan vuosikokouksessa vuodeksi kerrallaan yksi (1) toiminnantarkastaja ja varamies. 
            Tilinpäätös ja vuosikertomus on annettava toiminnantarkastajalle viimeistään kaksi (2) viikkoa ennen syyskokousta. 
            Toiminnantarkastajan tulee antaa kirjallinen lausuntonsa hallitukselle yhden (1) viikon kuluessa 
            asiakirjojen vastaanottamisesta.</p>
            <h4>10§ Yhdistyksen kokous</h4>
            <p>Yhdistyksen ylintä päätäntävaltaa käyttää yhdistyksen kokous. Varsinaisia kokouksia ovat 
            toukokuussa pidettävä yhdistyksen kevätkokous ja elokuussa pidettävä yhdistyksen syyskokous 
            hallituksen määrääminä päivinä. Ylimääräinen kokous on kutsuttava koolle, mikäli vähintään 1/10 
            yhdistyksen äänioikeutetuista jäsenistä esittää sitä koskevan pyynnön kirjallisesti hallitukselle 
            tai mikäli hallitus taikka yhdistyksen kokous katsoo kokouksen järjestämisen aiheelliseksi. Ylimääräinen 
            kokous on pidettävä yhden (1) kuukauden kuluessa kirjallisen pyynnön jättämisestä.</p>
            <p>Yhdistyksen kokouksissa on jokaisella jäsenellä (1) ääni. Yhdistyksen kokouksen 
            päätökseksi tulee, ellei säännöissä ole toisin määrätty, se mielipide, jota on kannattanut 
            yli puolet (½) annetuista äänistä. Äänten mennessä tasan ratkaisee kokouksen puheenjohtajan mielipide, 
            vaaleissa kuitenkin arpa. Esityslistalla oleva asia voidaan panna pöydälle, mikäli pöydällepanoa koskevaa 
            ehdotusta kannattaa kaksi (2) äänivaltaista jäsentä. Kiireelliseksi asia voidaan julistaa 2/3 äänten enemmistöllä.</p>
            <h4>11§ Yhdistyksen kokousten koollekutsuminen</h4>
            <p>Yhdistyksen kokoukset kutsutaan koolle hallituksen toimesta vähintään seitsemän (7) päivää 
            ennen kokousta sähköpostitse yhdistyksen jäsenistön sähköpostilistalla taikka yhdistyksen internetsivustolla.</p>
            <h4>12§ Yhdistyksen syys- ja kevätkokouksessa käsiteltävät asiat</h4>
            <p>Yhdistyksen kevätkokouksessa käsitellään seuraavat asiat:</p>
            <ol>
              <li>Kokouksen avaus</li>
              <li>Valitaan kokouksen puheenjohtaja, sihteeri, kaksi (2) pöytäkirjantarkastajaa ja tarvittaessa kaksi (2) ääntenlaskijaa.</li>
              <li>Todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
              <li>Hyväksytään kokouksen työjärjestys</li>
              <li>Vahvistetaan toimintasuunnitelma sekä tulo- ja menoarvio</li>
              <li>Valitaan hallituksen puheenjohtaja, varapuheenjohtaja, sihteeri, taloudenhoitaja ja muut jäsenet</li>
              <li>Valitaan yksi (1) toiminnantarkastaja ja yksi (1) varatoiminnantarkastaja</li>
              <li>Käsitellään muut kokoustaessa mainitut asiat</li>
            </ol>
            <p>Yhdistyksen syyskokouksessa käsitellään seuraavat asiat:</p>
            <ol>
              <li>Kokouksen avaus</li>
              <li>Valitaan kokouksen puheenjohtaja, sihteeri, kaksi (2) pöytäkirjantarkastajaa ja tarvittaessa kaksi (2) ääntenlaskijaa</li>
              <li>Todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
              <li>Hyväksytään kokouksen työjärjestys</li>
              <li>Esitetään tilinpäätös, vuosikertomus ja toiminnantarkastajan lausunto</li>
              <li>Päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden myöntämisestä hallitukselle ja muille vastuuvelvollisille</li>
              <li>Käsitellään muut kokouskutsussa mainitut asiat</li>
            </ol>
            <h4>13§ Yhdistyksen sääntöjen muuttaminen</h4>
            <p>Yhdistyksen sääntöjä voidaan muuttaa yhdistyksen kokouksessa, 
            jos muutoksesta on mainittu kokouskutsussa ja jos muutosta kannattaa vähintään ¾ äänestyksessä annetuissa äänistä.</p>
            <h4>14§ Yhdistyksen purkaminen</h4>
            <p>Päätös yhdistyksen purkamisesta on tehtävä kahdessa (2) peräkkäisessä vähintään yhden (1) 
            kuukauden väliajalla pidetyssä yhdistyksen kokouksessa, jolloin ehdotuksen kummassakin kokouksessa 
            on saavutettava ¾ äänten enemmistö annetuista äänistä käydäkseen kokouksen päätöksestä.</p>
            <h4>15§ Varojen käyttö yhdistyksen purkautuessa</h4>
            <p>Yhdistyksen purkautuessa tai tullessa lakkautetuksi luovutetaan yhdistyksen varat 
            ja omaisuus Turun yliopistolle käytettäväksi matemaattis-luonnontieteellisen tiedekunnan hyväksi.</p>
            <h4>16§</h4>
            <p>Yhdistyksen toiminnassa noudatetaan voimassa olevia yhdistyslain säännöksiä.</p>
            <h4>17§</h4>
            <p>Nämä säännöt astuvat voimaan, kun ne ovat tulleet yhdistysrekisteriin merkityksi.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Saannot;
