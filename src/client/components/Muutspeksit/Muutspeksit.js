import React, { Component } from 'react';
import cuid from 'cuid';
import SpeksiRow from './SpeksiRow';
import styles from './Muutspeksit.css';

class Muutspeksit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speksit: [
        {
          name: 'I/O-speksi',
          imageUrl: '/assets/images/io.svg',
          url: 'http://iospeksi.fi/',
        },
        {
          name: 'LEX SPEX',
          imageUrl: '/assets/images/lex.svg',
          url: 'https://lex.fi/toiminta/spex',
        },
        {
          name: 'TLKS SPEKSI',
          imageUrl: '/assets/images/tlks.svg',
          url: 'https://turkuspeksi.com/',
        },
        {
          name: 'TuKY-Speksi',
          imageUrl: '/assets/images/tuky.svg',
          url: 'http://www.tuky.fi/speksi/',
        },
        {
          name: 'Akademiska Spexet <br /> vid Åbo Akademi R.F.',
          imageUrl: '/assets/images/abospex.svg',
          url: 'https://spex.abo.fi/',
        },
        {
          name: 'Turkulainen humanistispeksi',
          imageUrl: '/assets/images/humanisti.svg',
          url: 'https://tyyala.utu.fi/humanistispeksi/',
        },
      ],
    };
  }

  componentDidMount() {
    $(window).scrollTop(0);
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div className={'row align-items-center justify-content-center ' + styles.header}>
          <div className="col-8">
            <h2 className="">Turun muut speksit</h2>
            <p>Turussa toimii monia muitakin speksejä
            HybridiSpeksin lisäksi. Speksien välinen yhteistyö on
            tärkeässä roolissa esimerkiksi yhteisten tapahtumien muodossa.
            Pidä huoli, ettet jää paitsi muista huikeista
            produktioista ja Turun ainutlaatuisesta speksikentästä!
            </p>
          </div>
        </div>

        <div className={'row align-items-center justify-content-center ' + styles.content}>
          <div className="col-md-8 col-sm-11 col-11">
            {this.state.speksit.map(speksi => <SpeksiRow key={cuid()} speksi={speksi} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Muutspeksit;
