import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Produktionjasenet.css';
import { selectMember } from '../../../actions/productionActions';

const ProduktionjasenLista = ({ selectMember, productionmembers }) => {
  const listarivit = productionmembers.map((jasen, i) => {
    let tehtavat = '';
    jasen.tehtavat.map((t, k) => {
      tehtavat += t;
      if (jasen.tehtavat.length > k + 1) {
        tehtavat += ', ';
      }
    });
    return (
      <tr key={jasen._id} onClick={() => selectMember(jasen)}>
        <td>{i + 1}</td>
        <td>
          {jasen.fname} {jasen.lname}
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
  selectMember: PropTypes.func,
  productionmembers: PropTypes.array,
};

const mapStateToProps = state => ({
  productionmembers: state.production.filteredMembers,
});

const mapDispatchToProps = dispatch => ({
  selectMember: member => dispatch(selectMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProduktionjasenLista);
