import React, { Component } from 'react';

import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';
import utils from '../../Utils/Utils';

import ProduktionjasenLista from './ProduktionjasenLista';
import Jasentiedot from './Jasentiedot';
import Haku from './Haku';
import Sahkopostit from '../../Shared/Sahkopostit';
import Uusijasen from '../Jasenrekisteri/Uusijasen';

class Produktio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      warnings: [],
      errors: [],

      ajaxReady: false,
      naytaSahkopostit: false,
      henkilotiedotMuuttuneet: false,

      tehtavat: [],
      jarjestot: [],
      produktionjasenet: [],
      produktionjasenetFiltered: [],
      haku: {
        pikahaku: '',
        fname: '',
        sname: '',
        email: '',
        tehtava: '',
        jarjesto: '',
      },
      valittuJasen: {
        fname: '',
        sname: '',
        email: '',
        pnumber: '',
        tehtavat: [],
        tuotannonMuistiinpanot: '',
      },
    };
    this.valitseJasen = this.valitseJasen.bind(this);
    this.handleJasenChange = this.handleJasenChange.bind(this);
    this.handleHaku = this.handleHaku.bind(this);
    this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
    this.poistaTehtava = this.poistaTehtava.bind(this);
    this.tallennaMuutokset = this.tallennaMuutokset.bind(this);
    this.lisaaTehtava = this.lisaaTehtava.bind(this);
    this.ajaKutsut = this.ajaKutsut.bind(this);
    this.yhdistyksenJasenLisatty = this.yhdistyksenJasenLisatty.bind(this);
    this.filterProduktio = this.filterProduktio.bind(this);
  }

  componentDidMount() {
    this.ajaKutsut();
  }

  tallennaMuutokset() {
    ajax
      .sendPost('/admin/produktionjasen', this.state.valittuJasen)
      .then(() => {
        const _messages = this.state.messages;
        _messages.push({
          header: 'Muutokset tallennettu!',
          text: 'Muutokset tallennettiin onnistuneesti',
        });
        this.setState({ messages: _messages, henkilotiedotMuuttuneet: false });
        setTimeout(() => {
          this.setState({ messages: [] });
        }, 3000);
        this.ajaKutsut();
      })
      .catch((err) => {
        console.log(err);
        const _errors = this.state.errors;
        _errors.push({ header: 'Muutosten tallentaminen ei onnistunut:', text: err.status });
        this.setState({ errors: _errors });
        setTimeout(() => {
          this.setState({ errors: [] });
        }, 4000);
      });
  }

  valitseJasen(jasen) {
    this.setState({ henkilotiedotMuuttuneet: false });
    if (!jasen) {
      jasen = {
        email: '',
        pnumber: '',
        tehtavat: [''],
      };
    }
    const uusiJasen = JSON.parse(JSON.stringify(jasen));
    this.setState({ valittuJasen: uusiJasen });
  }

  handleHaku(e) {
    const _haku = this.state.haku;
    _haku[e.target.name] = e.target.value;
    this.setState({ haku: _haku });
    this.filterProduktio();
  }

  filterProduktio() {
    const _haku = this.state.haku;
    let filtered = Object.assign([], this.state.produktionjasenet);
    if (
      _haku.pikahaku !== '' ||
      _haku.fname !== '' ||
      _haku.email !== '' ||
      _haku.tehtava !== '' ||
      _haku.jarjesto
    ) {
      filtered = filtered.filter((jasen) => {
        let pikaB = true;
        let jarjestoB = true;
        let tehtavaB = true;
        if (_haku.pikahaku !== '') {
          const l = _haku.pikahaku.toLowerCase();
          if (
            jasen.fname.toLowerCase().indexOf(l) !== -1 ||
            jasen.sname.toLowerCase().indexOf(l) !== -1 ||
            jasen.email.toLowerCase().indexOf(l) !== -1 ||
            jasen.tehtavat.indexOf(l) !== -1
          ) {
            pikaB = true;
          } else pikaB = false;
        }

        if (_haku.jarjesto !== '') {
          if (jasen.jarjesto !== _haku.jarjesto) {
            jarjestoB = false;
          }
        }

        if (_haku.tehtava !== '') {
          if (jasen.tehtavat.indexOf(_haku.tehtava) === -1) {
            tehtavaB = false;
          }
        }

        return pikaB && tehtavaB && jarjestoB;
      });
    }
    this.setState({ produktionjasenetFiltered: filtered });
  }

  toggleSahkopostit() {
    this.setState({ naytaSahkopostit: !this.state.naytaSahkopostit });
  }

  poistaTehtava(i) {
    const jasen = this.state.valittuJasen;
    jasen.tehtavat.splice(i, 1);
    this.setState({ valittuJasen: jasen, henkilotiedotMuuttuneet: true });
  }

  handleJasenChange(e) {
    const jasen = this.state.valittuJasen;
    if (e.target.name === 'tehtavat') {
      const idNumber = utils.parseNumberIfNumber(e.target.id);
      jasen.tehtavat[idNumber] = e.target.value;
    } else {
      jasen[e.target.name] = e.target.value;
    }
    this.setState({ valittuJasen: jasen, henkilotiedotMuuttuneet: true });
  }

  lisaaTehtava() {
    const _jasen = this.state.valittuJasen;
    _jasen.tehtavat.push('');
    this.setState({ valittuJasen: _jasen });
  }

  yhdistyksenJasenLisatty() {
    const _messages = this.state.messages;
    _messages.push({ header: 'Jäsen lisätty!', text: '' });
    this.setState({ messages: _messages });
    setTimeout(() => {
      this.setState({ messages: [] });
    }, 2000);
  }

  ajaKutsut() {
    ajax
      .sendGet('/admin/produktionjasen/2018')
      .then((jasenet) => {
        this.setState({ produktionjasenet: jasenet });
        this.setState({ produktionjasenetFiltered: jasenet });
        this.setState({ ajaxReady: true });
        this.filterProduktio();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errors: [
            { header: 'Palvelinvirhe!', text: 'Virhe haettaessa produktionjäseniä palvelimelta' },
          ],
        });
      });
    ajax
      .sendGet('/tehtavat')
      .then((t) => {
        t.data.unshift({ key: 'tehtava', name: 'Tehtävä', value: '' });
        this.setState({ tehtavat: t.data });
      })
      .catch((err) => {
        console.log(err);
      });
    ajax
      .sendGet('/jarjestot')
      .then((j) => {
        j.data.unshift({ key: 'jarjesto', name: 'Järjestö', value: '' });
        this.setState({ jarjestot: j.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>
              Produktion jäsenten hallinta <small>{this.state.produktionjasenet.length} hlö</small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-7 col-xs-12">
            {this.state.ajaxReady ? (
              <ProduktionjasenLista
                jasenet={this.state.produktionjasenetFiltered}
                valitseJasen={this.valitseJasen}
              />
            ) : (
              <div>
                <h4>Ladataan...</h4>
              </div>
            )}
          </div>
          <div className="col">
            <Haku
              handleChange={this.handleHaku}
              haku={this.state.haku}
              tehtavat={this.state.tehtavat}
              jarjestot={this.state.jarjestot}
            />
            {this.state.valittuJasen.fname ? (
              <Jasentiedot
                jasen={this.state.valittuJasen}
                valitseJasen={this.valitseJasen}
                handleChange={this.handleJasenChange}
                tehtavat={this.state.tehtavat}
                poistaTehtava={this.poistaTehtava}
                tallennaMuutokset={this.tallennaMuutokset}
                henkilotiedotMuuttuneet={this.state.henkilotiedotMuuttuneet}
                lisaaTehtava={this.lisaaTehtava}
              />
            ) : (
              ''
            )}
            <Messages
              messages={this.state.messages}
              warnings={this.state.warnings}
              errors={this.state.errors}
            />

            {this.state.naytaSahkopostit ? (
              <Sahkopostit
                jasenet={this.state.produktionjasenetFiltered}
                toggleSahkopostit={this.toggleSahkopostit}
              />
            ) : (
              <button className="btn btn-default" onClick={this.toggleSahkopostit}>
                Näytä sähköpostit
              </button>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Uusijasen
              jasen={this.state.valittuJasen}
              jasenLisatty={this.yhdistyksenJasenLisatty}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Produktio;
