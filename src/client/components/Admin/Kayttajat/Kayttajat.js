import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsers, selectUser, updateUser } from 'actions/userActions';

import UsersList from './UsersList';
import User from './User';

class Kayttajat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: [
        { value: 0, name: 'Ei hyväksytty' },
        { value: 1, name: 'Lipunmyynti' },
        { value: 2, name: 'Ei määritelty' },
        { value: 3, name: 'Tuotanto' },
        { value: 4, name: 'Hallitus' },
        { value: 5, name: 'Webmaster' },
      ],
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
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
            {this.props.selectedUser._id ? (
              <User
                kayttaja={this.props.selectedUser}
                roles={this.state.roles}
              />
                        ) : ''}
          </div>
        </div>
      </div>
    );
  }
}

Kayttajat.propTypes = {
  users: PropTypes.array,
  selectedUser: PropTypes.object,
  fetchUsers: PropTypes.func,
  selectUser: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.user.users,
  selectedUser: state.user.selectedUser,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  selectUser: user => dispatch(selectUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kayttajat);
