import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ajax from '../../../Utils/Ajax';
import Messages from '../../../Utils/Messages';
import { fetchProduction } from '../../../actions/productionActions';
import { addSuccessMessage, clearMessages } from '../../../actions/messageActions';
import { fetchOhjaustieto } from '../../../actions/ohjaustietoActions';

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
    };
    this.handleJasenChange = this.handleJasenChange.bind(this);
    this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
    this.poistaTehtava = this.poistaTehtava.bind(this);
    this.tallennaMuutokset = this.tallennaMuutokset.bind(this);
    this.lisaaTehtava = this.lisaaTehtava.bind(this);
    this.yhdistyksenJasenLisatty = this.yhdistyksenJasenLisatty.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  tallennaMuutokset() {
    ajax
      .sendPost('/admin/produktionjasen', this.props.selectedMember)
      .then(() => {
        setTimeout(() => {
          this.setState({ messages: [] });
        }, 3000);
        this.fetchData();
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

  toggleSahkopostit() {
    this.setState({ naytaSahkopostit: !this.state.naytaSahkopostit });
  }

  poistaTehtava(i) {
    // TODO: redux
    // const jasen = this.props.valittuJasen;
    // jasen.tehtavat.splice(i, 1);
    // this.setState({ valittuJasen: jasen, henkilotiedotMuuttuneet: true });
  }

  handleJasenChange(e) {
    // TODO: redux
    // const jasen = this.props.valittuJasen;
    // if (e.target.name === 'tehtavat') {
    //   const idNumber = utils.parseNumberIfNumber(e.target.id);
    //   jasen.tehtavat[idNumber] = e.target.value;
    // } else {
    //   jasen[e.target.name] = e.target.value;
    // }
    // this.setState({ valittuJasen: jasen, henkilotiedotMuuttuneet: true });
  }

  lisaaTehtava() {
    // TODO: redux
    // const _jasen = this.state.valittuJasen;
    // _jasen.tehtavat.push('');
    // this.setState({ valittuJasen: _jasen });
  }

  yhdistyksenJasenLisatty() {
    this.props.addSuccessMessage({
      header: 'Jäsen lisätty!',
    });
    setTimeout(() => {
      this.props.clearMessages();
    }, 2000);
  }

  fetchData() {
    this.props.fetchOhjaustieto('tehtavat');
    this.props.fetchOhjaustieto('jarjestot');
    this.props.fetchProduction();
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
            <Haku />
            {this.props.selectedMember.fname ? (
              <Jasentiedot />
            ) : (
              ''
            )}
            <Messages />

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
            {/* <Uusijasen
              jasen={this.props.selectedMember}
              jasenLisatty={this.yhdistyksenJasenLisatty}
            /> */}
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
  addSuccessMessage: PropTypes.func,
  clearMessages: PropTypes.func,
  fetchOhjaustieto: PropTypes.func,
};

const mapStateToProps = state => ({
  productionmembers: state.production.members,
  selectedMember: state.production.selectedMember,
  ajaxLoading: state.ajax.loading,
  ohjaustieto: state.ohjaustieto,
});

const mapDispatchToProps = dispatch => ({
  fetchProduction: () => dispatch(fetchProduction()),
  addSuccessMessage: message => dispatch(addSuccessMessage(message)),
  clearMessages: () => dispatch(clearMessages()),
  fetchOhjaustieto: key => dispatch(fetchOhjaustieto(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Produktio);
