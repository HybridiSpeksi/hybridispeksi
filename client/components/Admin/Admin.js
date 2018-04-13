import React, { Component } from 'react';
import styles from './Admin.css';

class Admin extends Component {
  componentWillMount() {
    // auth.checkToken();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <h1>
          HybridiSpeksi <small>tuotantopaneeli</small>
        </h1>

        <div className="row">
          <div className="col">
            <iframe
              className={styles.iframe}
              src="https://calendar.google.com/calendar/embed?src=d3jpe3k88npq9f97ba26fi9u5c%40group.calendar.google.com&ctz=Europe/Helsinki"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
