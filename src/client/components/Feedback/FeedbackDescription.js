import React from 'react';
import { connect } from 'react-redux';

import pagestyles from './Feedback.css';

const FeedbackDescription = () => {
  return (
    <div className={pagestyles.column}>
      <div className={pagestyles.content}>
        <h2 className={pagestyles.paragraph}>HybridiSpeksi</h2>
        <h3 className={pagestyles.paragraph}>Palautelomake</h3>
        <br />
        <p className={pagestyles.paragraph}><i>Täytä alla olevat kentät. Vain Palaute-kenttä on pakollinen.</i></p>
        <br />
        <p className={pagestyles.paragraph}>Mikä meni hyvin, mikä huonosti? Olivatko laulut hyviä vai olisiko Sinulla ollut parannusehdotuksia?
          Oliko bändissä tarpeeksi monta eri soitinta ja olivatko lavasteet ja puvusteet kohdallaan?
        </p>
        <p className={pagestyles.paragraph}>Kerro meille risut ja ruusut, jotta voimme parantaa produktiota vieläkin paremmaksi ensi vuonna!
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(FeedbackDescription);
