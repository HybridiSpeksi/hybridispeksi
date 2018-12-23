import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUser, saveUser, deleteUser } from 'actions/userActions';
import { Text, Dropdown } from '../../../Utils/Form';

const User = ({
  user, update, roles, save, remove,
}) => {
  const handleRemove = () => {
    if (confirm('Poistetaanko käyttäjä?')) {
      remove(user);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col">
          <h3>
            {user.fname} {user.sname}
          </h3>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Dropdown
            options={roles}
            id="roolit-select"
            name="role"
            onChange={e => update({ ...user, role: e.target.value })}
            selected={user.role}
          />
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
};

const mapStateToProps = state => ({
  user: state.user.selectedUser,
});

const mapDispatchToProps = dispatch => ({
  update: user => dispatch(updateUser(user)),
  save: user => dispatch(saveUser(user)),
  remove: user => dispatch(deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
