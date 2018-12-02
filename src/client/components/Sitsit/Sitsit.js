import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import styles from './Sitsit.css';
import Sitsitform from './Sitsitform';

import utils from '../../Utils/Utils';
import ajax from '../../Utils/Ajax';

const MESSAGE_SUCCESS = 'success';
const MESSAGE_WARNING = 'warning';
const MESSAGE_ERROR = 'error';

class Sitsit extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      tapahtuma: 'interspeksuaaliset2018',
      fname: '',
      sname: '',
      email: '',
      jarjesto: '',
      holillisuus: 'true',
      allergiat: '',
      messages: [],
      warnings: [],
      errors: [],
      ilmonneet: [],
      sitsitAuki: false,
      sitsiKiintio: true,
      ilmottu: false,
      hsCount: 0,
      ioCount: 0,
      lexCount: 0,
      tlksCount: 0,
      tukyCount: 0,
      spexetCount: 0,
      humanistiCount: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.countSpeksit = this.countSpeksit.bind(this);
  }

  componentDidMount() {
    ajax.sendGet('/ohjaustieto/sitsitAuki')
      .then((tag) => {
        console.log(tag.data[0]);
        this.setState({ sitsitAuki: tag.data[0].truefalse });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ sitsitAuki: true });

    ajax.sendGet('/ohjaustieto/sitsiKiintio')
      .then((tag) => {
        console.log(tag.data[0]);
        this.setState({ sitsiKiintio: tag.data[0].truefalse });
      })
      .catch((err) => {
        console.log(err);
      });

    ajax.sendGet('/ilmo/interspeksuaaliset2018')
      .then((_data) => {
        this.setState({ ilmonneet: _data.data });
        this.countSpeksit();
        console.log(_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Handle all input events
  handleChange(e) {
    const value = e.target.value;

    this.setState({ [e.target.name]: value });
    this.setState({
      messages: [],
      warnings: [],
      errors: [],
    });
  }

  // Submit form
  handleSubmit(e) {
    e.preventDefault();
    const url = '/ilmo';

    if (this.validateSitsit()) {
      ajax.sendPut(
        url,
        {
          tapahtuma: this.state.tapahtuma,
          fname: this.state.fname,
          sname: this.state.sname,
          email: this.state.email,
          jarjesto: this.state.jarjesto,
          juoma: this.state.holillisuus,
          ruokavalio: this.state.lisatiedot,


        },
      ).then((data) => {
        this.addMessage(MESSAGE_SUCCESS, 'Ilmoittautuminen onnistui!');
        this.setState({ ilmottu: true });
      }).catch((err) => {
        console.log(err);
        this.addMessage(MESSAGE_ERROR, 'Virhe!', 'Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.');
      });
    }
  }

  // Count enrollments
  countSpeksit() {
    ajax.sendGet('/ilmo/interspeksuaaliset2018')
      .then((_data) => {
        this.setState({ ilmonneet: _data.data });
        console.log(_data);
      })
      .catch((err) => {
        console.log(err);
      });


    let hs = 0;
    let io = 0;
    let lex = 0;
    let tlks = 0;
    let tuky = 0;
    let spexet = 0;
    let humanisti = 0;
    for (let i = 0; i < this.state.ilmonneet.length; i++) {
      if (this.state.ilmonneet[i].jarjesto === 'HybridiSpeksi') {
        hs += 1;
      } else if (this.state.ilmonneet[i].jarjesto === 'I/O-speksi') {
        io += 1;
      } else if (this.state.ilmonneet[i].jarjesto === 'LEX SPEX') {
        lex += 1;
      } else if (this.state.ilmonneet[i].jarjesto === 'TLKS SPEKSI') {
        tlks += 1;
      } else if (this.state.ilmonneet[i].jarjesto === 'TuKY-Speksi') {
        tuky += 1;
      } else if (this.state.ilmonneet[i].jarjesto === 'Akademiska Spexet vid Åbo Akademi R.F.') {
        spexet += 1;
      } else if (this.state.ilmonneet[i].jarjesto === 'Turkulainen Humanistispeksi') {
        humanisti += 1;
      }
    }
    this.setState({
      hsCount: hs,
      ioCount: io,
      lexCount: lex,
      tlksCount: tlks,
      tukyCount: tuky,
      spexetCount: spexet,
      humanistiCount: humanisti,
    });
  }

  // Validates if all necessary info has been given
  validateSitsit() {
    this.countSpeksit();

    let valid = true;
    if (
      this.state.fname === ''
            || this.state.sname === ''
            || this.state.email === ''
            || this.state.jarjesto === ''
    ) {
      this.addMessage(MESSAGE_WARNING, 'Virhe!', 'Kaikki kentät on täytettävä');
      valid = false;
    }
    if (!utils.isValidEmail(this.state.email)) {
      this.addMessage(MESSAGE_WARNING, 'Virhe!', 'Sähköposti on virheellinen');
      valid = false;
    }
    if (this.state.sitsiKiintio && this.state.jarjesto === 'HybridiSpeksi' && this.state.hsCount > 16 ||
            this.state.sitsiKiintio && this.state.jarjesto === 'I/O-speksi' && this.state.ioCount > 16 ||
            this.state.sitsiKiintio && this.state.jarjesto === 'LEX SPEX' && this.state.lexCount > 16 ||
            this.state.sitsiKiintio && this.state.jarjesto === 'TLKS SPEKSI' && this.state.tlksCount > 16 ||
            this.state.sitsiKiintio && this.state.jarjesto === 'TuKY-Speksi' && this.state.tukyCount > 16 ||
            this.state.sitsiKiintio && this.state.jarjesto === 'Akademiska Spexet vid Åbo Akademi R.F.' && this.state.spexetCount > 16 ||
            this.state.sitsiKiintio && this.state.jarjesto === 'Turkulainen Humanistispeksi' && this.state.humanistiCount > 16) {
      this.addMessage(MESSAGE_WARNING, 'Virhe!', 'Järjestön kiintiö on jo täynnä');
      valid = false;
    }

    return valid;
  }

  // Add different kinds of error or warning messages
  addMessage(type, newHeader, newText) {
    if (type === MESSAGE_WARNING) {
      const newWarnings = this.state.warnings;
      newWarnings.push({ header: newHeader, text: newText });
      this.setState({ warnings: newWarnings });
    } else if (type === MESSAGE_ERROR) {
      const newErrors = this.state.errors;
      newErrors.push({ header: newHeader, text: newText });
      this.setState({ erros: newErrors });
    } else if (type === MESSAGE_SUCCESS) {
      const newMessages = this.state.messages;
      newMessages.push({ header: newHeader, text: newText });
      this.setState({ messages: newMessages });
    }
  }

  render() {
    const form = null;
    return (
      <div>
        <Sitsitform
          sitsitAuki={this.state.sitsitAuki}
          ilmottu={this.state.ilmottu}
          fname={this.state.fname}
          sname={this.state.sname}
          email={this.state.email}
          jarjesto={this.state.jarjesto}
          holillisuus={this.state.holillisuus}
          allergiat={this.state.allergiat}
          ilmonneet={this.state.ilmonneet}
          hsCount={this.state.hsCount}
          ioCount={this.state.ioCount}
          lexCount={this.state.lexCount}
          tlksCount={this.state.tlksCount}
          tukyCount={this.state.tukyCount}
          spexetCount={this.state.spexetCount}
          humanistiCount={this.state.humanistiCount}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Sitsit;

