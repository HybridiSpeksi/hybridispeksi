import React, { Component } from 'react';
import styles from './Vuodenspeksaaja.css';
import Form from './VuodenspeksaajaForm';

import ajax from '../../Utils/Ajax';

class Vuodenspeksaaja extends Component {
  constructor() {
    super();
    this.state = {
      sent: false,
      submission: {
        name: 'nimi',
        personToVote: 'äänestettävä',
        comment: 'commentti',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const _submission = { ...this.state.submission };
    _submission[e.target.name] = e.target.value;
    this.setState({ submission: _submission });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={'container ' + styles.container}>
        <div className={'row justify-content-center ' + styles.banner}>
          <div className={'col-sm-11 col-md-9 col-lg-6 ' + styles.form_canvas}>
            <h2>Vuoden speksaaja</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, necessitatibus, animi obcaecati iusto placeat eveniet error blanditiis dolor nihil soluta, excepturi veniam quod? Obcaecati suscipit in perferendis. Beatae, eius nobis?</p>
            <Form
              handleChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submission={this.state.submission}
              sent={this.state.sent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Vuodenspeksaaja;
