import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import globalStyles from './App.css';

import * as auth from './../Utils/Auth';

// Public
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Messages from './ApplicationMessages/Messages'

import Home from './Home/Home';
import Rekry from './Rekry/Rekry';
import Speksit from './Speksit/Speksit';
// import Esitykset from './Esitykset/Esitykset';
import Yhdistys from './Yhdistys/Yhdistys';
import Rekisteriseloste from './Yhdistys/Rekisteriseloste';
import Saannot from './Yhdistys/Saannot';
// import Sitsit from './Sitsit/Sitsit';
import Palaute from './Palaute/Palaute';
import Muutspeksit from './Muutspeksit/Muutspeksit';
import Kalenteri from './Kalenteri/Kalenteri';
import Speksi2019 from './Speksi2019/Speksi2019';
// import Vahvistus from './Speksi2019/Vahvistus';
// import Virhe from './Speksi2019/Virhe';
import Vuodenspeksaaja from './Vuodenspeksaaja/Vuodenspeksaaja';

// Admin
import AdminHeader from './Admin/Layout/AdminHeader';
import AdminFooter from './Admin/Layout/AdminFooter';
import Admin from './Admin/Admin';
import Produktio from './Admin/Produktio/Produktio';
// import Jasenrekisteri from './Admin/Jasenrekisteri/Jasenrekisteri';
import Uusijasen from './Admin/Jasenrekisteri/Uusijasen';
import Kayttajat from './Admin/Kayttajat/Kayttajat';
import Ohjaustiedot from './Admin/Ohjaustiedot/Ohjaustiedot';
import Tapahtumat from './Admin/Tapahtumat/Tapahtumat';
// import Varaustenhallinta from './Admin/Varaustenhallinta/Varaustenhallinta';
import Palautteet from './Admin/Palautteet/Palautteet';
import Vuodenspeksilainen from './Admin/Vuodenspeksilainen/Vuodenspeksilainen';

import Login from './Admin/Auth/Login';

const Loading = () => <h3>Loading...</h3>;

// const Produktio = Loadable({
//   loader: () => import('./Admin/Produktio/Produktio'),
//   loading: Loading
// })

const Jasenrekisteri = Loadable({
  loader: () => import('./Admin/Jasenrekisteri/Jasenrekisteri'),
  loading: Loading
})

const Varaustenhallinta = Loadable({
  loader: () => import('./Admin/Varaustenhallinta/Varaustenhallinta'),
  loading: Loading
})

export default class App extends React.Component {
  render() {
    const PublicLayout = ({ component: Component, ...rest }) => (
      <Route
        location={this.props.location}
        {...rest}
        render={({ match }) => (
          <div>
            <Header />
            <Messages />
            <Component params={match.params} globalStyles={globalStyles} />
            <Footer />
          </div>
        )}
      />
    );

    const LoginLayout = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={({ match }) => (
          <div>
            <Messages />
            <Component params={match.params} globalStyles={globalStyles} />
          </div>
        )}
      />
    );

    const AdminLayout = ({ component: Component, ...rest }) => {
      auth.checkToken();
      return (
        <Route
          {...rest}
          render={({ match }) => (
            <div>
              <AdminHeader />
              <Messages />
              <Component params={match.params} globalStyles={globalStyles} />
              <AdminFooter />
            </div>
        )}
        />
      );
    };

    return (
      <div id="main-wrapper">

        <BrowserRouter>
          <div>
            <div id="public-wrapper">
              <Switch >
                <PublicLayout exact path="/" component={Home} />
                <PublicLayout path="/speksirekry2019" component={Rekry} />
                <PublicLayout exact path="/speksi2019" component={Speksi2019} />
                {/*<PublicLayout exact path="/speksi2019/vahvistus/:_id" component={Vahvistus} />*/}
                {/*<PublicLayout exact path="/speksi2019/virhe/:value" component={Virhe} />*/}
                <PublicLayout path="/speksit" component={Speksit} />
                {/* <PublicLayout exact path="/galleria" component={Galleria} /> */}
                <PublicLayout exact path="/yhdistys" component={Yhdistys} />
                <PublicLayout exact path="/yhdistys/rekisteriseloste" component={Rekisteriseloste} />
                <PublicLayout exact path="/yhdistys/saannot" component={Saannot} />
                {/* <PublicLayout path="/esitykset" component={Esitykset} /> */}
                {/* <PublicLayout path="/ilmo" component={Sitsit} /> */}
                <PublicLayout path="/palaute" component={Palaute} />
                <PublicLayout path="/muutspeksit" component={Muutspeksit} />
                <PublicLayout path="/kalenteri" component={Kalenteri} />
                {/* <PublicLayout path="/vuodenspeksaaja" component={Vuodenspeksaaja} /> */}
              </Switch>
            </div>

            <div id="admin-wrapper">
              <Switch>
                <LoginLayout path="/login" component={Login} />
                <AdminLayout path="/admin" component={Admin} />
                <AdminLayout path="/varaustenhallinta" component={Varaustenhallinta} />
                <AdminLayout path="/produktionhallinta" component={Produktio} />
                <AdminLayout path="/jasenrekisteri" component={Jasenrekisteri} />
                <AdminLayout path="/kayttajat" component={Kayttajat} />
                <AdminLayout path="/uusijasen" component={Uusijasen} />
                <AdminLayout path="/ohjaustiedot" component={Ohjaustiedot} />
                <AdminLayout path="/tapahtumat" component={Tapahtumat} />
                <AdminLayout path="/palautteet" component={Palautteet} />
                <AdminLayout path="/vuodenspeksilainen" component={Vuodenspeksilainen} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.any,
};
