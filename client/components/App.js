import React from 'react';

import globalStyles from './App.css';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import auth from './Utils/Auth';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';

import Rekry from './Rekry/Rekry';
import Speksit from './Speksit/Speksit';
import Esitykset from './Esitykset/Esitykset';

import AdminHeader from './Admin/Layout/AdminHeader';
import AdminFooter from './Admin/Layout/AdminFooter';
import Admin from './Admin/Admin';
import Produktio from './Admin/Produktio/Produktio';
import Jasenrekisteri from './Admin/Jasenrekisteri/Jasenrekisteri'
import Kayttajat from './Admin/Kayttajat/Kayttajat';

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
              {/*
              <PublicLayout exact path="/speksit" component={Speksit} />
              <PublicLayout exact path="/esitykset" component={Esitykset} /> */}
              </Switch>
            </div>

            <div id="admin-wrapper">
              <Switch>
              <LoginLayout path="/login" component={Login} />
              <AdminLayout path="/admin" component={Admin} />
              <AdminLayout path="/produktionhallinta" component={Produktio} /> 
              <AdminLayout path="/jasenrekisteri" component={Jasenrekisteri} />
              <AdminLayout path="/kayttajat" component={Kayttajat} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}