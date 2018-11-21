const config = require('../../config');

/**
 * Cash ticket template
 * @return ticket: String
 * 
 */
function cashTicket(booking) {
    let html = `
    <h1>Kiitos varauksesta!</h1>
    <hr/>

    <p>Varauksen tiedot:</p>
    <p>`+ booking.fname + " " + booking.sname + `</p>
    <p>Esitys: ` + booking.esitys.name + `</p>
    <p>Lippuja yhteensä ` + getTotalCount(booking) + `kpl </p>
    <p>Hinta: `+ countPrice(booking) + `€</p>
    <p><b>VARAUSTUNNUS: `+ booking.bookingId + `</b>
    <br/>Varaustunnus toimii lippunasi näytökseen. Mikäli varaus sisältää opiskelijahintaisia lippuja, 
    teidän on esitettävä opiskelijakorttinne lippua lunastettaessa.</p>
    <p>Mikäli teillä herää kysyttävää lippujen suhteen, ottakaa rohkeasti yhteyttä
    osoitteeseen <a href="mailto:lipunmyynti@hybridispeksi.fi">lipunmyynti@hybridispeksi.fi</a></p>
    <p><i>Tervetuloa speksiin!</i></p>
    `;
    return html;
}

function getTotalCount(booking) {
    return Number(booking.ncount) + Number(booking.scount) + Number(booking.ocount);
}

function countPrice(varaus) {
    var price = 0;
    price += varaus.scount * config.sprice;
    price += varaus.ncount * config.nprice;
    price += varaus.ocount * varaus.oprice;

    return price;
}


module.exports.cashTicket = cashTicket;