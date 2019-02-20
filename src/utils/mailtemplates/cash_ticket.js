const config = require('../../config');

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
    <p>Lippuja yhteensä ${getTotalCount(booking)} kpl </p>
    <p>Hinta: ${countPrice(booking)} €</p>
    <p><b>VARAUSTUNNUS: ${tag}</b>
    <br/>Varaustunnus toimii lippunasi näytökseen. Mikäli varaus sisältää opiskelijahintaisia lippuja, 
    teidän on esitettävä voimassaoleva opiskelijakorttinne esitykseen savuttaessa.</p>
    <p>Mikäli teillä herää kysyttävää lippujen suhteen, ottakaa rohkeasti yhteyttä
    osoitteeseen <a href="mailto:lipunmyynti@hybridispeksi.fi">lipunmyynti@hybridispeksi.fi</a></p>
    <p><i>Tervetuloa speksiin!</i></p>
    `;
  return html;
}

function getTotalCount(booking) {
  const { normalCount, discountCount, specialPriceCount } = booking;
  return Number(normalCount) + Number(discountCount) + Number(specialPriceCount);
}

function countPrice(booking) {
  const {
    normalCount, discountCount, specialPriceCount, specialPrice,
  } = booking;
  let price = 0;
  price += normalCount * config.normalPrice;
  price += discountCount * config.discountPrice;
  price += specialPriceCount * specialPrice;

  return price;
}


module.exports.cashTicket = cashTicket;
