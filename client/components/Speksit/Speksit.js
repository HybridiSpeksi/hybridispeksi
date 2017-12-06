import React, { Component } from 'react'

import styles from './Speksit.css';

class Speksit extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-center justify-content-center " + styles.header}>
          <div className="col-9">
            <h2 className="">Aiemmat speksit</h2>
            <p>HybridiSpeksi on Turun yliopiston matemaattis-luonnontieteellisen 
            tiedekunnan opiskelijoiden vuosittain toteuttama opiskelijateatteriproduktio. 
            Ensimmäinen HybridiSpeksi nähtiin vuonna 2015 Barker-teatterilla. Ensimmäinen speksi kantoi nimeä <strong>H.A.L.I.</strong></p>
            <p>2016 Tanssiteatteri ERIn valtasi <strong>BratvaKontra</strong>, lähitulevaisuuteen sijoittuva tiivistunnelmainen etsiväseikkailu. 
            2017 HybridiSpeksi siirtyi Manilla-teatteriin jossa nähtiin kansallisromanttinen <strong>Kruunun Kohtalo - Kalevalan perintö.</strong></p>
          </div>
        </div>

        {/* KRUUNUN KOHTALO */}
        <div className={"row align-items-center justify-content-center " + styles.content_kruunu}>
          <div className={"col-md-5 col-sm-11 " + styles.polaroid_kruunu_container}>
            <div className={styles.polaroid_kruunu}>
              <img src="assets/images/hs17.jpg"/>
              <div className={styles.polaroid_kruunu_desc}>
                <p>Väinämöinen antaa kitaran laulaa</p>
              </div>
            </div>
          </div>
          <div className={"col-md-5 col-sm-11 " + styles.kruunu_desc}>
            <h1 className={styles.font_kruunu_header}>Kruunun kohtalo <br/>&nbsp;&ndash; Kalevalan perintö</h1>
            <p className={styles.font_kruunu}>Kalevalan lopussa Louhi on kukistettu ja Karjalassa on viimein rauha. Väinämöinen on lähtenyt Karjalasta 
            ja jatkanut matkaansa muihin seikkailuihin jättäen velhoneuvoston huolehtimaan kruunusta. 
            Kylän neito Marjatta syö puolukan ja tulee raskaaksi. Ennustuksen mukaan Marjatan lapsesta, 
            Puolukasta, on tuleva Karjalan hallitsija. Velhoneuvosto auttaa Marjattaa kasvattamaan Puolukan 
            opettaen häntä hallitsijan rooliin.</p>
            <p className={styles.font_kruunu}>Puolukan saavutettua täysi-ikäisyyden, koko kansa valmistautuu hänen kruunajaisiinsa. 
            Kaikki on valmiina. Kruunajaiset voivat alkaa!</p>
            
            <p className={styles.font_kruunu}><strong>SEIS!</strong></p> 
            <p className={styles.font_kruunu}>“Entä kruununperillisen tulikoe?”</p>
            <br/>
            <p>HybridiSpeksi 2017: Kruunun kohtalo &ndash; Kalevalan perintö herätti henkiin kauan sitten unohdetun kansantarun, 
            kertoen Suomen kansalliseepoksen, Kalevalan, jälkeisistä tapahtumista. 
            Saunan täydeltä tervaisia sankareita, suomalaista sisua ja astetta enemmän kansalliserotiikkaa!</p>
          </div>
        </div>

        {/* BRATVAKONTRA */}
        <div className={"row align-items-center justify-content-center " + styles.content_bratva}>
          <div className={"col-md-5 col-sm-11 " + styles.bratva_desc}>
            <h1 className={styles.font_bratva_header}>BratvaKontra</h1>
            <p className={styles.font_bratva}>Kolme nuorta on kateissa. Tilanne on toki ikävä, enkä saisi elätellä
            liian suuria toiveita, mutta tämän ansiosta saatan vihdoin edetä
            tutkinnassani. BratvaKontra toimii yleensä harkitusti, eikä ole
            aikaisemmin jättänyt mitään pitäviä todisteita lainvastaisesta
            toiminnastaan.</p>
            <p className={styles.font_bratva}>Vaikken voi suoraan osoittaa yhteyttä kadonneiden nuorten ja
            BratvaKontran välillä, viimeaikaiset tapahtumat viittaavat heidän
            käyttävän näitä nuoria tavotteidensa saavuttamiseksi. Miksi BratvaKontra
            poikkeaa kaavastaan? Mihin kylmän laskelmoivasti toimiva rikollisliiga
            heitä tarvitsee?</p>
            <p className={styles.font_bratva}>En tiedä. Vielä.</p>
            <p className={styles.font_bratva}>Etsivä Saarnion muistiinpanot.<br/>
            28.01. vuosi 21 jsk.</p>
            <br/>
            <p>Historian toinen HybridiSpeksi sai ensi-iltansa 1.4.2016 tanssiteatteri
            ERI:ssä. HybridiSpeksi 2016 toi näyttämölle verellä, salajuonilla ja
            huumorilla terästetyn toiminnallisen jännitysnäytelmän
            opiskelijakolmikosta alamaailman rikoshelvetissä.</p>
          </div>
          <div className={"col-md-5 col-sm-11 d-flex justify-content-end " + styles.polaroid_bratva_container}>
            <div className={"justify-content-end " + styles.polaroid_bratva}>
              <img src="assets/images/hs16.jpg"/>
              <div className={styles.polaroid_bratva_desc}>
                <p>"I will break you"</p>
              </div>
            </div>
          </div>
        </div>


        {/* H.A.L.I */}
        <div className={"row align-items-center justify-content-center " + styles.content_hali}>
          <div className={"col-md-5 col-sm-11 " + styles.polaroid_hali_container}>
            <div className={styles.polaroid_hali}>
              <img src="assets/images/hs15.jpg"/>
              <div className={styles.polaroid_hali_desc}>
                <p>Hyvinvointia ja Avunantoa Lainkuuliaisille Ihmisille</p>
              </div>
            </div>
          </div>
          <div className={"col-md-5 col-sm-11 " + styles.hali_desc}>
            <h1>H.A.L.I.</h1>
            <p className={styles.font_hali}>Turun yliopiston huippututkija Viktor Salaoja ja hänen assistenttinsa
            kehittävät Turun yliopiston hämyisissä työhuoneissa ratkaisuja monenlaisiin
            yhteiskunnassa vastaan tulleisiin ongelmiin.</p>
            <p className={styles.font_hali}>Samaan aikaan kaupungilla Hyvinvointia ja Avunantoa Lainkuuliaisille
            Ihmisille -puolue (H.A.L.I.) tekee kiihkeää kampanjatyötä ja valmistautuu
            edessä oleviin kunnanvaltuuston vaaleihin.</p>
            <p className={styles.font_hali}>Kun H.A.L.I. pääsee vallankahvaan kiinni, joutuu Viktor tiimeineen keskelle
            myrskyä. Tieteellinen huippututkimus valjastetaan poliittisen
            päätäntäkoneiston osaksi tuomaan absoluuttista tasa-arvoa ihmisten
            elämään. Minkälaisia vaikutuksia on Kauppatorilla riehuvalla tornadolla tai
            Ruissalon uusilla surffauskeleillä? Miltä tuntuisi päästä lomailemaan etelän
            lämpöön ihan kaupunkiliikenteen bussilla? Entä miten pakollinen halaus
            ihmisten kohdatessa vaikuttaa tasa-arvoistamiseen? Minkälaista
            uudelleenkoulutusta Muumimaailmassa annetaankaan?</p>
            <br/>
            <p>Ensimmäinen HybridiSpeksi saapui näyttämölle rennosti kantaaottavan ja opiskelijaromantiikallakin höystetyn 
            toimintakomedian kanssa keväällä 2015.</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Speksit