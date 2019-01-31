import React, { Component } from 'react';
import cuid from 'cuid';
import SpeksiCard from './SpeksiCard';
import styles from './Muutspeksit.css';
import PageHero from '../PageHero/PageHero';

class Muutspeksit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speksit: [
        {
          name: 'I/O-speksi',
          imageUrl: '/assets/images/io.svg',
          tdk: 'Turun yliopiston yhteiskuntatieteellisen tiedekunnan ja opettajankoulutuslaitoksen yhteinen speksi',
          url: 'http://iospeksi.fi/',
        },
        {
          name: 'LEX SPEX',
          imageUrl: '/assets/images/lex.svg',
          tdk: 'Oikeustieteen ylioppilaiden speksi',
          url: 'https://lex.fi/toiminta/spex',
        },
        {
          name: 'TLKS SPEKSI',
          imageUrl: '/assets/images/tlks.svg',
          tdk: 'Turun Lääketieteenkandidaattiseuran speksi',
          url: 'https://turkuspeksi.com/',
        },
        {
          name: 'TuKY-Speksi',
          imageUrl: '/assets/images/tuky.svg',
          tdk: 'Turun kauppatieteen ylioppilaiden speksi',
          url: 'http://www.tuky.fi/speksi/',
        },
        {
          name: 'Akademiska Spexet <br /> vid Åbo Akademi R.F.',
          imageUrl: '/assets/images/abospex.svg',
          tdk: 'Akademiska Spexet vid Åbo Akademi',
          url: 'https://spex.abo.fi/',
        },
        {
          name: 'Turkulainen humanistispeksi',
          imageUrl: '/assets/images/humanisti.svg',
          tdk: 'Turun yliopiston humanistisen tiedekunnan speksi',
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
      <div className={styles.container}>
        <div className={styles.pageHero}>
          <PageHero title="Turun muut speksit" />
        </div>
        <div className={styles.intro}>
          <h2 className="">Turun muut speksit</h2>
          <p>Turussa toimii myöd monia muita speksejä
            HybridiSpeksin lisäksi. Speksien välinen yhteistyö on
            tärkeässä roolissa esimerkiksi yhteisten tapahtumien muodossa.
            Pidä huoli, ettet jää paitsi muista huikeista
            produktioista ja Turun ainutlaatuisesta speksikentästä!
          </p>
        </div>

        <div className={styles.content}>
          {this.state.speksit.map(speksi => <SpeksiCard key={cuid()} speksi={speksi} />)}
        </div>
      </div>
    );
  }
}

export default Muutspeksit;
