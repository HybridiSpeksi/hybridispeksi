import React from 'react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import PropTypes from 'prop-types';
import { Text, Dropdown } from '../../../Utils/Form';
import styles from './Produktionjasenet.css';
import { clearSelectedMember, updateSelectedMember } from '../../../actions/productionActions';

import * as auth from '../../../Utils/Auth';

const Jasentiedot = ({ selectedMember, tehtavat, updateSelectedMember }) => {
  const {
    handleChange,
    henkilotiedotMuuttuneet,
    tallennaMuutokset,
    lisaaTehtava,
    poistaTehtava,
  } = props;
  const getTehtavavalinnat = () => {
    if (!selectedMember.tehtavat) {
      selectedMember.tehtavat = [];
    }
    const tehtavaValinnat = selectedMember.tehtavat.map((t, i) => {
      if (t === '') {
        t = 'tyhja';
      }
      return (
        <div className="col" key={cuid()}>
          <Dropdown
            options={tehtavat}
            selected={t}
            id={i}
            label=""
            name="tehtavat"
            onChange={handleChange}
          />
          <button onClick={() => poistaTehtava(i)}>
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </div>
      );
    });
    return tehtavaValinnat;
  };

  return (
    <div className="row">
      <div className={'col ' + styles.jasentiedotlaatikko}>
        <div className="row">
          <div className="col">
            <h3>
              {selectedMember.fname} {selectedMember.lname}
            </h3>
          </div>
          <div className="col text-right">
            <button onClick={() => clearSelectedMember()} className="btn btn-default">
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Text
              value={selectedMember.email}
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Sähköposti"
              id="email-input"
              autofocus="false"
              label=""
            />
          </div>
          <div className="col-sm-6">
            <Text
              value={selectedMember.pnumber}
              name="pnumber"
              type="tel"
              onChange={handleChange}
              placeholder="Puh"
              id="pnumber-input"
              autofocus="false"
            />
          </div>
        </div>
        <div className="row">{getTehtavavalinnat()}</div>
        <div className="row">
          <div className="col">
            <button className="btn" onClick={lisaaTehtava}>
              Lisää tehtävä
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <i>"{selectedMember.lisatiedot}"</i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{selectedMember.jarjesto}</p>
          </div>
        </div>
        {henkilotiedotMuuttuneet ? (
          <button className="btn btn-primary" onClick={() => tallennaMuutokset()}>
            Tallenna muutokset
          </button>
        ) : (
          ''
        )}
        {selectedMember.hakeeJaseneksi && !selectedMember.member ? <p>Hakee yhdistyksen jäseneksi</p> : ''}
        {selectedMember.hakeeJaseneksi && !selectedMember.member && auth.getUserRole() > 3 ? (
          <button className="btn btn-primary" data-toggle="modal" data-target="#uusijasen-modal">
            Hae {selectedMember.fname}lle yhdistyksen jäsenyyttä
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

Jasentiedot.propTypes = {
  selectedMember: PropTypes.object,
  clearSelectedMember: PropTypes.func,
  tehtavat: PropTypes.array,
  handleChange: PropTypes.func,
  tallennaMuutokset: PropTypes.func,
  lisaaTehtava: PropTypes.func,
  poistaTehtava: PropTypes.func,
  henkilotiedotMuuttuneet: PropTypes.bool,
};

const mapStateToProps = state => ({
  selectedMember: state.production.selectedMember,
});

const mapDispatchToProps = dispatch => ({
  clearSelectedMember: () => dispatch(clearSelectedMember()),
  updateMember: member => dispatch(updateSelectedMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jasentiedot);
