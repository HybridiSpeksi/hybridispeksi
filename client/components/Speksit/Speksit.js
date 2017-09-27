import React, { Component } from 'react'

import styles from './Speksit.css';

class Speksit extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-end " + styles.content_hali}>
          <div className={"col-sm-6"}>
          </div>
          <div className={"col-sm-6 " + styles.hali_desc}>
            <h1>H.A.L.I.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus ipsum nec imperdiet cursus. Nulla vel dui nulla. Etiam urna libero, rhoncus id finibus eget, pulvinar nec ante. In sollicitudin sem et velit posuere, et malesuada ligula venenatis. Mauris vel augue ac nisi pretium consectetur. Sed a massa ligula. Sed dapibus non ex at eleifend. Donec vel lacinia neque. Sed commodo varius massa vel lacinia.</p>
            <p>Phasellus ullamcorper nulla magna, id tincidunt nunc porttitor sed. Nulla nunc enim, sollicitudin id viverra ut, interdum at lectus. Curabitur pellentesque turpis non faucibus feugiat. Ut porttitor volutpat nunc, at accumsan libero eleifend sit amet. Quisque sodales ullamcorper diam, vitae mattis risus auctor eu. Sed in malesuada metus, non maximus neque. Etiam bibendum nibh quis ipsum bibendum placerat non vel urna. Nullam id egestas mi. Vestibulum lectus tellus, auctor vitae erat vitae, pellentesque porttitor turpis. Nunc et pellentesque lectus, ut hendrerit nisi. Nulla erat nisi, convallis accumsan justo at, sollicitudin consectetur lectus. Ut tellus nulla, molestie ut dapibus vitae, porttitor nec est. Etiam et hendrerit leo. Vivamus consectetur, eros finibus accumsan consectetur, massa sapien tincidunt ex, id rutrum est tellus nec nibh.</p>
          </div>
        </div>
        <div className={"row align-items-end " + styles.content_bratva}>
          <div className={"col-sm-6"}>
            <h1>BratvaKontra</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus ipsum nec imperdiet cursus. Nulla vel dui nulla. Etiam urna libero, rhoncus id finibus eget, pulvinar nec ante. In sollicitudin sem et velit posuere, et malesuada ligula venenatis. Mauris vel augue ac nisi pretium consectetur. Sed a massa ligula. Sed dapibus non ex at eleifend. Donec vel lacinia neque. Sed commodo varius massa vel lacinia.</p>
            <p>Phasellus ullamcorper nulla magna, id tincidunt nunc porttitor sed. Nulla nunc enim, sollicitudin id viverra ut, interdum at lectus. Curabitur pellentesque turpis non faucibus feugiat. Ut porttitor volutpat nunc, at accumsan libero eleifend sit amet. Quisque sodales ullamcorper diam, vitae mattis risus auctor eu. Sed in malesuada metus, non maximus neque. Etiam bibendum nibh quis ipsum bibendum placerat non vel urna. Nullam id egestas mi. Vestibulum lectus tellus, auctor vitae erat vitae, pellentesque porttitor turpis. Nunc et pellentesque lectus, ut hendrerit nisi. Nulla erat nisi, convallis accumsan justo at, sollicitudin consectetur lectus. Ut tellus nulla, molestie ut dapibus vitae, porttitor nec est. Etiam et hendrerit leo. Vivamus consectetur, eros finibus accumsan consectetur, massa sapien tincidunt ex, id rutrum est tellus nec nibh.</p>
          </div>
          <div className={"col-sm-6 " + styles.bratva_desc}>
          </div>
        </div>
        <div className={"row align-items-end " + styles.content_kruunu}>
          <div className={"col-sm-6"}>
          </div>
          <div className={"col-sm-6 " + styles.kruunu_desc}>
          <h2>Kruunun kohtalo - Kalevalan perintö</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus ipsum nec imperdiet cursus. Nulla vel dui nulla. Etiam urna libero, rhoncus id finibus eget, pulvinar nec ante. In sollicitudin sem et velit posuere, et malesuada ligula venenatis. Mauris vel augue ac nisi pretium consectetur. Sed a massa ligula. Sed dapibus non ex at eleifend. Donec vel lacinia neque. Sed commodo varius massa vel lacinia.</p>
            <p>Phasellus ullamcorper nulla magna, id tincidunt nunc porttitor sed. Nulla nunc enim, sollicitudin id viverra ut, interdum at lectus. Curabitur pellentesque turpis non faucibus feugiat. Ut porttitor volutpat nunc, at accumsan libero eleifend sit amet. Quisque sodales ullamcorper diam, vitae mattis risus auctor eu. Sed in malesuada metus, non maximus neque. Etiam bibendum nibh quis ipsum bibendum placerat non vel urna. Nullam id egestas mi. Vestibulum lectus tellus, auctor vitae erat vitae, pellentesque porttitor turpis. Nunc et pellentesque lectus, ut hendrerit nisi. Nulla erat nisi, convallis accumsan justo at, sollicitudin consectetur lectus. Ut tellus nulla, molestie ut dapibus vitae, porttitor nec est. Etiam et hendrerit leo. Vivamus consectetur, eros finibus accumsan consectetur, massa sapien tincidunt ex, id rutrum est tellus nec nibh.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Speksit