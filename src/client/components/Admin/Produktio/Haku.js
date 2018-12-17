import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Produktionjasenet.css';
import { Text, Dropdown } from '../../../Utils/Form';

import { updateSearchObject } from '../../../actions/productionActions';

const Haku = ({
  tehtavat, jarjestot, searchObject, update,
}) => {
  const getTehtavat = () => {
    const _tehtavat = [...tehtavat];
    if (tehtavat) {
      _tehtavat.unshift({
        key: 'tehtava', name: 'Tehtävä', value: '', _id: '',
      });
    }
    return _tehtavat;
  };
  const getJarjestot = () => {
    const _jarjestot = [...jarjestot];
    if (jarjestot) {
      _jarjestot.unshift({
        key: 'jarjesto', name: 'Järjestö', value: '', _id: '',
      });
    }
    return _jarjestot;
  };
  return (
    <div className={'row ' + styles.hakulaatikko}>
      <div className="col-sm-12">
        <h3>Henkilöhaku</h3>
        <div className="row">
          <div className="col-sm-12">
            <Text
              type="text"
              autoFocus={false}
              name="pikahaku"
              onChange={e => update({ ...searchObject, text: e.target.value.toLowerCase() })}
              value={searchObject.text}
              placeholder="Pikahaku"
              id="pikahaku-input"
              label=""
            />
            <p>Hae nimellä, sähköpostilla tai tehtävällä. Kirjoita tehtävä kokonaan. Vain yksi hakutermi.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Dropdown
              options={getTehtavat()}
              id="tehtava-haku"
              selected={searchObject.tehtava}
              onChange={e => update({ ...searchObject, tehtava: e.target.value })}
              name="tehtava"
            />
          </div>
          <div className="col">
            <Dropdown
              options={getJarjestot()}
              id="jarjesto-haku"
              selected={searchObject.jarjesto}
              onChange={e => update({ ...searchObject, jarjesto: e.target.value })}
              name="jarjesto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchObject: state.production.searchObject,
  tehtavat: state.ohjaustieto.tehtavat,
  jarjestot: state.ohjaustieto.jarjestot,
});

const mapDispatchToProps = dispatch => ({
  update: searchObject => dispatch(updateSearchObject(searchObject)),
});

Haku.propTypes = {
  searchObject: PropTypes.object,
  tehtavat: PropTypes.array,
  jarjestot: PropTypes.array,
  update: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Haku);
