import React from 'react';
import PropTypes from 'prop-types';
import VarausForm from './VarausForm';
import styles from './Speksi2018.css';

const UusiVaraus = ({
  handleChange,
  handleSubmit,
  fname,
  sname,
  email,
  pnumber,
  ncount,
  scount,
  ocount,
  price,
  lisatiedot,
  valittuEsitys,
  esitykset,
  messages,
  ilmottu,
}) => (
  <div>
    <div
      className="modal fade"
      id="uusiVarausModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="uusiVarausModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className={'modal-content ' + styles.formContent}>
          {' '}
          {/* TÄHÄN MUOTOILUT KOKO MODALIIN */}
          <div
            className={
                'modal-header align-items-start justify-content-center ' + styles.formHeader
              }
          >
            <div className={'col-8 col-sm-4 justify-content-center ' + styles.formLogo}>
              <h2 className={styles.formLogoText}>HybridiSpeksi 2018</h2>
            </div>
            <div
              className={
                  'col-sm-9 d-flex justify-content-center align-items-center ' +
                  styles.formTitleWrap
                }
            >
              <h5 className={'modal-title ' + styles.formTitle} id="uusiVarausModalLabel">
                  HybridiSpeksi 2018 lipunmyynti
              </h5>
            </div>
            <button
              type="button"
              className={'close btn btn-inverse ' + styles.formClose}
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className={'modal-body ' + styles.formBody}>
            <VarausForm
              handleChange={handleChange}
              fname={fname}
              sname={sname}
              email={email}
              pnumber={pnumber}
              ncount={ncount}
              scount={scount}
              ocount={ocount}
              price={price}
              lisatiedot={lisatiedot}
              valittuEsitys={valittuEsitys}
              esitykset={esitykset}
            />

            <div className="row justify-content-center">
              <div className="col-8 justify-content-center align-items-center">
                {messages}
              </div>
            </div>
          </div>
          <div className={'modal-footer justify-content-center ' + styles.formBorder}>
            <div className="col-sm-11 d-flex justify-content-end">
              <button
                type="button"
                className={'btn btn-dark ' + styles.formButton + ' ' + styles.formButtonClose}
                data-dismiss="modal"
                aria-label="Close"
              >
                  Sulje ikkuna
              </button>
              {ilmottu ? (
                <button
                  disabled
                  type="button"
                  className={'btn btn-dark ' + styles.formButton}
                  onClick={handleSubmit}
                >
                    Siirry maksamaan
                </button>
                ) : (
                  <button
                    id="siirrymaksamaan"
                    type="button"
                    className={'btn btn-dark ' + styles.formButton}
                    onClick={handleSubmit}
                  >
                    Siirry maksamaan
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UusiVaraus;

UusiVaraus.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  fname: PropTypes.string,
  sname: PropTypes.string,
  email: PropTypes.string,
  pnumber: PropTypes.string,
  ncount: PropTypes.number,
  scount: PropTypes.number,
  ocount: PropTypes.number,
  price: PropTypes.string,
  lisatiedot: PropTypes.string,
  valittuEsitys: PropTypes.object,
  esitykset: PropTypes.array,
  messages: PropTypes.object,
  ilmottu: PropTypes.bool,
};
