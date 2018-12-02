import React, { Component } from 'react';

class Sahkopostit extends Component {
  componentDidMount() {
    console.log('mount');
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    let sahkopostit = '';
    this.props.jasenet.map((jasen, i) => {
      if (jasen.email && jasen.email !== '') {
        sahkopostit += jasen.email;
        if (this.props.jasenet[i + 1]) {
          sahkopostit += '; ';
        }
      }
      /* console.log("asdf")
            return (
                <div key={i}>
                    {jasen.email && jasen.email !== "" ? <div>{jasen.email}, </div> : ""}
                </div>
            ) */
    });
    return (
      <div>
        <div className="row" />
        <div className="col">
          {sahkopostit}
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-default"
              onClick={this.props.toggleSahkopostit}
            >Piilota sähköpostit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sahkopostit;
