import { connect } from 'react-redux';
import React from 'react';
import pagestyles from './Event.css';
import styles from './Description.css';


export const Description = () => {
  return (
    <div className={pagestyles.column}>
      <h2>Tervetuloa juhlistamaan 5-vuotiasta HybridiSpeksiä!</h2>
      <div className={pagestyles.content}>
        <p className={pagestyles.paragraph}>
        Meillä on ilo kutsua teidät juhlistamaan 5-vuotiasta HybridiSpeksiä lauantaina 4.5.2019.
        Juhlallisuudet alkavat klo 16.00 cocktailtilaisuudella Mercatorilla (Rehtorinpellonkatu 3,
        20500 Turku). Cocktailtilaisuuden jälkeen siirrymme yhteiskuljetuksin klo 18.00 alkavaan
        iltajuhlaan Panimoravintola Kouluun (Eerikinkatu 18, 20100 Turku). Iltajuhlan päätyttyä
        juhlat jatkuvat salaisessa jatkopaikassa, jonne siirrytään yhteisin bussikuljetuksin.
        Vuosijuhlien silliaamiainen vietetään TYYn saunalla sunnuntaina 5.5. klo 11.00 alkaen.
        </p>
        <p className={pagestyles.paragraph}>
        Juhlien illalliskortin hinta on 80 €, ja hintaan sisältyy cocktailtilaisuus,
        iltajuhla sekä jatkot kuljetuksineen. Alkoholittoman illalliskortin hinta on 70 €.
        Kannatusillalliskortin hinta on 100 €. Juhlien silliaamiaisen hinta on 5 €.
        </p>
        <p className={pagestyles.paragraph}>
        Illalliskortit maksetaan HybridiSpeksi ry:n tilille (FI64 5711 1320 1361 76) eräpäivään
        3.5.2019 mennessä. Kirjoitathan viestikenttään “HybridiSpeksin vuosijuhlat + oma nimi”.
        </p>
        <p className={pagestyles.paragraph}>
        Ilmoittautuminen vuosijuhlille on sitova! Huomaattehan, että mahdollisen avecin on
        ilmoittauduttava erikseen.
        </p>
        <p className={pagestyles.paragraph}>
        Juhlan pukukoodina on juhlapuku tai tumma puku, sekä akateemiset kunniamerkit.
        </p>
        <p className={pagestyles.paragraph}>
        Lämpimästi tervetuloa!
        </p>
        <hr />
        <div className={styles.menu}>
          <h5 className={pagestyles.paragraph}>Menuvaihtoehdot:</h5>
          <h4><b>MENU 1 (Liha)</b></h4>
          <p>
            Savusipulikeittoa ja porsaanposkea, omenaa<br />
            Härän sisäfileetä ja parmankinkkua, salviakastiketta ja perunakakkua<br />
            Lattepannacotta ja suklaata, hasselpähkinäjäätelöä
          </p>
          <h4><b>MENU 2 (Kasvis)</b></h4>
          <p>
            Savusipulikeittoa ja omenaa<br />
            Panimon olutkasvismakkaraa ja puolukkaa, hernepureeta ja perunakakkua<br />
            Lattepannacotta ja suklaata, hasselpähkinäjäätelöä
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Description);
