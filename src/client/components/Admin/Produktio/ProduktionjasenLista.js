import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Produktionjasenet.css';
import { selectMember } from '../../../actions/productionActions';

const Jasen = ({
  jasen, i, select,
}) => {
  const getTehtavatStr = (j) => {
    let tehtavatStr = '';
    j.tehtavat.map((t, k) => {
      tehtavatStr += t;
      if (j.tehtavat.length > k + 1) {
        tehtavatStr += ', ';
      }
      return tehtavatStr;
    });
    return tehtavatStr;
  };
  return (
    <tr onClick={() => select(jasen)}>
      <td>{i + 1}</td>
      <td>
        {jasen.fname} {jasen.lname}
      </td>
      <td>{jasen.email}</td>
      <td>{jasen.pnumber}</td>
      <td>{getTehtavatStr(jasen)}</td>
      <td>{jasen.member ? <i className="fa fa-check" aria-hidden="true" /> : ''}</td>
    </tr>
  );
};

Jasen.propTypes = {
  jasen: PropTypes.object,
  i: PropTypes.number,
  select: PropTypes.func,
};

const ProduktionjasenLista = ({ select, productionmembers, searchObject }) => {
  const { text, tehtava, jarjesto } = searchObject;
  const checkString = (j) => {
    if (text) {
      return j.fname.toLowerCase().indexOf(text) !== -1
      || j.lname.toLowerCase().indexOf(text) !== -1
      || j.email.toLowerCase().indexOf(text) !== -1;
    }
    return true;
  };

  const checkTehtava = (j) => {
    if (tehtava) {
      return j.tehtavat.indexOf(tehtava) !== -1;
    }
    return true;
  };

  const checkJarjesto = (j) => {
    if (jarjesto) {
      return j.jarjesto.indexOf(jarjesto) !== -1;
    }
    return true;
  };

  const doFilter = jasen => checkString(jasen) && checkTehtava(jasen) && checkJarjesto(jasen);

  const rows = productionmembers
    .filter(jasen => doFilter(jasen))
    .map((jasen, i) => (
      <Jasen jasen={jasen} i={i} select={select} key={jasen._id} />
    ));
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
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

ProduktionjasenLista.propTypes = {
  searchObject: PropTypes.object,
  select: PropTypes.func,
  productionmembers: PropTypes.array,
};

const mapStateToProps = state => ({
  productionmembers: state.production.members,
  searchObject: state.production.searchObject,
});

const mapDispatchToProps = dispatch => ({
  select: member => dispatch(selectMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProduktionjasenLista);
