import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loginform from './Loginform';
import Signupform from './Signupform';

import utils from '../../../Utils/Utils';
import * as auth from '../../../Utils/Auth';
import ajax from '../../../Utils/Ajax';
import { addWarningMessage, addErrorMessage, clearMessages, addSuccessMessage } from '../../../actions/messageActions';

class Login extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      email: '',
      password: '',
      passwordAgain: '',
      fname: '',
      sname: '',
      authState: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  // Handle all input events
  handleChange(e) {
    let value = e.target.value;

    // Check if numeric value and parse
    value = utils.parseNumberIfNumber(value);

    this.setState({ [e.target.name]: value });
  }

  // Submit form
  handleSubmit(e) {
    this.props.clearMessages();
    e.preventDefault();
    let url = '';
    if (e.target.name === 'login') {
      url += '/authenticate';
      ajax
        .sendPost(url, { email: this.state.email, password: this.state.password })
        .then((data) => {
          if (data.success === true) {
            auth.signIn(data.token, data.user);
            location.replace('/admin');
          } else {
            this.props.addWarning({ header: 'Kirjautuminen epäonnistui!', text: data.message });
          }
        })
        .catch((err) => {
          console.log(err);
          this.props.addError({
            title: 'Virhe!',
            text: 'Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.',
          });
        });
    } else if (e.target.name === 'signup') {
      if (this.validateSignup()) {
        url += '/signup';
        ajax
          .sendPost(url, {
            fname: this.state.fname,
            sname: this.state.sname,
            email: this.state.email,
            password: this.state.password,
          })
          .then((data) => {
            if (data.success === true) {
              this.props.addSuccess({
                header: 'Rekisteröinti onnistui!',
                text: 'Pääset kirjautumaan sisään kun sinut on hyväksytty webmasterien toimesta.',
              });
            } else {
              this.props.addWarning({ header: 'Rekisteröinti epäonnistui:', text: data.message });
            }
          })
          .catch((err) => {
            console.log(err);
            this.props.addError({
              header: 'Virhe!',
              text: 'Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.',
            });
          });
      }
    }
  }

  validateSignup() {
    let valid = true;
    if (this.state.fname === '' || this.state.sname === '' || this.state.email === '') {
      this.props.addWarning({ header: 'Virhe!', text: 'Kaikki kentät on täytettävä' });
      valid = false;
    }
    if (!utils.isValidEmail(this.state.email)) {
      this.props.addWarning({ header: 'Virhe!', text: 'Sähköposti on virheellinen' });
      valid = false;
    }
    if (this.state.password !== this.state.passwordAgain) {
      this.props.addWarning({ header: 'Virhe!', text: 'Salasanat eivät täsmää' });
      valid = false;
    }
    return valid;
  }

  render() {
    return (
      <div>
        {this.state.authState === 0 ? (
          <Loginform
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <Signupform
            fname={this.state.fname}
            sname={this.state.sname}
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

Login.propTypes = {
  addError: PropTypes.func,
  addWarning: PropTypes.func,
  addSuccess: PropTypes.func,
  clearMessages: PropTypes.func,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addSuccess: message => dispatch(addSuccessMessage(message)),
  addWarning: message => dispatch(addWarningMessage(message)),
  addError: message => dispatch(addErrorMessage(message)),
  clearMessages: () => dispatch(clearMessages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
