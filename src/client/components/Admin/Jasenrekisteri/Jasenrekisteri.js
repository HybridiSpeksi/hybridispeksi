import React, { Component } from 'react';
import ajax from '../../../Utils/Ajax';

import List from './List';
import Jasentiedot from './Jasentiedot';
import Uusijasen from './Uusijasen';
import Sahkopostit from '../../Shared/Sahkopostit';

class Jasenrekisteri extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jasenet: [],
      valittuJasen: {},
      messages: [],
      warnings: [],
      errors: [],
      naytaSahkopostit: false,
    };

    this.teeHaut = this.teeHaut.bind(this);
    this.valitseJasen = this.valitseJasen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.tallennaTiedot = this.tallennaTiedot.bind(this);
    this.hyvaksyJasen = this.hyvaksyJasen.bind(this);
    this.jasenLisatty = this.jasenLisatty.bind(this);
    this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
  }

  componentDidMount() {
    this.teeHaut();
  }

  handleChange(e) {
    const _jasen = this.state.valittuJasen;
    _jasen[e.target.name] = e.target.value;
    this.setState({ valittuJasen: _jasen });
  }

  toggleSahkopostit() {
    this.setState({ naytaSahkopostit: !this.state.naytaSahkopostit });
  }

  valitseJasen(jasen) {
    this.setState({ valittuJasen: JSON.parse(JSON.stringify(jasen)) });
  }

  async tallennaTiedot() {
    try {
      await ajax.sendPost('/admin/h/jasenrekisteri', this.state.valittuJasen);
      this.teeHaut();
      const messages = this.state.messages;
      messages.push({ header: 'Tiedot tallennettu!', text: '' });
      setTimeout(() => {
        this.setState({ messages: [] });
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }

  jasenLisatty() {
    const _messages = this.state.messages;
    _messages.push({ header: 'Jäsen lisätty!', text: '' });
    this.setState({ messages: _messages });
    setTimeout(() => {
      this.setState({ messages: [] });
    }, 2000);
  }

  async hyvaksyJasen() {
    try {
      const res = await ajax.sendGet('/admin/h/hyvaksyJasen/' + this.state.valittuJasen._id);
      this.teeHaut();
      if (res.success) {
        const messages = this.state.messages;
        messages.push({ header: 'Jäsenyys hyväksytty!', text: '' });
        setTimeout(() => {
          this.setState({ messages: [] });
        }, 2000);
      } else {
        const errors = this.state.errors;
        errors.push({ header: 'Virhe!', text: 'Hyväksyminen epäonnistui.' });
      }
    } catch (err) {
      const errors = this.state.errors;
      errors.push({ header: 'Virhe!', text: 'Hyväksyminen epäonnistui.' });
      console.log(err);
    }
  }

  async teeHaut() {
    try {
      const j = await ajax.sendGet('/admin/h/jasenrekisteri');
      this.setState({ jasenet: j.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Jäsenrekisteri</h1>
          </div>
          <div className="col text-right">
            <h1>
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#uusijasen-modal"
              >
                Lisää uusi jäsen
              </button>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-7">
            <List jasenet={this.state.jasenet} valitseJasen={this.valitseJasen} />
          </div>
          <div className="col-sm-5">
            {this.state.valittuJasen._id ? (
              <Jasentiedot
                valitseJasen={this.valitseJasen}
                jasen={this.state.valittuJasen}
                handleChange={this.handleChange}
                tallennaTiedot={this.tallennaTiedot}
                hyvaksyJasen={this.hyvaksyJasen}
              />
            ) : (
              ''
            )}
            {this.state.naytaSahkopostit ? (
              <Sahkopostit
                jasenet={this.state.jasenet}
                toggleSahkopostit={this.toggleSahkopostit}
              />
            ) : (
              <button className="btn btn-default" onClick={this.toggleSahkopostit}>
                Näytä sähköpostit
              </button>
            )}
          </div>
        </div>
        <Uusijasen jasen={{}} jasenLisatty={this.jasenLisatty} />
      </div>
    );
  }
}

export default Jasenrekisteri;
