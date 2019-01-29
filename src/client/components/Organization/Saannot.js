import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Organization';

class Saannot extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  render() {
    return (
      <div className={'container-fluid ' + styles.container + ' ' + styles.headerPadding}>
        <div className={'row align-items-center justify-content-center ' + styles.header}>
          <div className="col-sm-10 col-11">
            <h2 className="">Säännöt</h2>
          </div>
        </div>
        <div className={'row justify-content-center ' + styles.content}>
          <div className={'col-11 col-sm-10 col-md-10 ' + styles.saannotJaSeloste}>
            {/* <p className={"d-block text-center material-icons " + styles.infoicon}>info_outline</p> */}
            <h3>HYBRIDISPEKSI RY <br />
            YHDISTYKSEN SÄÄNNÖT
            </h3>
            <h4>1§</h4>
            <p>Yhdistyksen nimi on HybridiSpeksi ja sen kotipaikka on Turku. Yhdistyksen kieli on suomi.</p>
            <h4>2§ Yhdistyksen tarkoitus</h4>
            <p>Yhdistyksen tarkoituksena on järjestää harrastustoimintaa Turun yliopiston luonnontieteiden ja tekniikan
            tiedekunnan opiskelijoille ja mahdollistaa vuosittaisen teatteriproduktion toteuttaminen tiedekunnan opiskelijoiden
            ja yhdistyksen jäsenten kesken.
            </p>
            <h4>3§ Yhdistyksen toiminnan laatu</h4>
            <p>Tarkoituksensa toteuttamiseksi yhdistys järjestää yhteistoimintaa ja illanviettoja jäsenistölleen. Yhdistyksen
            avulla suunnitellaan ja toteutetaan teatteriproduktion, joka esitetään yhdistyksen ulkopuolisille henkilöille.
            </p>
            <p>Toimintansa tukemiseksi yhdistys voi toimeenpanna asianmukaisen luvan saatuaan rahankeräyksiä järjestääkseen
            huvitilaisuuksia, sekä omistaa toimintaansa varten tarpeellista kiinteää, irtainta sekä aineetonta omaisuutta.
            Yhdistys voi ottaa vastaan avustuksia ja lahjoituksia. Produktion päätteeksi järjestetään teatteriesitykset,
            joihin yhdistys kerää yhdistyksen ulkopuolisilta katsojilta lipputuloja menojen kattamiseksi. Yhdistys on voittoa
            tavoittelematon.
            </p>
            <h4>4§ Yhdistyksen jäsenet</h4>
            <p>Yhdistyksen jäseneksi voi liittyä jokainen HybridiSpeksi-produktioon osallistuva tai yhdistyksen toiminnasta
            kiinnostunut. Yhdistys pitää yllä jäsenrekisteriä. Yhdistyksen varsinaiset jäsenet hyväksyy yhdistyksen hallitus.
            </p>
            <h4>5§ Yhdistyksestä eroaminen</h4>
            <p>Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä kirjallisesti hallitukselle tai sen puheenjohtajalle
            taikka ilmoittamalla erosta yhdistyksen kokouksessa merkittäväksi pöytäkirjaan. Hallitus voi erottaa jäsenen
            yhdistyksestä, jos jäsen on jättänyt täyttämättä ne velvoitukset, joihin hän on yhdistykseen liittymällä sitoutunut
            tai on menettelyllään yhdistyksessä tai sen ulkopuolella huomattavasti vahingoittanut yhdistystä tai ei enää täytä
            laissa taikka yhdistyksen säännöissä mainittuja jäsenyyden ehtoja.
            </p>
            <h4>6§ Jäsenmaksun määräytyminen</h4>
            <p>Vuotuisen jäsenmaksun perimisestä ja suuruudesta päättää kevätkokous.</p>
            <h4>7§ Hallituksen valinta ja muoto</h4>
            <p>Yhdistyksen hallitukseen kuuluu puheenjohtaja, varapuheenjohtaja, sihteeri, taloudenhoitaja ja nollasta
            (0) kolmeen (3) muuta jäsentä. Hallituksen toimikausi on vuoden mittainen kesäkuun ensimmäisestä päivästä
            seuraavan vuoden toukokuun viimeiseen päivään. Yhdistyksen hallituksen valitsee kevätkokous yhdistyksen
            varsinaisista jäsenistä. Yhdistys ja hallitus voivat erityisiä tehtäviä varten asettaa hallituksen alaisia
            toimikuntia ja toimihenkilöitä. Tällöin on määrättävä toimikausien pituudet, sekä toimikuntien osalta myös
            vastuuhenkilö. Yhdistys ja hallitus voivat vapauttaa nimittämänsä toimihenkilön kesken toimikauttaan.
            Hallituksen toimintasuunnitelman vahvistaa yhdistyksen kokous.
            </p>
            <h4>8§ Hallituksen yleinen toiminta</h4>
            <p>Hallitus kokoontuu puheenjohtajan tai hänen estyneenä ollessaan varapuheenjohtajan kutsusta,
            kun he katsovat siihen olevan aihetta tai kun vähintään puolet (1/2) hallituksen jäsenistä sitä
            vaatii. Päätökset hallituksen kokouksissa tehdään yksinkertaisella äänten enemmistöllä. Äänten
            mennessä tasan ratkaisee puheenjohtajan ääni, paitsi vaaleissa arpa. Hallitus on päätösvaltainen,
            kun puheenjohtaja tai varapuheenjohtaja ja vähintään puolet (1/2) sen muista jäsenistä on paikalla.
            </p>
            <h4>9§ Hallituksen tehtävät</h4>
            <p>Hallituksen tehtävänä on:</p>
            <ul>
              <li>johtaa yhdistyksen toimintaa;</li>
              <li>edustaa yhdistystä;</li>
              <li>huolehtia yhdistyksen hallintoa ja taloutta sekä valvoa sen etuja ja voimassaolevien sääntöjen
            ja määräysten noudattamista;
              </li>
              <li>kehittää yhdistyksen toimintaa;</li>
              <li>valmistella yhdistyksen kokouksissa esille tulevat asiat ja toimeenpanna niissä tehdyt päätökset;</li>
              <li>valvoa toimikuntien ja toimihenkilöiden toimintaa;</li>
              <li>laatia yhdistyksen toimintasuunnitelma ja -kertomus;</li>
              <li>laatia yhdistyksen talousarvio ja tilinpäätös;</li>
              <li>päättää jäseneksi hyväksymisestä sekä näiden erottamisesta yhdistyksestä;</li>
              <li>kouluttaa seuraava hallitus tehtäväänsä;</li>
              <li>päättää tarvittaessa muista asioista, joita ei ole määrätty yhdistyksen kokouksen päätettäväksi.</li>
            </ul>
            <h4>10§ Hallituksesta eroaminen</h4>
            <p>Hallituksen jäsen voi erota hallituksesta kesken kauden toimittamalla hallitukselle
            kirjallisen eroanomuksen. Mikäli hallituksen jäsen eroaa kesken kauden, on hallituksen
            kutsuttava koolle yhdistyksen ylimääräinen kokous neljäntoista (14) vuorokauden kuluessa
            siitä, kun eroanomus on tuotu esiin hallituksen kokouksessa. Yhdistyksen kokous myöntää
            eron ja valitsee eronneen tilalle uuden edustajan.
            </p>
            <h4>11§ Yhdistyksen nimen kirjoittaminen</h4>
            <p>Yhdistyksen nimen kirjoittaa hallituksen puheenjohtaja, sihteeri tai taloudenhoitaja
            kukin erikseen. Hallitus voi yksimielisellä päätöksellä myöntää nimenkirjoitusoikeuden
            myös muulle yhdistyksen jäsenelle.
            </p>
            <h4>12§ Yhdistyksen tilikausi</h4>
            <p>Yhdistyksen tilikausi on vuosi, kesäkuun ensimmäisestä päivästä seuraavan vuoden toukokuun
            viimeiseen päivään. Yhdistyksen tilejä tarkastamaan valitaan vuosikokouksessa vuodeksi kerrallaan
            yksi (1) toiminnantarkastaja ja varamies. Tilinpäätös ja vuosikertomus on annettava toiminnantarkastajalle
            viimeistään kaksi (2) viikkoa ennen syyskokousta. Toiminnantarkastajan tulee antaa kirjallinen lausuntonsa
            hallitukselle yhden (1) viikon kuluessa asiakirjojen vastaanottamisesta.
            </p>
            <h4>13§ Yhdistyksen kokous</h4>
            <p>Yhdistyksen ylintä päätäntävaltaa käyttää yhdistyksen kokous. Varsinaisia
            kokouksia ovat keväällä pidettävä yhdistyksen kevätkokous ja syksyllä pidettävä
            yhdistyksen syyskokous hallituksen määrääminä päivinä. Yhdistyksen kevätkokous pidetään
            viimeistään toukokuussa ja syyskokous viimeistään marraskuussa. Ylimääräinen kokous on kutsuttava
            koolle, mikäli vähintään 1/10 yhdistyksen äänioikeutetuista jäsenistä esittää sitä koskevan pyynnön
            kirjallisesti hallitukselle tai mikäli hallitus taikka yhdistyksen kokous katsoo kokouksen järjestämisen
            aiheelliseksi. Ylimääräinen kokous on pidettävä yhden (1) kuukauden kuluessa kirjallisen pyynnön jättämisestä.
            </p>
            <p>Yhdistyksen kokouksissa on jokaisella jäsenellä yksi (1) ääni. Yhdistyksen kokouksen päätökseksi tulee,
            ellei säännöissä ole toisin määrätty, se mielipide, jota on kannattanut yli puolet (1/2) annetuista äänistä.
            Äänten mennessä tasan ratkaisee kokouksen puheenjohtajan mielipide, vaaleissa kuitenkin arpa. Esityslistalla
            oleva asia voidaan panna pöydälle, mikäli pöydällepanoa koskevaa ehdotusta kannattaa kaksi (2) äänivaltaista
            jäsentä. Kiireelliseksi asia voidaan julistaa 2/3 äänten enemmistöllä.
            </p>
            <h4>14§ Yhdistyksen kokousten koollekutsuminen</h4>
            <p>Yhdistyksen kokoukset kutsutaan koolle hallituksen toimesta vähintään seitsemän (7) päivää ennen
            kokousta sähköpostitse yhdistyksen jäsenistön sähköpostilistalla taikka yhdistyksen internetsivustolla.
            </p>
            <p>Kokouskutsussa on mainittava, mikäli kokouksessa käsitellään yhdistyslain 23 §:ssä mainittuja tai
            niihin verrattavia asioita, kuten:
            </p>
            <ol>
              <li>yhdistyksen sääntöjen muuttamista;</li>
              <li>kiinteistön luovuttamista tai kiinnittämistä taikka yhdistyksen toiminnan kannalta
            huomattavan muun omaisuuden luovuttamista;
              </li>
              <li>hallituksen tai sen jäsenen taikka tilintarkastajan valitsemista tai erottamista;</li>
              <li>tilinpäätöksen vahvistamista ja vastuuvapauden myöntämistä;</li>
              <li>jäsenmaksun määräämistä tai</li>
              <li>yhdistyksen purkamista.</li>
            </ol>
            <h4>15§ Yhdistyksen syys- ja kevätkokouksessa käsiteltävät asiat</h4>
            <p>Yhdistyksen kevätkokouksessa käsitellään seuraavat asiat:</p>
            <ol>
              <li>Kokouksen avaus</li>
              <li>Valitaan kokouksen puheenjohtaja, sihteeri, kaksi (2) pöytäkirjantarkastajaa ja tarvittaessa kaksi
            (2) ääntenlaskijaa.
              </li>
              <li>Todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
              <li>Hyväksytään kokouksen työjärjestys</li>
              <li>Vahvistetaan toimintasuunnitelma sekä tulo- ja menoarvio</li>
              <li>Valitaan hallituksen puheenjohtaja, varapuheenjohtaja, sihteeri, taloudenhoitaja ja muut jäsenet</li>
              <li>Valitaan yksi (1) toiminnantarkastaja ja yksi (1) varatoiminnantarkastaja</li>
              <li>Käsitellään muut kokouskutsussa mainitut asiat</li>
            </ol>
            <p>Yhdistyksen syyskokouksessa käsitellään seuraavat asiat:</p>
            <ol>
              <li>Kokouksen avaus</li>
              <li>Valitaan kokouksen puheenjohtaja, sihteeri, kaksi (2) pöytäkirjantarkastajaa ja tarvittaessa kaksi
            (2) ääntenlaskijaa
              </li>
              <li>Todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
              <li>Hyväksytään kokouksen työjärjestys</li>
              <li>Esitetään tilinpäätös, vuosikertomus ja toiminnantarkastajan lausunto</li>
              <li>Päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden myöntämisestä hallitukselle ja muille vastuuvelvollisille</li>
              <li>Käsitellään muut kokouskutsussa mainitut asiat</li>
            </ol>
            <h4>16§ Yhdistyksen sääntöjen muuttaminen</h4>
            <p>Yhdistyksen sääntöjä voidaan muuttaa yhdistyksen kokouksessa, jos muutoksesta on mainittu
            kokouskutsussa ja jos muutosta kannattaa vähintään 3/4 äänestyksessä annetuissa äänistä.
            </p>
            <h4>17§ Yhdistyksen purkaminen</h4>
            <p>Päätös yhdistyksen purkamisesta on tehtävä kahdessa (2) peräkkäisessä vähintään yhden (1)
            kuukauden väliajalla pidetyssä yhdistyksen kokouksessa, jolloin ehdotuksen kummassakin kokouksessa
            on saavutettava 3/4 äänten enemmistö annetuista äänistä käydäkseen kokouksen päätöksestä.
            </p>
            <h4>18§ Varojen käyttö yhdistyksen purkautuessa</h4>
            <p>Yhdistyksen purkautuessa tai tullessa lakkautetuksi luovutetaan yhdistyksen varat
            ja omaisuus Turun yliopistolle käytettäväksi luonnontieteiden ja tekniikan tiedekunnan hyväksi.
            </p>
            <h4>19§</h4>
            <p>Yhdistyksen toiminnassa noudatetaan voimassa olevia yhdistyslain säännöksiä.</p>
            <h4>20§</h4>
            <p>Nämä säännöt astuvat voimaan, kun ne ovat tulleet yhdistysrekisteriin merkityksi.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Saannot;
