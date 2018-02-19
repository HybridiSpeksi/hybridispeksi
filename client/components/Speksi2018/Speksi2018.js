import React, { Component } from 'react'

import styles from './Speksi2018.css';

class Speksi2018 extends Component {

  componentDidMount() {
    $(window).scrollTop(0);

    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('youtubeplayer', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
      });
    }
  }
  componentDidUpdate(){
  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-top justify-content-center " + styles.header}>
          <div className="col-md-6">
            <h2 className="">Speksi 2018</h2>
            <p>Villin lännen kuumimmalla aavikolla on pieni kylä keskellä preeriaa. 
            Tuomari Martin pitää yllä järjestystä lakikirjalla ja hirttosilmukalla, 
            samalla ryysyistä rikkauksiin kohonnut Alexandra hallitsee kyläläisten kukkaroita ja himoja. 
            Kaikkien rakastama pappi, Isä Henry, tekee parhaansa pitääkseen harmonian näiden kahden ja asukkaiden välillä. 
            Tasapaino kuitenkin järkkyy, kun sen keskelle ilmestyy raakalaismaisen rikollisliigan johtajatar suojaa etsien.</p>
            <p>Älä Ammu Ohi<br/>
            HybridiSpeksi 2018<br/>
            Ensi-ilta 27.3.<br/>
            @Manilla</p>
          </div>
          <div className="col-12 col-sm-9 col-lg-6 col-xl-4">
            <img src="/assets/images/merkki2.png"/>
          </div>
        </div>

        <div className={"row align-items-top justify-content-center " + styles.youtubeplayerheader}>
          <h2 className={styles.youtubeplayerheader}>Älä ammu ohi -teaser</h2>
        </div>
        <div className={"row align-items-top justify-content-center " + styles.youtubeplayer}>   
            <iframe id="youtubeplayer"
                    width="640" height="360"
                    src="https://www.youtube.com/embed/6HXoDboQjbU?enablejsapi=1&rel=0"
                    frameBorder="0"
                    allowFullScreen="allowFullScreen"
                    title="asdasd"
            ></iframe>
          <div className={"col-12 col-md-6 col-lg-5 col-xl-4 justify-items-center " + styles.esitykset}>
            <h1>Esitykset Manilla-teatterilla:</h1>
            <div className="row">
              <div className="col-6 col-xl-5">
              <p>ti 27.3. klo 19</p>
              </div>
              <div className="col-6 col-xl-5">
              <p>la 31.3. klo 19</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-xl-5">
              <p>ke 28.3. klo 19</p>
              </div>
              <div className="col-6 col-xl-5">
              <p>ti 3.4. klo 19</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-xl-5">
              <p>to 29.3. klo 19</p>
              </div>
              <div className="col-6 col-xl-5">
              <p>ma 9.4. klo 19</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-xl-5">
              <p>la 31.3. klo 14</p>
              </div>
              <div className="col-6 col-xl-5">
              <p>ti 10.4. klo 19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Speksi2018