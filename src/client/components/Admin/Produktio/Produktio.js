import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchProduction } from 'actions/productionActions';
import { addSuccessMessage, clearMessages } from 'actions/messageActions';
import { fetchOhjaustieto } from 'actions/ohjaustietoActions';

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
    this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
    this.yhdistyksenJasenLisatty = this.yhdistyksenJasenLisatty.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  toggleSahkopostit() {
    this.setState({ naytaSahkopostit: !this.state.naytaSahkopostit });
  }

  yhdistyksenJasenLisatty() {
    this.props.addSuccessMessage({
      header: 'Jäsen lisätty!',
    });
    this.props.fetchProduction();
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
            {this.state.naytaSahkopostit ? (
              <Sahkopostit
                jasenet={this.props.productionmembers}
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
