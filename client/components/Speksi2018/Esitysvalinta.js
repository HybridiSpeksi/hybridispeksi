import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

import styles from './Speksi2018.css';

const Esitysvalinta = ({ esitykset, toggleUusiVarausModal }) => {
  const getEsitykset = esitykset.map((esitys, i) => {
    let tilaa = '';
    if (esitys.bookingCount < 100) {
      tilaa = 'Tilaa';
    } else if (esitys.bookingCount < 130) {
      tilaa = 'Lähes täynnä';
    } else {
      tilaa = 'Täynnä';
    }

    return (
      <tr key={esitys._id}>
        <td
          className={tilaa === 'Täynnä' ? styles.showTdFull : styles.showTd}
          onClick={() => toggleUusiVarausModal(esitys, tilaa)}
        >
          {esitys.name} klo <Moment format="HH.mm">{esitys.date}</Moment>
        </td>
        <td
          className={tilaa === 'Täynnä' ? styles.showTdFull : styles.showTd}
          onClick={() => toggleUusiVarausModal(esitys, tilaa)}
        >
          <i>{tilaa}</i>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-hover table-sm">
        <tbody>{getEsitykset}</tbody>
      </table>
    </div>
  );
};

export default Esitysvalinta;

Esitysvalinta.defaultProps = {
  esitykset: [],
};

Esitysvalinta.propTypes = {
  esitykset: PropTypes.array,
  toggleUusiVarausModal: PropTypes.func,
};
