import React from 'react';
import PropTypes from 'prop-types';

const List = ({ speksaajat }) => (
  <table className="table table-striped table-table-hover">
    <thead>
      <tr>
        <th>Nimi</th>
        <th>Perustelut</th>
      </tr>
    </thead>
    <tbody>
      {speksaajat.map(s => (
        <tr key={s._id}>
          <td>{s.personToVote}</td>
          <td>{s.comment}</td>
        </tr>
          ))}
    </tbody>
  </table>
);

export default List;

List.propTypes = {
  speksaajat: PropTypes.array,
};
