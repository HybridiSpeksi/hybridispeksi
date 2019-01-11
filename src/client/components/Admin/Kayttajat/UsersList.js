import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cuid from 'cuid';

import { selectUser } from 'actions/userActions';

const UsersList = ({ users, select }) => {
  const rows = users.map((user) => {
    const { ContactInfo, Roles } = user;
    return (
      <tr key={cuid()} onClick={() => select(user)}>
        <td>{ContactInfo.fname} {ContactInfo.lname}</td>
        <td>{ContactInfo.email}</td>
        <td>{Roles.length}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table table-inverse">
        <thead>
          <tr>
            <th>Nimi</th>
            <th>@</th>
            <th>Rooleja</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array,
  select: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
  select: user => dispatch(selectUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
