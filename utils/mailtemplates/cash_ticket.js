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

    `;
    return html;
}

module.exports.cashTicket = cashTicket;