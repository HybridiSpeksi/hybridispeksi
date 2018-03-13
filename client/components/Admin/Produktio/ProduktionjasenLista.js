import React from 'react';
import PropTypes from 'prop-types';
import css from './Produktionjasenet.css';

const ProduktionjasenLista = ({ jasenet, valitseJasen }) => {
  const listarivit = jasenet.map((jasen, i) => {
    let tehtavat = '';
    jasen.tehtavat.map((t, k) => {
      tehtavat += t;
      if (jasen.tehtavat.length > k + 1) {
        tehtavat += ', ';
      }
    });
    return (
      <tr key={jasen._id} onClick={() => valitseJasen(jasen)}>
        <td>{i + 1}</td>
        <td>
          {jasen.fname} {jasen.sname}
        </td>
        <td>{jasen.email}</td>
        <td>{jasen.pnumber}</td>
        <td>{tehtavat}</td>
        <td>{jasen.member ? <i className="fa fa-check" aria-hidden="true" /> : ''}</td>
      </tr>
    );
  });
  return (
    <div className={css.jasentable}>
      <table className="table table-inverse table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nimi</th>
            <th>Sähköposti</th>
            <th>Puh</th>
            <th>Tehtävä</th>
            <th>Yhdistyksen jäsen</th>
          </tr>
        </thead>
        <tbody>{listarivit}</tbody>
      </table>
    </div>
  );
};

ProduktionjasenLista.propTypes = {
  jasenet: PropTypes.array,
  valitseJasen: PropTypes.func,
};

export default ProduktionjasenLista;
