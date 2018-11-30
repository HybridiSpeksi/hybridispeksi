import React from 'react';
import PropTypes from 'prop-types';

const Loginform = ({
  handleSubmit, handleChange, messages, email, password,
}) => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-sm-auto">
        <h3>Kirjaudu admin-paneeliin</h3>
      </div>
    </div>
    <div className="row justify-content-center">
      <form onSubmit={handleSubmit} className="col-sm-5" name="login">
        <div className="form-group">
          <label htmlFor="emailInput">Sähköposti</label>
          <input
            autoFocus="true"
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            className="form-control"
            id="emailInput"
            placeholder="Sähköpostiosoite"
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput">Salasana</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            className="form-control"
            id="passwordInput"
            placeholder="Salasana"
          />
        </div>

        <button id="kirjauduButton" className="btn btn-default" type="submit">
          Kirjaudu
        </button>
        <button
          id="haeTunnustaButton"
          inputMode="numeric"
          type="button"
          className="btn btn-default"
          onClick={handleChange}
          name="authState"
          value={1}
        >
          Hae tunnusta
        </button>
      </form>
    </div>
    <div className="row justify-content-center">
      <div className="col-sm-5">{messages}</div>
    </div>
  </div>
);

export default Loginform;

Loginform.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  messages: PropTypes.object,
  email: PropTypes.string,
  password: PropTypes.string,
};
