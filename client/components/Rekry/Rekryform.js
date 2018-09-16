import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import PropTypes from 'prop-types';
import { DropdownReduxform } from '../../Utils/Form';

import styles from './Rekry.css';

let RekryForm = (props) => {
  // console.log("rekryauki:")
  // console.log(props.rekryAuki)
  const { kaikkiTehtavat, kaikkiJarjestot } = props;
  const { handleSubmit } = props;

  /*  const tehtavatOptions = kaikkiTehtavat.map((tehtava) => {
     if (tehtava.value !== 'hallitus') {
      return (
        <option key={cuid()} value={tehtava.value}>
          {tehtava.name}
        </option>
      );
    }
  });

  const jarjestoOptions = kaikkiJarjestot.map(jarjesto => (
    <option key={cuid()} value={jarjesto.value}>
      {jarjesto.name}
    </option>
  )); */

  return (
    <div className={'container-fluid ' + styles.container}>

      <div className={'row ' + styles.banner} />

      <div className={'row justify-content-sm-center ' + styles.content}>
        <div className={'col-sm-6 ' + styles.form_canvas}>
          <h2>Rekryilmoittautuminen</h2>
          <br />
          <p>Täytä tietosi allaoleviin kenttiin. Tähdellä merkityt kentät ovat pakollisia. Haettaviin tehtäviin pitää
                        täyttää vähintään ensisijainen hakutoive. Lisätietoja-kenttään tulee täyttää omia taustojasi,
                        jotka tukevat hakutoiveitasi.
          </p>
          <br />
          <form onSubmit={handleSubmit}>

            <div className={'row form-group align-items-center ' + styles.fname}>
              <div className="col-sm-3">
                <label htmlFor="fnameInput" className={styles.label}>Etunimi:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field name="fname" component="input" type="text" className="form-control" />
                {/* <input name="fname" id="fnameInput" className="form-control" type="text" onChange={props.handleChange} value={props.fname} placeholder="Etunimi" /> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.sname}>
              <div className="col-sm-3">
                <label htmlFor="snameInput" className={styles.label}>Sukunimi:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field name="lname" component="input" type="text" className="form-control" />
                {/* <input name="sname" id="snameInput" className="form-control" type="text" onChange={props.handleChange} value={props.sname} placeholder="Sukunimi" /> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.email}>
              <div className="col-sm-3">
                <label htmlFor="emailInput" className={styles.label}>Sähköposti:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field name="email" component="input" type="email" className="form-control" />
                {/* <input name="email" id="emailInput" className="form-control" type="text" onChange={props.handleChange} value={props.email} placeholder="Sähköposti" /> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.pnumber}>
              <div className="col-sm-3">
                <label htmlFor="pnumberInput" className={styles.label}>Puhelinnumero:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field name="pnumber" component="input" type="tel" className="form-control" />
                {/* <input name="pnumber" id="pnumberInput" className="form-control" type="tel" onChange={props.handleChange} value={props.pnumber} placeholder="Puhelinnumero" /> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.tehtavat}>
              <div className="col-sm-3">
                <label htmlFor="tehtavatInput" className={styles.label}>Ensisijainen tehtävä:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field
                  name="tehtavat1"
                  component={DropdownReduxform}
                  options={props.kaikkiTehtavat}
                  selected={props.formState ? props.formState.tehtavat1 : 'grafiikka'}
                />
                {/* <select name="tehtavat1" id="tehtavatInput" className="form-control" onChange={props.handleTehtavaChange} value={props.tehtavat1}>
                  <option value="" />
                  {tehtavatOptions}
                </select> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.tehtavat}>
              <div className="col-sm-3">
                <label htmlFor="tehtavatInput" className={styles.label}>Ensimmäinen varatehtävä:</label>
              </div>
              <div className="col">
                <Field
                  name="tehtavat2"
                  component={DropdownReduxform}
                  options={props.kaikkiTehtavat}
                  selected={props.formState ? props.formState.tehtavat2 : 'grafiikka'}
                />
                {/* <select name="tehtavat2" id="tehtavatInput" className="form-control" onChange={props.handleTehtavaChange} value={props.tehtavat2}>
                  <option value="" />
                  {tehtavatOptions}
                </select> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.tehtavat}>
              <div className="col-sm-3">
                <label htmlFor="tehtavatInput" className={styles.label}>Toinen varatehtävä:</label>
              </div>
              <div className="col">
                <Field
                  name="tehtavat3"
                  component={DropdownReduxform}
                  options={props.kaikkiTehtavat}
                  selected={props.formState ? props.formState.tehtavat3 : 'grafiikka'}
                />
                {/* <select name="tehtavat3" id="tehtavatInput" className="form-control" onChange={props.handleTehtavaChange} value={props.tehtavat3}>
                  <option value="" />
                  {tehtavatOptions}
                </select> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.jarjesto}>
              <div className="col-sm-3">
                <label htmlFor="jarjestoInput" className={styles.label}>Järjestö:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field
                  name="jarjesto"
                  component={DropdownReduxform}
                  options={props.kaikkiJarjestot}
                  selected={props.formState ? props.formState.jarjesto : ''}
                />
                {/* <select name="jarjesto" id="jarjestoInput" className="form-control" onChange={props.handleChange} value={props.jarjesto}>
                  <option value="" />
                  {jarjestoOptions}
                </select> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.lisatiedot}>
              <div className="col-sm-3">
                <label htmlFor="lisatiedotInput" className={styles.label}>Lisätietoja:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field component="textarea" name="lisatiedot" className="form-control" rows="4" />
                {/* <textarea rows="4" name="lisatiedot" id="lisatiedotInput" className="form-control" onChange={props.handleChange} value={props.lisatiedot} /> */}
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.jasen}>
              <div className="col-sm-7">
                <label htmlFor="jasenInput" className={styles.label}>Haluan liittyä HybridiSpeksi ry:n jäseneksi:</label>
              </div>
              <div className="col-sm-4 form-check form-check-inline">
                <Field name="jasenyys" component="input" type="radio" value="true" className={styles.jasenradio} /> Kyllä
                <Field name="jasenyys" component="input" type="radio" value="false" className={styles.jasenradio} /> Ei
                {/* <input checked={props.jasenyys === 'true'} className={styles.jasenradio} type="radio" name="jasenyys" value="true" onChange={props.handleChange} /> Kyllä
                <input checked={props.jasenyys === 'false'} className={styles.jasenradio} type="radio" name="jasenyys" value="false" onChange={props.handleChange} /> Ei */}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Mikäli haet yhdistyksen jäseneksi, kirjoita lisätietoihin oma verotuskuntasi ja Etunimi -kenttään kaikki etunimet.</p>
              </div>
            </div>

            <div className={'row form-group align-items-center justify-content-sm-center ' + styles.submit}>
              <div className="col-sm-3">
                {props.rekryAuki ? <button className="btn btn-default" type="submit">Lähetä hakemus</button> : <p><i>Rekry on suljettu!</i></p>}
                {/* <button className="btn btn-default" type="submit">Lähetä hakemus</button> */}
              </div>
            </div>

          </form>
          <div className="row justify-content-center">
            <div className="col-sm-7">
              {props.messages}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

RekryForm.propTypes = {
  messages: PropTypes.object,
  rekryAuki: PropTypes.bool,
  jasenyys: PropTypes.string,
  kaikkiTehtavat: PropTypes.array,
  kaikkiJarjestot: PropTypes.array,
};

const mapStateToProps = state => ({
  formState: getFormValues('rekryForm')(state),
});

RekryForm = connect(mapStateToProps)(RekryForm);

export default reduxForm({
  form: 'rekryForm',
})(RekryForm);
