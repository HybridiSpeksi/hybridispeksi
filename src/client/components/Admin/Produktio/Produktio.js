import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ajax from '../../../Utils/Ajax';
import Messages from '../../../Utils/Messages';
import utils from '../../../Utils/Utils';
import { fetchProduction } from '../../../actions/productionActions';

import ProduktionjasenLista from './ProduktionjasenLista';
import Jasentiedot from './Jasentiedot';
import Haku from './Haku';
import Sahkopostit from '../../Shared/Sahkopostit';
import Uusijasen from '../Jasenrekisteri/Uusijasen';

class Produktio extends Component {
  constructor(props) {
    super(props);

    this.state = {

      naytaSahkopostit: false,
      tehtavat: [],
      jarjestot: [],
      haku: {
        pikahaku: '',
        fname: '',
        lname: '',
        email: '',
        tehtava: '',
        jarjesto: '',
      },
      valittuJasen: {
        fname: '',
        lname: '',
        email: '',
        pnumber: '',
        tehtavat: [],
        tuotannonMuistiinpanot: '',
      },
    };
    this.handleJasenChange = this.handleJasenChange.bind(this);
    this.handleHaku = this.handleHaku.bind(this);
    this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
    this.poistaTehtava = this.poistaTehtava.bind(this);
    this.tallennaMuutokset = this.tallennaMuutokset.bind(this);
    this.lisaaTehtava = this.lisaaTehtava.bind(this);
    this.ajaKutsut = this.ajaKutsut.bind(this);
    this.yhdistyksenJasenLisatty = this.yhdistyksenJasenLisatty.bind(this);
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

  handleHaku(e) {
    const _haku = this.state.haku;
    _haku[e.target.name] = e.target.value;
    this.setState({ haku: _haku });
    this.filterProduktio();
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
    this.props.fetchProduction();
    ajax
      .sendGet('/tehtavat')
      .then((t) => {
        t.data.unshift({
          key: 'tehtava', name: 'Tehtävä', value: '', _id: '',
        });
        this.setState({ tehtavat: t.data });
      })
      .catch((err) => {
        console.log(err);
      });
    ajax
      .sendGet('/jarjestot')
      .then((j) => {
        j.data.unshift({
          key: 'jarjesto', name: 'Järjestö', value: '', _id: '',
        });
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
              Produktion jäsenten hallinta <small>{this.props.productionmembers.length} hlö</small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-7 col-xs-12">
            {/* {!this.props.ajaxLoading ? ( */}
            {true ? (
              <ProduktionjasenLista />
            ) : (
              <div>
                <h4>Ladataan...</h4>
              </div>
            )}
          </div>
          <div className="col">
            <Haku
              tehtavat={this.state.tehtavat}
              jarjestot={this.state.jarjestot}
            />
            {this.props.selectedMember.fname ? (
              <Jasentiedot
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
              jasen={this.props.selectedMember}
              jasenLisatty={this.yhdistyksenJasenLisatty}
            />
          </div>
        </div>
      </div>
    );
  }
}

Produktio.propTypes = {
  productionmembers: PropTypes.array,
  selectedMember: PropTypes.object,
  fetchProduction: PropTypes.func,
};

const mapStateToProps = state => ({
  productionmembers: state.production.members,
  selectedMember: state.production.selectedMember,
  ajaxLoading: state.ajax.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchProduction: () => dispatch(fetchProduction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Produktio);
