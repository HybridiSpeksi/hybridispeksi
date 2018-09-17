import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rekryform from './Rekryform';
import Kiitos from './Kiitos';

import utils from '../../Utils/Utils';
import ajax from '../../Utils/Ajax';
import Messages from '../../Utils/Messages';
import { addMessage, clearMessages } from '../../actions/messageActions';
import constants from '../../Utils/constants';


const getTehtavat = (values) => {
  const result = [];
  values.tehtavat1 ? result.push(values.tehtavat1) : null;
  values.tehtavat2 ? result.push(values.tehtavat2) : null;
  values.tehtavat3 ? result.push(values.tehtavat3) : null;
  return result;
};

class Rekry extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      tehtavat: [],
      authState: 0,
      kaikkiTehtavat: [],
      kaikkiJarjestot: [],
      rekryAuki: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ajax
      .sendGet('/tehtavat')
      .then((tehtavat) => {
        this.setState({ kaikkiTehtavat: tehtavat.data });
      })
      .catch((err) => {
        console.log(err);
      });
    ajax
      .sendGet('/jarjestot')
      .then((jarjestot) => {
        this.setState({ kaikkiJarjestot: jarjestot.data });
      })
      .catch((err) => {
        console.log(err);
      });
    ajax.sendGet('/rekryAuki').then((tag) => {
      this.setState({ rekryAuki: tag.data[0].truefalse });
    });
  }

  // Submit form
  handleSubmit(values) {
    this.props.clearMessages();
    const url = '/produktionjasen';
    const data = {
      fname: values.fname,
      sname: values.lname,
      email: values.email,
      pnumber: values.pnumber,
      tehtavat: getTehtavat(values),
      jarjesto: values.jarjesto,
      lisatiedot: values.lisatiedot,
      jasenyys: values.jasenyys === 'true',
    };
    console.log('DATA:');
    console.log(data);
    if (this.validateRekry(values)) {
      ajax
        .sendPut(url, data)
        .then((data) => {
          if (data.success === true) {
            this.setState({ authState: 1 });
          }
        })
        .catch((err) => {
          console.log(err);
          this.addMessage(
            MESSAGE_ERROR,
            'Virhe!',
            'Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.',
          );
        });
    }
  }

  // Validates if all necessary info has been given
  validateRekry(values) {
    let valid = true;
    if (
      !values.fname ||
      !values.lname ||
      !values.email ||
      !values.pnumber ||
      !values.tehtavat1 ||
      !values.jarjesto ||
      !values.lisatiedot
    ) {
      this.props.addMessage({ type: constants.MESSAGE_WARNING, header: 'Virhe!', text: 'Kaikki kentät on täytettävä' });
      valid = false;
    }
    if (!utils.isValidEmail(values.email)) {
      this.props.addMessage({ type: constants.MESSAGE_WARNING, header: 'Virhe!', text: 'Sähköposti on virheellinen' });
      valid = false;
    }
    return valid;
  }

  render() {
    return (
      <div>
        {this.state.authState === 0 ? (
          <Rekryform
            rekryAuki={this.state.rekryAuki}
            tehtavat={this.state.tehtavat}
            jasenyys={this.state.jasenyys}
            kaikkiTehtavat={this.state.kaikkiTehtavat}
            kaikkiJarjestot={this.state.kaikkiJarjestot}
            onSubmit={this.handleSubmit}
            messages={
              <Messages />
            }
          />
        ) : (
          <Kiitos />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  clearMessages: () => dispatch(clearMessages()),
});

Rekry.propTypes = {
  addMessage: PropTypes.func,
  clearMessages: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rekry);
