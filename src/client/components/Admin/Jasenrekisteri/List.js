import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import cuid from 'cuid';
import { selectMember } from '../../../actions/jasenrekisteriActions';

import styles from './Jasenrekisteri.css';

const List = ({ select, members }) => {
  const list = members.map((jasen, i) => (
    <tr onClick={() => select(jasen)} key={cuid()}>
      <td>{i + 1}</td>
      <td>{jasen.fname} {jasen.sname}</td>
      <td>{jasen.email}</td>
      <td>{jasen.approved ? <i className="fa fa-check" aria-hidden="true" /> : ''}</td>
      <td><Moment format="DD.MM.YYYY">{jasen.joinDate}</Moment></td>
    </tr>
  ));
  return (
    <div className={styles.table}>
      <table className="table table-inverse table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nimi</th>
            <th>@</th>
            <th>Hyväksytty</th>
            <th>Hakupv</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  );
};

List.propTypes = {
  members: PropTypes.array,
  select: PropTypes.func,
};

const mapStateToProps = state => ({
  members: state.jasenrekisteri.members,
});

const mapDispatchToProps = dispatch => ({
  select: member => dispatch(selectMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
