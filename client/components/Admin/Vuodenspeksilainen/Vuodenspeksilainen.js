import React, { Component } from 'react';
import List from './SpeksaajatList';
import ajax from '../../../Utils/Ajax';

class Vuodenspeksilainen extends Component {
  constructor() {
    super();

    this.state = {
      speksaajat: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await ajax.sendGet('/admin/h/vuodenspeksaaja');
      this.setState({ speksaajat: res.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Vuoden speksiläinen -äänestys</h1>
        <div className="row">
          <div className="col-6">
            <List speksaajat={this.state.speksaajat} />
          </div>
        </div>
      </div>
    );
  }
}

export default Vuodenspeksilainen;
