import React, { Component } from 'react';

class Ilmonneet extends Component {
  render() {
    const ilmonneet = this.props.ilmonneet.map((ilmonnut, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>
          {ilmonnut.fname} {ilmonnut.sname}
        </td>
        <td>{ilmonnut.jarjesto}</td>
      </tr>
    ));
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nimi</th>
            <th>Speksi</th>
          </tr>
        </thead>
        <tbody>{ilmonneet}</tbody>
      </table>
    );
  }
}

export default Ilmonneet;
