import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from './List';
import Jasentiedot from './Jasentiedot';
import Uusijasen from './Uusijasen';
import Statistics from './Statistics';
import Sahkopostit from '../../Shared/Sahkopostit';
import { addSuccessMessage, addErrorMessage, clearMessages } from '../../../actions/messageActions';
import { fetchMembers, clearSelectedMember } from '../../../actions/jasenrekisteriActions';

class Jasenrekisteri extends Component {
  constructor(props) {
    super(props);

    this.state = {
      naytaSahkopostit: false,
    };

    this.toggleSahkopostit = this.toggleSahkopostit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMembers();
  }

  toggleSahkopostit() {
    this.setState({ naytaSahkopostit: !this.state.naytaSahkopostit });
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
                onClick={this.props.clear}
              >
                Lisää uusi jäsen
              </button>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-7">
            <List />
          </div>
          <div className="col-sm-5">
            <Statistics />
            {this.props.selectedMember._id ? (
              <Jasentiedot />
            ) : (
              ''
            )}
            {this.state.naytaSahkopostit ? (
              <Sahkopostit
                jasenet={this.props.members}
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

Jasenrekisteri.propTypes = {
  fetchMembers: PropTypes.func,
  members: PropTypes.array,
  selectedMember: PropTypes.object,
  clear: PropTypes.func,
};

const mapStateToProps = state => ({
  members: state.jasenrekisteri.members,
  selectedMember: state.jasenrekisteri.selectedMember,
});

const mapDispatchToProps = dispatch => ({
  addSuccess: message => dispatch(addSuccessMessage(message)),
  addError: message => dispatch(addErrorMessage(message)),
  clearMessages: () => dispatch(clearMessages()),
  fetchMembers: () => dispatch(fetchMembers()),
  clear: () => dispatch(clearSelectedMember()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jasenrekisteri);
