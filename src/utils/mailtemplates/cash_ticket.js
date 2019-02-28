const bookingUtils = require('../bookingUtils');

/**
 * Cash ticket template
 * @return ticket: String
 *
 */
function cashTicket(booking) {
  const {
    fname, lname,
  } = booking.get('ContactInfo');
  const show = booking.get('Show');
  const tag = booking.get('tag');
  const html = `
    <h1>Kiitos varauksesta!</h1>
    <hr/>

    <p>Varauksen tiedot:</p>
    <p> ${fname} ${lname}</p>
    <p>Esitys: ${show.nameLong}</p>
    <p>Lippuja yhteensä ${bookingUtils.getTotalCount(booking)} kpl </p>
    <p>Hinta: ${bookingUtils.countPrice(booking)} €</p>
    <p><b>VARAUSTUNNUS: ${tag}</b>
    <br/>Varaustunnus toimii lippunasi näytökseen. Mikäli varaus sisältää opiskelijahintaisia lippuja, 
    teidän on esitettävä voimassaoleva opiskelijakorttinne esitykseen saavuttaessa.</p>
    <p>Mikäli teillä herää kysyttävää lippujen suhteen, ottakaa rohkeasti yhteyttä
    osoitteeseen <a href="mailto:lipunmyynti@hybridispeksi.fi">lipunmyynti@hybridispeksi.fi</a></p>
    <p><i>Tervetuloa speksiin!</i></p>
    `;
  return html;
}

module.exports.cashTicket = cashTicket;
