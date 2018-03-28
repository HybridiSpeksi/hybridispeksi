import React, { Component } from 'react';

import ajax from '../../Utils/Ajax';

class Palautteet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palautteet: []
    };
  }

  componentDidMount() {
    ajax
      .sendGet('/admin/palautteet')
      .then((_data) => {
        this.setState({ palautteet: _data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    const palautteet = this.state.palautteet.map((palaute, i) => {
      return (
        <div className="card" style={{margin:'10px'}}>
          <div className="card-block">
            <h4 className="card-title">Palaute #{i+1}</h4>
            <div className="row">
              <div className="col-4"><h6 className="card-subtitle mb-2 text-muted">Nimi:</h6></div>
              <div className="col-8"><h6 className="card-subtitle mb-2 text-muted">{palaute.name}</h6></div>
            </div>
            <div className="row">
              <div className="col-4"><h6 className="card-subtitle mb-2 text-muted">Email:</h6></div>
              <div className="col-8"><h6 className="card-subtitle mb-2 text-muted">{palaute.email}</h6></div>
            </div>
            <p className="card-text">{palaute.feedback}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <h1>Palautteet</h1>
          </div>
        </div>
        <div className="row">
          {palautteet}
        </div>
      </div>
    );
  }
}
/* Varaustenhallinta.propTypes = {
} */

export default Palautteet;
