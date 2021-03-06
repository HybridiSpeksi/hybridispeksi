import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import globalStyles from './App.css';

import * as auth from './../Utils/Auth';

// Public
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Messages from './ApplicationMessages/Messages';
import Loader from './Loader/Loader';

import Home from './Home/Home';
import Rekry from './Rekry/Rekry';
import Speksit from './Speksit/Speksit';
import Organization from './Organization/Organization';
import Rekisteriseloste from './Organization/Rekisteriseloste';
import Saannot from './Organization/Saannot';
import Feedback from './Feedback/Feedback';
import Muutspeksit from './Muutspeksit/Muutspeksit';
import Kalenteri from './Kalenteri/Kalenteri';
import Speksi2019 from './Speksi2019/Speksi2019';
import BookingConfirmation from './Speksi2019/BookingConfirmation';
import BookingDenied from './Speksi2019/BookingDenied';
import Vuosijuhlailmo from './Event/Event';

// Admin
import AdminHeader from './Admin/Layout/AdminHeader';
import AdminFooter from './Admin/Layout/AdminFooter';
import Admin from './Admin/Admin';
import Produktio from './Admin/Produktio/Produktio';
import Uusijasen from './Admin/Jasenrekisteri/Uusijasen';
import UserManagement from './Admin/Kayttajat/UserManagement';
import Ohjaustiedot from './Admin/Ohjaustiedot/Ohjaustiedot';
import EventManagement from './Admin/Events/EventManagement';

import Login from './Admin/Auth/Login';
import { publicDecrypt } from 'crypto';

const Loading = () => <h3>Loading...</h3>;

const Jasenrekisteri = Loadable({
  loader: () => import('./Admin/Jasenrekisteri/Jasenrekisteri'),
  loading: Loading
})

const BookingManagement = Loadable({
  loader: () => import('./Admin/BookingManagement/BookingManagement'),
  loading: Loading
})

const Booking = Loadable({
  loader: () => import('./Admin/BookingManagement/Booking'),
  loading: Loading
})

const ShowsManagement = Loadable({
  loader: () => import('./Admin/BookingManagement/ShowsManagement'),
  loading: Loading
})

const AdminFeedback = Loadable({
  loader: () => import('./Admin/Feedback/Feedback'),
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
            <Loader />
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
            <Loader />
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
              <Loader />
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
                <PublicLayout exact path="/speksi2019/vahvistus/:id" component={BookingConfirmation} />
                <PublicLayout exact path="/speksi2019/virhe/:value" component={BookingDenied} />
                <PublicLayout path="/speksit" component={Speksit} />
                <PublicLayout exact path="/yhdistys" component={Organization} />
                <PublicLayout exact path="/yhdistys/rekisteriseloste" component={Rekisteriseloste} />
                <PublicLayout exact path="/yhdistys/saannot" component={Saannot} />
                <PublicLayout path="/palaute" component={Feedback} />
                <PublicLayout path="/muutspeksit" component={Muutspeksit} />
                <PublicLayout path="/kalenteri" component={Kalenteri} />
                <PublicLayout path="/tapahtumat/:eventId" component={Vuosijuhlailmo} />
              </Switch>
            </div>

            <div id="admin-wrapper">
              <Switch>
                <LoginLayout path="/login" component={Login} />
                <AdminLayout path="/admin" component={Admin} />
                <AdminLayout exact path="/varaustenhallinta" component={BookingManagement} />
                <AdminLayout exact path="/varaus" component={Booking} />
                <AdminLayout path="/esitystenhallinta" component={ShowsManagement} />
                <AdminLayout path="/produktionhallinta" component={Produktio} />
                <AdminLayout path="/jasenrekisteri" component={Jasenrekisteri} />
                <AdminLayout path="/kayttajat" component={UserManagement} />
                <AdminLayout path="/uusijasen" component={Uusijasen} />
                <AdminLayout path="/ohjaustiedot" component={Ohjaustiedot} />
                <AdminLayout path="/palautteet" component={AdminFeedback} />
                <AdminLayout path="/ilmohallinta" component={EventManagement} />
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
