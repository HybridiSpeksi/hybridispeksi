import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsers, fetchRoles, selectUser } from 'actions/userActions';

import UsersList from './UsersList';
import User from './User';

class UserManagement extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchRoles();
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Käyttäjät</h1>
        <div className="row">
          <div className="col-sm-6">
            <UsersList />
          </div>
          <div className="col-sm-6">
            {this.props.selectedUser.id ? (
              <User
                kayttaja={this.props.selectedUser}
              />
                        ) : ''}
          </div>
        </div>
      </div>
    );
  }
}

UserManagement.propTypes = {
  selectedUser: PropTypes.object,
  fetchUsers: PropTypes.func,
  fetchRoles: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.user.users,
  selectedUser: state.user.selectedUser,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchRoles: () => dispatch(fetchRoles()),
  selectUser: user => dispatch(selectUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
