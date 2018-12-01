import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Produktionjasenet.css';
import { Text, Dropdown } from '../../../Utils/Form';

import { updateSearchObject } from '../../../actions/productionActions';

const Haku = ({
  tehtavat, jarjestot, searchObject, update,
}) => (
  <div className={'row ' + styles.hakulaatikko}>
    <div className="col">
      <h3>Henkilöhaku</h3>
      <div className="row">
        <div className="col">
          <Text
            type="text"
            autoFocus="false"
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
            options={tehtavat}
            id="tehtava-haku"
            selected={searchObject.tehtava}
            onChange={e => update({ ...searchObject, tehtava: e.target.value })}
            name="tehtava"
          />
        </div>
        <div className="col">
          <Dropdown
            options={jarjestot}
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

const mapStateToProps = state => ({
  searchObject: state.production.searchObject,
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
