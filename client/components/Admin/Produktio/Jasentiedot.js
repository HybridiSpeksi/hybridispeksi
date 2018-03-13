import React from 'react';
import PropTypes from 'prop-types';
import { Text, Dropdown } from '../../Utils/Form';
import styles from './Produktionjasenet.css';

import auth from '../../Utils/Auth';

const Jasentiedot = (props) => {
  const {
    jasen,
    tehtavat,
    handleChange,
    henkilotiedotMuuttuneet,
    tallennaMuutokset,
    lisaaTehtava,
    poistaTehtava,
    valitseJasen,
  } = props;
  const getTehtavavalinnat = () => {
    if (!jasen.tehtavat) {
      jasen.tehtavat = [];
    }
    const tehtavaValinnat = jasen.tehtavat.map((t, i) => {
      if (t === '') {
        t = 'tyhja';
      }
      return (
        <div className="col" key={i._id}>
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
              {jasen.fname} {jasen.sname}
            </h3>
          </div>
          <div className="col text-right">
            <button onClick={() => valitseJasen(false)} className="btn btn-default">
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Text
              value={jasen.email}
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
              value={jasen.pnumber}
              name="pnumber"
              type="tel"
              onChange={handleChange}
              placeholder="Puh"
              id="pnumber-input"
              autofocus="false"
            />
          </div>
        </div>
        <div className="row">{getTehtavavalinnat}</div>
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
              <i>"{jasen.lisatiedot}"</i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{jasen.jarjesto}</p>
          </div>
        </div>
        {henkilotiedotMuuttuneet ? (
          <button className="btn btn-primary" onClick={() => tallennaMuutokset()}>
            Tallenna muutokset
          </button>
        ) : (
          ''
        )}
        {jasen.hakeeJaseneksi && !jasen.member ? <p>Hakee yhdistyksen jäseneksi</p> : ''}
        {jasen.hakeeJaseneksi && !jasen.member && auth.getUserRole() > 3 ? (
          <button className="btn btn-primary" data-toggle="modal" data-target="#uusijasen-modal">
            Hae {jasen.fname}lle yhdistyksen jäsenyyttä
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

Jasentiedot.propTypes = {
  jasen: PropTypes.object,
  tehtavat: PropTypes.array,
  handleChange: PropTypes.func,
  tallennaMuutokset: PropTypes.func,
  lisaaTehtava: PropTypes.func,
  poistaTehtava: PropTypes.func,
  henkilotiedotMuuttuneet: PropTypes.bool,
  valitseJasen: PropTypes.func,
};

export default Jasentiedot;
