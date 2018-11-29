import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const JumboLinks = () => (
  <div className={'row align-items-top justify-content-center text-center ' + styles.content_contents}>
    <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
      <Link className={styles.internallink} to="/speksit">
        <p className={'material-icons ' + styles.linkicon}>history</p>
        <h3>Aiemmat speksit</h3>
        <p className="">HybridiSpeksi on järjestetty jo vuodesta 2015! Lue lisää täältä.</p>
      </Link>
    </div>
    {/* <div className="col-sm-3 align-items-center">
          <Link to="/galleria">
            <p className={"material-icons " + styles.linkicon}>insert_photo</p>
            <h3>Kuvagalleria</h3>
            <p className="">Speksiä tehdessä on aina hyvä fiilis!
             Kuvat kertovat enemmän kuin tuhat sanaa ja täällä niitä kuvia voi katsella!</p>
          </Link>
          </div> */}
    <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
      <Link className={styles.internallink} to="/yhdistys">
        <p className={'material-icons ' + styles.linkicon}>face</p>
        <h3>Yhdistys</h3>
        <p className="">Kuka tekee speksissä mitäkin? Lavan tapahtumien l
        isäksi projektissa on suuri joukko muita  tiimejä ja tiimiläisiä.
        Yhdistys-sivulta löydät yhteystietojen lisäksi hallituksen ja tuotantotiimin kokoonpanot.
        </p>
      </Link>
    </div>
    <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
      <Link className={styles.internallink} to="/muutspeksit">
        <p className={'material-icons ' + styles.linkicon}>local_play</p>
        <h3>Turun muut speksit</h3>
        <p className="">Speksi on opiskelijateatteria parhaimmillaan! Tutustu Turun muihin spekseihin täältä.</p>
      </Link>
    </div>
  </div>
);

export default JumboLinks;
