import React, { Component } from 'react';

import ajax from '../../../Utils/Ajax';

class Palautteet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palautteet: [],
      filteredPalautteet: [],
      searchword: '',
    };
    this.filterPalautteet = this.filterPalautteet.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ajax
      .sendGet('/admin/palautteet')
      .then((_data) => {
        this.setState({ palautteet: _data.data }, () => {
          this.filterPalautteet();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  filterPalautteet() {
    const result = this.state.palautteet.filter(palaute =>
      palaute.name.toLowerCase().includes(this.state.searchword) ||
      palaute.email.toLowerCase().includes(this.state.searchword) ||
      palaute.feedback.toLowerCase().includes(this.state.searchword));
    this.setState({ filteredPalautteet: result });
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value.toLowerCase() }, () => {
      this.filterPalautteet();
    });
  }


  render() {
    const palautteet = this.state.filteredPalautteet.map((palaute, i) => (
      <div className="card" style={{ margin: '10px' }} key={i}>
        <div className="card-block">
          <h4 className="card-title">Palaute #{i + 1}</h4>
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
    ));

    return (
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <h1>Palautteet</h1>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <input
              name="searchword"
              id="searchword"
              className="form-control"
              type="text"
              onChange={this.handleChange}
              value={this.state.searchword}
              placeholder="Hakusana"
            />
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
