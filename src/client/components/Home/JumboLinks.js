import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const JumboLinks = () => (
  <div className={styles.jumboLinks}>
    <Link className={styles.internallink} to="/speksit">
      <p className={'material-icons ' + styles.linkicon}>history</p>
      <h3>Aiemmat speksit</h3>
      <p className="">HybridiSpeksi on järjestetty jo vuodesta 2015! Lue lisää täältä.</p>
    </Link>
    {/* <div className="col-sm-3 align-items-center">
          <Link to="/galleria">
            <p className={"material-icons " + styles.linkicon}>insert_photo</p>
            <h3>Kuvagalleria</h3>
            <p className="">Speksiä tehdessä on aina hyvä fiilis!
             Kuvat kertovat enemmän kuin tuhat sanaa ja täällä niitä kuvia voi katsella!</p>
          </Link>
          </div> */}
    <Link className={styles.internallink} to="/yhdistys">
      <p className={'material-icons ' + styles.linkicon}>face</p>
      <h3>Yhdistys</h3>
      <p>Kuka tekee speksissä mitäkin? Lavan tapahtumien l
        isäksi projektissa on suuri joukko muita  tiimejä ja tiimiläisiä.
        Yhdistys-sivulta löydät yhteystietojen lisäksi hallituksen ja tuotantotiimin kokoonpanot.
      </p>
    </Link>
    <Link className={styles.internallink} to="/muutspeksit">
      <p className={'material-icons ' + styles.linkicon}>local_play</p>
      <h3>Turun muut speksit</h3>
      <p className="">Speksi on opiskelijateatteria parhaimmillaan! Tutustu Turun muihin spekseihin täältä.</p>
    </Link>
  </div>
);

export default JumboLinks;
