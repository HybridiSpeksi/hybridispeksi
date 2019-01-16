import React, { Component } from 'react';
import CarouselContainer from './Carousel';
import styles from './Speksit.css';

class Speksit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // images2018: {
      //   year: 2018,
      //   numberOfImages: 10,
      // },
      // images2017: {
      //   year: 2017,
      //   numberOfImages: 6,
      // },
      // images2016: {
      //   year: 2016,
      //   numberOfImages: 1,
      // },
      // images2015: {
      //   year: 2015,
      //   numberOfImages: 1,
      // },
    };
  }
  componentDidMount() {
    $(window).scrollTop(0);
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div className={'row align-items-center justify-content-center ' + styles.header}>
          <div className="col-10">
            <h2 className="">Aiemmat speksit</h2>
            <p>HybridiSpeksi on Turun yliopiston matemaattis-luonnontieteellisen
            tiedekunnan opiskelijoiden vuosittain toteuttama opiskelijateatteriproduktio.
            Ensimmäinen HybridiSpeksi nähtiin vuonna 2015 Barker-teatterilla.
            Ensimmäinen speksi kantoi nimeä <strong>H.A.L.I.</strong>
            </p>
            <p>2016 Tanssiteatteri ERIn valtasi <strong>BratvaKontra</strong>,
            lähitulevaisuuteen sijoittuva tiivistunnelmainen etsiväseikkailu.
            2017 HybridiSpeksi siirtyi Manilla-teatteriin jossa nähtiin kansallisromanttinen
              <strong> Kruunun Kohtalo - Kalevalan perintö.</strong>
            </p>
            <p>Vuonna 2018 HybridiSpeksi jatkoi nousevaa uraansa Manilla-teatterilla, kun
            esiripun takaa paljastui villi länsi ja näytös <strong>Älä Ammu Ohi</strong>.
            </p>
          </div>
        </div>

        {/* ÄLÄ AMMU OHI */}
        <div className={'row align-items-center justify-content-center ' + styles.content_alaammuohi}>
          <div className={'col-lg-5 col-sm-11 ' + styles.alaammuohi_desc}>
            <h1 className={styles.font_alaammuohi_header}>Älä Ammu Ohi</h1>
            <p className={styles.font_alaammuohi}>
              Villin lännen kuumimmalla aavikolla on pieni kylä keskellä preeriaa. Tuomari Martin
              pitää yllä järjestystä lakikirjalla ja hirttosilmukalla, samalla ryysyistä rikkauksiin
              kohonnut Alexandra hallitsee kyläläisten kukkaroita ja himoja. Kaikkien rakastama
              pappi, Isä Henry, tekee parhaansa pitääkseen harmonian näiden kahden ja asukkaiden
              välillä. Tasapaino kuitenkin järkkyy, kun sen keskelle ilmestyy raakalaismaisen
              rikollisliigan johtajatar suojaa etsien.
            </p>
            <br />
            <p>
              Älä Ammu Ohi<br />
              HybridiSpeksi 2018<br />
              Ensi-ilta 27.3.<br />
              @Manilla
            </p>
            <CarouselContainer />
          </div>
          {/*
          <div className={'col-lg-6 col-sm-12 d-flex justify-content-center ' + styles.kuvakaruselli}>
            <div id="alaammuohiIndikaattorit" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="0" className="active"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="1"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="2"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="3"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="4"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="5"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="6"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="7"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="8"></li>
                <li data-target="#alaammuohiIndikaattorit" data-slide-to="9"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi1.jpg" alt="Eka"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi2.jpg" alt="Toka"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi3.jpg" alt="Kolmas"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi4.jpg" alt="Neljäs"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi5.jpg" alt="Viides"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi6.jpg" alt="Kuudes"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi7.jpg" alt="Seitsemäs"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi8.jpg" alt="Kahdeksas"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi9.jpg" alt="Yhdeksäs"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/alaammuohi/alaammuohi10.jpg" alt="Kymmenes"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#alaammuohiIndikaattorit" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#alaammuohiIndikaattorit" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        */}

        </div>

        {/* KRUUNUN KOHTALO */}
        <div className={'row align-items-center justify-content-center ' + styles.content_kruunu}>
          <div className={'col-lg-6 col-sm-12 d-flex justify-content-center ' + styles.kuvakaruselli}>
            <div id="kruununkohtaloIndikaattorit" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#kruununkohtaloIndikaattorit" data-slide-to="0" className="active" />
                <li data-target="#kruununkohtaloIndikaattorit" data-slide-to="1" />
                <li data-target="#kruununkohtaloIndikaattorit" data-slide-to="2" />
                <li data-target="#kruununkohtaloIndikaattorit" data-slide-to="3" />
                <li data-target="#kruununkohtaloIndikaattorit" data-slide-to="4" />
                <li data-target="#kruununkohtaloIndikaattorit" data-slide-to="5" />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo1.jpg" alt="Eka" />
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo2.jpg" alt="Toka" />
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo3.jpg" alt="Kolmas" />
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo4.jpg" alt="Neljäs" />
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo5.jpg" alt="Viides" />
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo6.jpg" alt="Kuudes" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#kruununkohtaloIndikaattorit" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#kruununkohtaloIndikaattorit" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className={'col-lg-5 col-sm-11 ' + styles.kruunu_desc}>
            <h1 className={styles.font_kruunu_header}>Kruunun kohtalo
              <br />&nbsp;&ndash; Kalevalan perintö
            </h1>
            <p className={styles.font_kruunu} lang="fi">Kalevalan lopussa Louhi on
             kukistettu ja Karjalassa on viimein rauha. Väinämöinen on lähtenyt Karjalasta
            ja jatkanut matkaansa muihin seikkailuihin
             jättäen velhoneuvoston huolehtimaan kruunusta.
            Kylän neito Marjatta syö puolukan ja tulee
             raskaaksi. Ennustuksen mukaan Marjatan lapsesta,
            Puolukasta, on tuleva Karjalan hallitsija.
             Velhoneuvosto auttaa Marjattaa kasvattamaan Puolukan
            opettaen häntä hallitsijan rooliin.
            </p>
            <p className={styles.font_kruunu}>Puolukan saavutettua
             täysi-ikäisyyden, koko kansa valmistautuu hänen kruunajaisiinsa.
            Kaikki on valmiina. Kruunajaiset voivat alkaa!
            </p>

            <p className={styles.font_kruunu}><strong>SEIS!</strong></p>
            <p className={styles.font_kruunu}>“Entä kruununperillisen tulikoe?”</p>
            <br />
            <p>HybridiSpeksi 2017: Kruunun kohtalo &ndash;
               Kalevalan perintö herätti henkiin kauan sitten unohdetun kansantarun,
            kertoen Suomen kansalliseepoksen, Kalevalan, jälkeisistä tapahtumista.
            Saunan täydeltä tervaisia sankareita ja suomalaista sisua!
            </p>
          </div>
        </div>

        {/* BRATVAKONTRA */}
        <div className={'row align-items-center justify-content-center ' + styles.content_bratva}>
          <div className={'col-lg-5 col-sm-11 ' + styles.bratva_desc}>
            <h1 className={styles.font_bratva_header}>BratvaKontra</h1>
            <p className={styles.font_bratva}>Kolme nuorta on
             kateissa. Tilanne on toki ikävä, enkä saisi elätellä
            liian suuria toiveita, mutta tämän ansiosta saatan vihdoin edetä
            tutkinnassani. BratvaKontra toimii yleensä harkitusti, eikä ole
            aikaisemmin jättänyt mitään pitäviä todisteita lainvastaisesta
            toiminnastaan.
            </p>
            <p className={styles.font_bratva}>Vaikken voi
             suoraan osoittaa yhteyttä kadonneiden nuorten ja
            BratvaKontran välillä, viimeaikaiset tapahtumat viittaavat heidän
            käyttävän näitä nuoria tavotteidensa saavuttamiseksi. Miksi BratvaKontra
            poikkeaa kaavastaan? Mihin kylmän laskelmoivasti toimiva rikollisliiga
            heitä tarvitsee?
            </p>
            <p className={styles.font_bratva}>En tiedä. Vielä.</p>
            <p className={styles.font_bratva}>Etsivä Saarnion muistiinpanot.<br />
            28.01. vuosi 21 jsk.
            </p>
            <br />
            <p>Historian toinen HybridiSpeksi sai ensi-iltansa 1.4.2016 tanssiteatteri
            ERI:ssä. HybridiSpeksi 2016 toi näyttämölle verellä, salajuonilla ja
            huumorilla terästetyn toiminnallisen jännitysnäytelmän
            opiskelijakolmikosta alamaailman rikoshelvetissä.
            </p>
          </div>
          <div className={'col-lg-6 col-sm-12 d-flex justify-content-center ' + styles.kuvakaruselli}>
            <div id="bratvakontraIndikaattorit" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#bratvakontraIndikaattorit" data-slide-to="0" className="active" />
                {/* <li data-target="#bratvakontraIndikaattorit" data-slide-to="1"></li>
                <li data-target="#bratvakontraIndikaattorit" data-slide-to="2"></li>
                <li data-target="#bratvakontraIndikaattorit" data-slide-to="3"></li> */}
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src="/assets/images/carousel/bratvakontra/bratvakontra1.jpg" alt="Eka" />
                </div>
                {/* <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo2.jpg" alt="Toka"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo3.jpg" alt="Kolmas"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo4.jpg" alt="Neljäs"/>
                </div> */}
              </div>
              <a className="carousel-control-prev" href="#bratvakontraIndikaattorit" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#bratvakontraIndikaattorit" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>


        {/* H.A.L.I */}
        <div className={'row align-items-center justify-content-center ' + styles.content_hali}>
          <div className={'col-lg-6 col-sm-12 d-flex justify-content-center ' + styles.kuvakaruselli}>
            <div id="haliIndikaattorit" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#haliIndikaattorit" data-slide-to="0" className="active" />
                {/* <li data-target="#haliIndikaattorit" data-slide-to="1"></li>
                <li data-target="#haliIndikaattorit" data-slide-to="2"></li>
                <li data-target="#haliIndikaattorit" data-slide-to="3"></li> */}
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src="/assets/images/carousel/hali/hali1.jpg" alt="Eka" />
                </div>
                {/* <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo2.jpg" alt="Toka"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo3.jpg" alt="Kolmas"/>
                </div>
                <div className="carousel-item ">
                  <img className="d-block img-fluid" src="/assets/images/carousel/kruununkohtalo/kruununkohtalo4.jpg" alt="Neljäs"/>
                </div> */}
              </div>
              <a className="carousel-control-prev" href="#haliIndikaattorit" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#haliIndikaattorit" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className={'col-lg-5 col-sm-11 ' + styles.hali_desc}>
            <h1>H.A.L.I.</h1>
            <p className={styles.font_hali}>Turun yliopiston huippututkija Viktor Salaoja ja hänen assistenttinsa
            kehittävät Turun yliopiston hämyisissä työhuoneissa ratkaisuja monenlaisiin
            yhteiskunnassa vastaan tulleisiin ongelmiin.
            </p>
            <p className={styles.font_hali}>Samaan aikaan kaupungilla Hyvinvointia ja Avunantoa Lainkuuliaisille
            Ihmisille -puolue (H.A.L.I.) tekee kiihkeää kampanjatyötä ja valmistautuu
            edessä oleviin kunnanvaltuuston vaaleihin.
            </p>
            <p className={styles.font_hali}>Kun H.A.L.I. pääsee vallankahvaan kiinni, joutuu Viktor tiimeineen keskelle
            myrskyä. Tieteellinen huippututkimus valjastetaan poliittisen
            päätäntäkoneiston osaksi tuomaan absoluuttista tasa-arvoa ihmisten
            elämään. Minkälaisia vaikutuksia on Kauppatorilla riehuvalla tornadolla tai
            Ruissalon uusilla surffauskeleillä? Miltä tuntuisi päästä lomailemaan etelän
            lämpöön ihan kaupunkiliikenteen bussilla? Entä miten pakollinen halaus
            ihmisten kohdatessa vaikuttaa tasa-arvoistamiseen? Minkälaista
            uudelleenkoulutusta Muumimaailmassa annetaankaan?
            </p>
            <br />
            <p>Ensimmäinen HybridiSpeksi saapui näyttämölle rennosti kantaaottavalla ja
            opiskelijaromantiikallakin höystetyllä toimintakomedialla keväällä 2015.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Speksit;

