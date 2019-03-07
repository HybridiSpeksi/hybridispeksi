
function confirmationMail() {
  const html = `
    <h1>Kiitos ilmoittautumisesta!</h1>
    <hr/>

    <p>Olet ilmoittautunut HybridiSpeksin vuosijuhliin  
    lauantaina 4.5.2019. Juhlallisuudet alkavat klo 16.00 
    cocktailtilaisuudella Mercatorilla 
    (Rehtorinpellonkatu 3, 20500 Turku). 
    Cocktailtilaisuuden jälkeen siirrymme yhteiskuljetuksin klo 18.00 
    alkavaan iltajuhlaan Panimoravintola Kouluun (Eerikinkatu 18, 20100 Turku). 
    Iltajuhlan päätyttyä juhlat jatkuvat salaisessa jatkopaikassa, 
    jonne siirrytään yhteisin bussikuljetuksin. 
    Vuosijuhlien silliaamiainen vietetään TYYn saunalla 
    sunnuntaina 5.5. klo 11.00 alkaen. </p>

    <p>Juhlien illalliskortin hinta on 80 €, ja hintaan 
    sisältyy cocktailtilaisuus, iltajuhla sekä jatkot kuljetuksineen. 
    Alkoholittoman illalliskortin hinta on 70 €. Kannatusillalliskortin 
    hinta on 100 €. Juhlien silliaamiaisen hinta on 5 €.</p>

    <p>Illalliskortit maksetaan HybridiSpeksi ry:n tilille (FI64 5711 1320 1361 76) 
    eräpäivään 3.5.2019 mennessä. Kirjoitathan viestikenttään “HybridiSpeksin 
    vuosijuhlat + oma nimi”.</p>

    <p>Juhlan pukukoodina on juhlapuku tai tumma puku, sekä akateemiset kunniamerkit.</p>

  `;

  return html;
}

module.exports.confirmationMail = confirmationMail;
