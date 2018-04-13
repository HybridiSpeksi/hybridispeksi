import React, { Component } from 'react';

import UusiVaraus from './UusiVaraus';
import Esitysvalinta from './Esitysvalinta';

import ajax from './../../Utils/Ajax';
import Messages from './../../Utils/Messages';

import styles from './Speksi2018.css';

const MESSAGE_SUCCESS = 'success';
const MESSAGE_WARNING = 'warning';
const MESSAGE_ERROR = 'error';

class Speksi2018 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      esitykset: [],
      valittuEsitys: {},
      fname: '',
      sname: '',
      email: '',
      pnumber: '',
      ncount: 0,
      scount: 0,
      ocount: 0,
      nprice: '16',
      sprice: '14',
      oprice: '25',
      price: '0',
      lisatiedot: '',
      ilmottu: false,
      lipunmyyntiAuki: false,
      lipunmyyntiMessage: '',
      messages: [],
      warnings: [],
      errors: [],
      openModalError: '',
    };

    // this.valitseEsitys = this.valitseEsitys.bind(this);
    this.toggleUusiVarausModal = this.toggleUusiVarausModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.countPrice = this.countPrice.bind(this);
  }

  componentDidMount() {
    $(window).scrollTop(0);

    ajax
      .sendGet('/getShowsWithCounts')
      .then((_data) => {
        this.setState({ esitykset: _data.data });
      })
      .catch((err) => {
        console.log(err);
      });

    ajax
      .sendGet('/lipunmyyntiAuki')
      .then((tag) => {
        this.setState({ lipunmyyntiAuki: tag.data[0].truefalse });
      })
      .catch((err) => {
        console.log(err);
      });
    ajax
      .sendGet('/lipunmyyntiMessage')
      .then((tag) => {
        this.setState({ lipunmyyntiMessage: tag.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    const tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  toggleUusiVarausModal(esitys, tilaa) {
    if (!this.state.lipunmyyntiAuki) {
      this.setState({ openModalError: 'Lipunmyynti ei ole vielä alkanut.' }, () => {
        $('#errorModal').modal('show');
      });
    } else if (tilaa === 'Loppuunmyyty') {
      this.setState({ openModalError: 'Valittu esitys on täynnä.' }, () => {
        $('#errorModal').modal('show');
      });
    } else if (new Date() > new Date(esitys.date)) {
      this.setState({ openModalError: 'Esitykseen ei voi varata enää lippuja.' }, () => {
        $('#errorModal').modal('show');
      });
    } else {
      this.setState({ valittuEsitys: esitys }, () => {
        $('#uusiVarausModal').modal('show');
      });
    }
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      messages: [],
      warnings: [],
      errors: [],
    });

    if (e.target.name === 'ncount' || e.target.name === 'scount' || e.target.name === 'ocount') {
      this.setState({ [e.target.name]: value }, () => {
        this.countPrice();
      });
    } else if (e.target.name === 'esitys') {
      this.state.esitykset.map((esitys) => {
        if (e.target.value === esitys._id) {
          this.valitseEsitys(esitys);
        }
      });
    } else {
      this.setState({ [e.target.name]: value });
    }
  }

  countPrice() {
    const sum =
      this.state.ncount * this.state.nprice +
      this.state.scount * this.state.sprice +
      this.state.ocount * this.state.oprice;
    this.setState({ price: sum });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = '/varaus/createPayment';
    const ticketSum =
      parseInt(this.state.scount) + parseInt(this.state.ncount) + parseInt(this.state.ocount);
    console.log(ticketSum);
    if (ticketSum > 7) {
      this.addMessage(
        MESSAGE_WARNING,
        'HUOM!',
        'Vähintään 8 hengen ryhmätilauksella lipun hinta on vain 12 €/hlö ja tulee hoitaa lähettämällä sähköpostia osoitteeseen lipunmyynti@hybridispeksi.fi.',
      );
    } else {
      ajax
        .sendPost(url, {
          fname: this.state.fname,
          sname: this.state.sname,
          email: this.state.email,
          pnumber: this.state.pnumber,
          scount: this.state.scount,
          ncount: this.state.ncount,
          ocount: this.state.ocount,
          esitysId: this.state.valittuEsitys._id,
          additional: this.state.lisatiedot,
        })
        .then((data) => {
          console.log(data.data);
          if (data.success) {
            this.setState({ ilmottu: true });
            location.replace(data.data.url);
            this.addMessage(MESSAGE_SUCCESS, 'Siirrytään maksupalveluun...');
          } else {
            this.setState({ ilmottu: false });
            this.addMessage(MESSAGE_WARNING, data.data);
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ ilmottu: false });
          this.addMessage(
            MESSAGE_ERROR,
            'Virhe!',
            'Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen.',
          );
        });
    }
  }

  // Add different kinds of error or warning messages
  addMessage(type, newHeader, newText) {
    this.setState(
      {
        messages: [],
        warnings: [],
        errors: [],
      },
      () => {
        if (type === MESSAGE_WARNING) {
          const newWarnings = this.state.warnings;
          newWarnings.push({ header: newHeader, text: newText });
          this.setState({ warnings: newWarnings });
        } else if (type === MESSAGE_ERROR) {
          const newErrors = this.state.errors;
          newErrors.push({ header: newHeader, text: newText });
          this.setState({ errors: newErrors });
        } else if (type === MESSAGE_SUCCESS) {
          const newMessages = this.state.messages;
          newMessages.push({ header: newHeader, text: newText });
          this.setState({ messages: newMessages });
        }
      },
    );
  }

  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div className={'row align-items-top justify-content-center ' + styles.header}>
          <div className="col-md-6">
            <h2 className="">Speksi 2018</h2>
            <p>
              Villin lännen kuumimmalla aavikolla on pieni kylä keskellä preeriaa. Tuomari Martin
              pitää yllä järjestystä lakikirjalla ja hirttosilmukalla, samalla ryysyistä rikkauksiin
              kohonnut Alexandra hallitsee kyläläisten kukkaroita ja himoja. Kaikkien rakastama
              pappi, Isä Henry, tekee parhaansa pitääkseen harmonian näiden kahden ja asukkaiden
              välillä. Tasapaino kuitenkin järkkyy, kun sen keskelle ilmestyy raakalaismaisen
              rikollisliigan johtajatar suojaa etsien.
            </p>
            <p>
              Älä Ammu Ohi<br />
              HybridiSpeksi 2018<br />
              Ensi-ilta 27.3.<br />
              @Manilla
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <img src="/assets/images/logo_lapinak_valk.png" />
          </div>
        </div>
        <div className={'row align-items-top justify-content-center ' + styles.lipunmyyntiMessage}>
          <div className="col-9 text-center">
            {this.state.lipunmyyntiMessage.truefalse ? (
              <p className={styles.lipunmyyntiMessageText}>{this.state.lipunmyyntiMessage.name}</p>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className={'row align-items-top justify-content-center ' + styles.content}>
          <div className="col-12 col-md-10 col-lg-5 col-xl-5 flex-last">
            <h2 className={styles.textheader}>Ohjeet lipun ostamiseen</h2>
            <ol>
              <li>Valitse näytös ja klikkaa sitä</li>
              <li>Täytä tiedot</li>
              <li>
                Siirry maksamaan ja valitse oma nettipankkisi (maksutapahtuman käsittelee Paytrail,
                lisätietoa alempana)
              </li>
              <li>Seuraa nettipankin ohjeita maksaaksesi</li>
              <li>
                Saat sähköpostiisi varausnumeron, jota näyttämällä pääset katsomaan HybridiSpeksiä
                2018!
              </li>
              <li>
                Ongelmatilanteissa ota yhteyttä osoitteeseen{' '}
                <a className={styles.externallink} href="mailto:lipunmyynti@hybridispeksi.fi">
                  lipunmyynti@hybridispeksi.fi
                </a>
              </li>
            </ol>
            <p>
              Vähintään 8 hengen ryhmätilaukset voi lähettää sähköpostilla osoitteeseen{' '}
              <a className={styles.externallink} href="mailto:lipunmyynti@hybridispeksi.fi">
                lipunmyynti@hybridispeksi.fi
              </a>. Ryhmätilauksen alennushinta 12 €/hlö.
            </p>

            <p>
              <strong>
                Huomioithan, että esitystä ei suositella alle 12-vuotiaille. Esityksessä on kovia
                ääniä ja vilkkuvia valoja.
              </strong>
            </p>

            <h2 className={styles.textheader}>Hinnasto</h2>
            <table className={styles.hinnasto}>
              <tbody>
                <tr>
                  <td>Normaali</td>
                  <td>16 €</td>
                </tr>
                <tr>
                  <td>Opiskelija</td>
                  <td>14 €</td>
                </tr>
                <tr>
                  <td>Kannatus</td>
                  <td>25 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className={
              'col-12 col-md-10 col-lg-6 col-xl-5 justify-items-center ' + styles.esitykset
            }
          >
            <h2 className={styles.textheader}>Esitykset Manilla-teatterilla:</h2>
            <Esitysvalinta
              esitykset={this.state.esitykset}
              toggleUusiVarausModal={this.toggleUusiVarausModal}
            />
          </div>
        </div>
        <div className={'row align-items-top justify-content-center ' + styles.videot}>
          <div className="col-sm-11 col-md-5">
            <div className="videowrapper">
              <h2 className={styles.textheader}>Älä ammu ohi -teaser</h2>
              <iframe
                id="youtubeplayer"
                src="https://www.youtube.com/embed/6HXoDboQjbU?enablejsapi=1&rel=0"
                width="100%"
                height="360"
                frameBorder="0"
                allowFullScreen="allowFullScreen"
              />
            </div>
          </div>
          <div className="col-sm-11 col-md-5">
            <div className="videowrapper">
              <h2 className={styles.textheader}>Älä ammu ohi -trailer</h2>
              <iframe
                id="youtubeplayer"
                src="https://www.youtube.com/embed/vhLvRVZabTA?enablejsapi=1&rel=0"
                width="100%"
                height="360"
                frameBorder="0"
                allowFullScreen="allowFullScreen"
              />
            </div>
          </div>
        </div>
        <div className={'row justify-content-center ' + styles.hr}>
          <div className="col-8">
            <hr />
          </div>
        </div>
        <div className={'row align-items-top justify-content-center ' + styles.paytrail}>
          <div className="col-12 col-md-10 col-lg-8">
            <h4>Maksupalvelutarjoaja</h4>
            <p>
              Maksunvälityspalvelun toteuttajana ja maksupalveluntarjoajana toimii Paytrail Oyj
              (2122839-7) yhteistyössä suomalaisten pankkien ja luottolaitosten kanssa. Paytrail Oyj
              näkyy maksun saajana tiliotteella tai korttilaskulla ja välittää maksun kauppiaalle.
              Paytrail Oyj:llä on maksulaitoksen toimilupa. Reklamaatiotapauksissa pyydämme ottamaan
              ensisijaisesti yhteyttä tuotteen toimittajaan.
            </p>

            <p>
              Paytrail Oyj, y-tunnus: 2122839-7<br />
              Innova 2<br />
              Lutakonaukio 7<br />
              40100 Jyväskylä<br />
              Puhelin: 0207 181830<br />
              www.paytrail.com
            </p>

            <h4>Verkkopankit</h4>
            <p>
              Verkkopankkimaksamiseen liittyvän maksunvälityspalvelun toteuttaa Paytrail Oyj
              (2122839-7) yhteistyössä suomalaisten pankkien ja luottolaitosten kanssa. Käyttäjän
              kannalta palvelu toimii aivan kuten perinteinen verkkomaksaminenkin.
            </p>
          </div>
        </div>

        <UusiVaraus
          emptyFields={this.emptyFields}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          fname={this.state.fname}
          sname={this.state.sname}
          email={this.state.email}
          pnumber={this.state.pnumber}
          scount={this.state.scount}
          ncount={this.state.ncount}
          ocount={this.state.ocount}
          price={this.state.price}
          lisatiedot={this.state.lisatiedot}
          ilmottu={this.state.ilmottu}
          valittuEsitys={this.state.valittuEsitys}
          esitykset={this.state.esitykset}
          messages={
            <Messages
              messages={this.state.messages}
              warnings={this.state.warnings}
              errors={this.state.errors}
            />
          }
        />

        <div
          className="modal fade"
          id="errorModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="errorModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className={'modal-content ' + styles.formContent}>
              {' '}
              {/* TÄHÄN MUOTOILUT KOKO MODALIIN */}
              <div className={'modal-header ' + styles.formBorder}>
                <h5 className="modal-title" id="errorModalLabel">
                  {this.state.openModalError}
                </h5>
                <button
                  type="button"
                  className={'close btn btn-inverse ' + styles.formClose}
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className={'modal-footer justify-content-center ' + styles.formBorder}>
                <button
                  type="button"
                  className={'btn btn-dark ' + styles.formButton + ' ' + styles.formButtonClose}
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Sulje ikkuna
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speksi2018;
