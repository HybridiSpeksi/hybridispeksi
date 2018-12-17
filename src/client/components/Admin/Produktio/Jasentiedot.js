import React from 'react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import PropTypes from 'prop-types';
import { Text, Dropdown } from '../../../Utils/Form';
import styles from './Produktionjasenet.css';
import { clearSelectedMember, updateSelecteProductiondMember, saveSelectedMember } from '../../../actions/productionActions';

import * as auth from '../../../Utils/Auth';

const Jasentiedot = ({

  selectedMember, tehtavat, update, save,
}) => {
  const updateTehtavaAtIndex = (tehtava, i) => {
    const _tehtavat = [...selectedMember.tehtavat];
    _tehtavat[i] = tehtava;
    return _tehtavat;
  };

  const removeTehtavaAtIndex = (i) => {
    const _tehtavat = [...selectedMember.tehtavat];
    _tehtavat.splice(i, 1);
    return _tehtavat;
  };

  const addTehtava = () => {
    const _tehtavat = [...selectedMember.tehtavat];
    _tehtavat.push({ key: 'tehtava', value: '', name: '' });
    return _tehtavat;
  };

  const getTehtavavalinnat = () => {
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
            onChange={e => update({ ...selectedMember, tehtavat: updateTehtavaAtIndex(e.target.value, i) })}
          />
          <button onClick={() => update({ ...selectedMember, tehtavat: removeTehtavaAtIndex(i) })}>
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
              onChange={e => update({ ...selectedMember, email: e.target.value })}
              placeholder="Sähköposti"
              id="email-input"
              autofocus={false}
              label=""
            />
          </div>
          <div className="col-sm-6">
            <Text
              value={selectedMember.pnumber}
              name="pnumber"
              type="tel"
              onChange={e => update({ ...selectedMember, pnumber: e.target.value })}
              placeholder="Puh"
              id="pnumber-input"
              autofocus={false}
            />
          </div>
        </div>
        <div className="row">{getTehtavavalinnat()}</div>
        <div className="row">
          <div className="col">
            <button className="btn" onClick={() => update({ ...selectedMember, tehtavat: addTehtava() })}>
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
        {selectedMember.updated ? (
          <button className="btn btn-primary" onClick={() => save(selectedMember)}>
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
  update: PropTypes.func,
  save: PropTypes.func,
  tehtavat: PropTypes.array,
  lisaaTehtava: PropTypes.func,
  poistaTehtava: PropTypes.func,

};

const mapStateToProps = state => ({
  selectedMember: state.production.selectedMember,
  tehtavat: state.ohjaustieto.tehtavat,
});

const mapDispatchToProps = dispatch => ({
  clearSelectedMember: () => dispatch(clearSelectedMember()),
  update: member => dispatch(updateSelecteProductiondMember(member)),
  save: member => dispatch(saveSelectedMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jasentiedot);
