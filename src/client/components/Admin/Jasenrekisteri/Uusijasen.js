import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, Radio } from '../../../Utils/Form';
import utils from '../../../Utils/Utils';
import Modal from '../../../Utils/Modal';
import ajax from '../../../Utils/Ajax';
import { addWarningMessage, addSuccessMessage, clearMessages } from '../../../actions/messageActions';

class Uusijasen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jasen: {
        _id: '',
        fname: '',
        sname: '',
        email: '',
        hometown: '',
        memberOfTyy: true,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.tallennaJasen = this.tallennaJasen.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.jasen._id !== nextProps.jasen._id) {
      const _jasen = nextProps.jasen;
      _jasen.hometown = '';
      _jasen.memberOfTyy = true;
      this.setState({ jasen: _jasen });
    }
  }

  tallennaJasen() {
    if (this.state.jasen.fname === ''
            || this.state.jasen.sname === ''
            || this.state.jasen.email === ''
            || this.state.jasen.hometown === '') {
      this.props.warningMessage({ header: 'Kaikki kentät on täytettävä' });
      setTimeout(() => {
        this.props.clear();
      }, 3000);
    } else {
      ajax.sendPut('/admin/h/jasenrekisteri', this.state.jasen)
        .then((data) => {
          console.log(data);
          this.props.successMessage({ header: 'Jäsen lisätty!' });
          $('#uusijasen-modal').modal('hide');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleChange(e) {
    let _value = e.target.value;
    if (e.target.name === 'memberOfTyy') {
      _value = utils.parseBoolean(_value);
    }
    const _jasen = this.state.jasen;
    _jasen[e.target.name] = _value;
    this.setState({ jasen: _jasen });
  }

  render() {
    return (
      <Modal
        modalTitle="Lisää uusi jäsen jäsenrekisteriin"
        closeText="Peruuta"
        saveText="Lisää jäsen"
        handleSave={this.tallennaJasen}
        modalId="uusijasen-modal"
      >
        <div className="container-fluid">

          <div className="row">
            <div className="col">
              <Text
                id="fname-input"
                autoFocus
                name="fname"
                onChange={this.handleChange}
                value={this.state.jasen.fname}
                placeholder="Etunimet"
              />
            </div>
            <div className="col">
              <Text
                id="sname-input"
                name="sname"
                onChange={this.handleChange}
                value={this.state.jasen.sname}
                placeholder="Sukunimi"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Text
                id="email-input"
                name="email"
                onChange={this.handleChange}
                value={this.state.jasen.email}
                placeholder="Sähköposti"
              />

            </div>
            <div className="col">
              <Text
                id="hometown-input"
                name="hometown"
                onChange={this.handleChange}
                value={this.state.jasen.hometown}
                placeholder="Kotikunta"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Radio
                options={[
                                    { label: 'TYYn jäsen', value: true },
                                    { label: 'Ei TYYn jäsen', value: false },
                                ]}
                value={this.state.jasen.memberOfTyy}
                name="memberOfTyy"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

Uusijasen.propTypes = {
  jasen: PropTypes.object,
  successMessage: PropTypes.func,
  warningMessage: PropTypes.func,
  clear: PropTypes.func,
};

const mapStateToProps = state => ({
  jasen: state.production.selectedMember,
});

const mapDispatchToProps = dispatch => ({
  successMessage: message => dispatch(addSuccessMessage(message)),
  warningMessage: message => dispatch(addWarningMessage(message)),
  clear: () => dispatch(clearMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Uusijasen);
