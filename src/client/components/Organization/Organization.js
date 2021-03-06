import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cuid from 'cuid';
import SectionDivider from '../SectionDivider/SectionDivider';


import PageHero from '../PageHero/PageHero';
import styles from './Organization.css';

class Organization extends Component {
  constructor() {
    super();
    this.state = {
      contactInfo: [
        {
          name: 'Sähköposti',
          value: 'hallitus@hybridispeksi.fi',
        },
        {
          name: 'Tilinumero',
          value: 'FI64 5711 1320 1361 76',
        },
        {
          name: 'Y-tunnus',
          value: '2732017-8',
        },
      ],
    };
  }
  componentDidMount() {
    $(window).scrollTop(0);
  }
  render() {
    const getInfoRows = (
      this.state.contactInfo.map(row => (
        <div className={styles.infoRow} key={cuid()}>
          <div className={styles.infoName}>
            {row.name}
          </div>
          <div className={styles.infoValue}>
            {row.value}
          </div>
        </div>
      ))
    );
    return (
      <div className={styles.container}>
        <div className={styles.pageHero}>
          <PageHero title="HybridiSpeksi ry" subTitle="Yhdistys" />
        </div>

        <div className={styles.basicInfoContainer}>
          <div className={styles.info}>
            {getInfoRows}
          </div>
          <div className={styles.logo} />
          <div className={styles.officialLinks}>
            <div>
              <Link to="/yhdistys/saannot" className={styles.internallink}>Säännöt</Link>
            </div>
            <div>
              <Link to="/yhdistys/rekisteriseloste" className={styles.internallink}>Rekisteriseloste</Link>
            </div>
          </div>
        </div>
        {/* BasicInfo */}
        <SectionDivider />

        <div className="container-fluid">
          <div className={'row justify-content-center ' + styles.content}>
            <div className={'col-sm-8 col-11 ' + styles.yhdistys_desc}>
              <div className="row">
                <div className="col-lg-6 col-md-11">
                  <h3 className={styles.otsikko}>Hallitus</h3>
                  <div className="row">
                    <div className="col-11">
                      <p><strong>Matias Kari</strong><br />
                        <i>Puheenjohtaja</i><br />
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <p><strong>Ilmari Kautiala</strong><br />
                        <i>Varapuheenjohtaja</i><br />
                        <i>Improkerhovastaava</i><br />
                        <i>Rekisteri- ja tietosuojavastaava</i>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <p><strong>Ira Tulla</strong><br />
                        <i>Sihteeri</i><br />
                        <i>Tiedotusvastaava</i>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <p><strong>Jenni Peuhkurinen</strong><br />
                        <i>Taloudenhoitaja</i><br />
                        <i>Häirintäyhdyshenkilö</i>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p><strong>Otso Lauerma</strong><br />
                        <i>Interspeksivastaava</i>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p><strong>Teppo Lindberg</strong><br />
                        <i>Yhdenvertaisuus- ja hyvinvointivastaava</i><br />
                        <i>Ympäristövastaava</i>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p><strong>Lassi Lehtinen</strong><br />
                        <i>Häirintäyhdyshenkilö</i><br />
                        <i>Liikuntavastaava</i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-11">
                  <h3 className={styles.otsikko}>Tuotantotiimi</h3>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Tuottaja</p>
                    </div>
                    <div className="col-7">
                      <p>Maria Nieminen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Apulaistuottaja</p>
                    </div>
                    <div className="col-7">
                      <p>Maija Jortikka</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Ohjaaja</p>
                    </div>
                    <div className="col-7">
                      <p>Milla Weckman</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Apulaisohjaaja</p>
                    </div>
                    <div className="col-7">
                      <p>Ilari Laaksonen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Pääkoreografi</p>
                    </div>
                    <div className="col-7">
                      <p>Saara Koskela</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Kapellimestari</p>
                    </div>
                    <div className="col-7">
                      <p>Lassi Lehtinen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Käsikirjoitus</p>
                    </div>
                    <div className="col-7">
                      <p>Matilda Lintunen
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Lavastus</p>
                    </div>
                    <div className="col-7">
                      <p>Ida Mäkinen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Maskeeraus</p>
                    </div>
                    <div className="col-7">
                      <p>Sini Toivola</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Puvustus</p>
                    </div>
                    <div className="col-7">
                      <p>Anni Halkola</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Kuvaus</p>
                    </div>
                    <div className="col-7">
                      <p>Justus Anttila</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Grafiikka</p>
                    </div>
                    <div className="col-7">
                      <p>Sanna Launiainen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Virkistys</p>
                    </div>
                    <div className="col-7">
                      <p>Anniina Jokela</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Varainhankinta</p>
                    </div>
                    <div className="col-7">
                      <p>Teppo Vättö</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Markkinointi</p>
                    </div>
                    <div className="col-7">
                      <p>Sari Mustonen</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Tekniikka</p>
                    </div>
                    <div className="col-7">
                      <p>Pyry Pajunpää</p>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Valot</p>
                    </div>
                    <div className="col-7">
                      <p>-</p>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-sm-4 col-5">
                      <p className={styles.persontitle}>Nettisivut</p>
                    </div>
                    <div className="col-7">
                      <p>Tatu Heinonen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Organization;
