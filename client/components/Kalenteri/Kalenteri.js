import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Kalenteri.css';

class Kalenteri extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div className={'row justify-content-center ' + styles.content_kalenteri}>
          <div className={'col-sm-12 col-xl-11 ' + styles.slogan}>
            <div className={'d-md-block ' + styles.slogan}>
              <div className="row justify-content-lg-center justify-content-center align-items-center">
                <div className={'col-12 col-sm-10 col-md-9 ' + styles.rekry}><h2 className={styles.header}>Kalenteri</h2>
                  <iframe className={styles.iframe}
                    src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;hl=fi&amp;bgcolor=%23FFFFFF&amp;src=d3jpe3k88npq9f97ba26fi9u5c%40group.calendar.google.com&amp;color=%230F4B38&amp;ctz=Europe%2FHelsinki" 
                    frameborder="0" 
                    scrolling="no"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Kalenteri;
