import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cuid from 'cuid';

import styles from './UserManagement.css';
import { updateUser, saveUser, deleteUser, addRoleToUser, removeRoleFromUser } from 'actions/userActions';
import { Text, Dropdown } from '../../../Utils/Form';


const UserRoles = ({ roles, remove, user }) => {
  const removeRole = (id) => {
    remove(user.id, id);
  };
  return (
    <div className={styles.roles}>
      {roles.map((role) => {
        return (
          <div key={cuid()} className={styles.role}>
            <div>{role.name}</div>
            <div><button onClick={() => removeRole(role.id)}><i className="fa fa-times" aria-hidden="true" /></button></div>
          </div>
        );
      })}
    </div>
  );
};

const AllRoles = ({
  roles, userRoles, add, user,
}) => {
  const addRole = (id) => {
    add(user.id, id);
  };

  const hasRole = (role) => {
    return userRoles.filter(userRole => userRole.id === role.id).length > 0;
  };

  return (
    <div className={styles.roles}>
      {roles
      .filter(role => !hasRole(role))
      .map((role) => {
        return (
          <div key={cuid()} className={styles.role}>
            <div>{role.name}</div>
            <div><button onClick={() => addRole(role.id)}><i className="fa fa-plus" /></button></div>
          </div>
        );
      })}
    </div>
  );
};

AllRoles.propTypes = {
  roles: PropTypes.array,
  userRoles: PropTypes.array,
  add: PropTypes.func,
  user: PropTypes.object,
};

const User = ({
  user, update, roles, save, remove, addRole, removeRole,
}) => {
  const handleRemove = () => {
    if (confirm('Poistetaanko käyttäjä?')) {
      remove(user);
    }
  };
  const { Roles, ContactInfo } = user;
  return (
    <div>
      <div className="row">
        <div className="col">
          <h3>
            {ContactInfo.fname} {ContactInfo.lname}
          </h3>
          <p>{ContactInfo.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Roolit</h4>
          <UserRoles roles={Roles} remove={removeRole} user={user} />
        </div>
        <div className="col">
          <h4>Valittavat roolit</h4>
          <AllRoles roles={roles} userRoles={Roles} add={addRole} user={user} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {user.updated ? (
            <button onClick={() => save(user)} className="btn btn-primary">
              Tallenna
            </button>
        ) : ''}
          <button onClick={handleRemove} className="btn btn-danger">
          Poista käyttäjä
          </button>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
  update: PropTypes.func,
  roles: PropTypes.array,
  save: PropTypes.func,
  remove: PropTypes.func,
  addRole: PropTypes.func,
  removeRole: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.user.selectedUser,
  roles: state.user.roles,
});

const mapDispatchToProps = dispatch => ({
  update: user => dispatch(updateUser(user)),
  save: user => dispatch(saveUser(user)),
  remove: user => dispatch(deleteUser(user)),
  addRole: (userId, roleId) => dispatch(addRoleToUser(userId, roleId)),
  removeRole: (userId, roleId) => dispatch(removeRoleFromUser(userId, roleId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
