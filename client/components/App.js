import React from 'react';

import globalStyles from './App.css';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import auth from './Utils/Auth';

// Public
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import Rekry from './Rekry/Rekry';
import Speksit from './Speksit/Speksit';
import Esitykset from './Esitykset/Esitykset';
import Galleria from './Galleria/Galleria';
import Yhdistys from './Yhdistys/Yhdistys';
import Sitsit from './Sitsit/Sitsit';

// Admin
import AdminHeader from './Admin/Layout/AdminHeader';
import AdminFooter from './Admin/Layout/AdminFooter';
import Admin from './Admin/Admin';
import Produktio from './Admin/Produktio/Produktio';
import Jasenrekisteri from './Admin/Jasenrekisteri/Jasenrekisteri';
import Uusijasen from './Admin/Jasenrekisteri/Uusijasen';
import Kayttajat from './Admin/Kayttajat/Kayttajat';
import Ohjaustiedot from './Admin/Ohjaustiedot/Ohjaustiedot';
import Tapahtumat from './Admin/Tapahtumat/Tapahtumat';

import Login from './Admin/Auth/Login';



export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const PublicLayout = ({ component: Component, ...rest }) => {
      return (
        <Route {...rest} render={props => (
          <div>
            <Header />
            <Component globalStyles={globalStyles} />
            <Footer />
          </div>
        )} />
      )
    };

    const LoginLayout = ({ component: Component, ...rest }) => {
      return (
        <Route {...rest} render={props => (
          <div>
            <Component globalStyles={globalStyles} />
          </div>
        )} />
      )
    };

    const AdminLayout = ({ component: Component, ...rest }) => {
      auth.checkToken();
      return (
        <Route {...rest} render={props => (
          <div>
            <AdminHeader />
            <Component globalStyles={globalStyles} />
            <AdminFooter />
          </div>
        )} />
      )
    };

    return (
      <div id="main-wrapper">

        <BrowserRouter>
          <div>
            <div id="public-wrapper">
              <Switch >
              <PublicLayout exact path="/" component={Home} />
              <PublicLayout exact path="/rekry" component={Rekry} />
              <PublicLayout exact path="/speksit" component={Speksit} />
              {/*<PublicLayout exact path="/esitykset" component={Esitykset} /> */}
              {/*<PublicLayout exact path="/galleria" component={Galleria} />*/}
              {/* <PublicLayout exact path="/yhdistys" component={Yhdistys} /> */}
              <PublicLayout exact path="/esitykset" component={Esitykset} />
              <PublicLayout exact path="/sitsit" component={Sitsit} />
              </Switch>
            </div>

            <div id="admin-wrapper">
              <Switch>
              <LoginLayout path="/login" component={Login} />
              <AdminLayout path="/admin" component={Admin} />
              <AdminLayout path="/produktionhallinta" component={Produktio} /> 
              <AdminLayout path="/jasenrekisteri" component={Jasenrekisteri} />
              <AdminLayout path="/kayttajat" component={Kayttajat} />
              <AdminLayout path="/uusijasen" component={Uusijasen} />
              <AdminLayout path="/ohjaustiedot" component={Ohjaustiedot} />
              <AdminLayout path="/tapahtumat" component={Tapahtumat} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}