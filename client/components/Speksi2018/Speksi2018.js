import React, { Component } from 'react'

import UusiVaraus from './UusiVaraus';
import Esitysvalinta from './Esitysvalinta';

import ajax from './../Utils/Ajax';
import utils from './../Utils/Utils';
import Messages from './../Utils/Messages';

import styles from './Speksi2018.css';

class Speksi2018 extends Component {

  constructor(props) {
    super(props);

    this.state = {
        esitykset: [],
        valittuEsitys: {},
        fname: '',
        sname: '',
        email: '',
        pnumber: '',
        ncount: 0,
        scount: 0,
        ocount: 0,
        nprice: '16',
        sprice: '14',
        oprice: '10',
        price: '0',
        lisatiedot: '',
        ilmottu: false,
        messages: [],
        warnings: [],
        errors: [],
    }

    // this.valitseEsitys = this.valitseEsitys.bind(this);
    this.toggleUusiVarausModal = this.toggleUusiVarausModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.countPrice = this.countPrice.bind(this);
  }

  componentDidMount() {
    $(window).scrollTop(0);

    ajax.sendGet('/getShowsWithCounts')
        .then(_data => {
            this.setState({esitykset: _data.data})
        })
        .catch(err => {
            console.log(err);
        })

    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('youtubeplayer', {
          width: '390',
          height:'640',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
          }
      });
    }
  }
  toggleUusiVarausModal(esitys){
    this.setState({ valittuEsitys: esitys}, () => {
      $('#uusiVarausModal').modal('show')
    })
  }
  handleChange(e) {
    let value = e.target.value;

    if(e.target.name == "ncount" || e.target.name == "scount" || e.target.name == "ocount") {
        this.setState({ [e.target.name]: value }, () => {
            this.countPrice();
        })
    } 
    else if(e.target.name == "esitys") {
      this.state.esitykset.map((esitys) => {
        if (e.target.value === esitys._id){
          this.valitseEsitys(esitys);
        }
      })
    }
    else {
        this.setState({[e.target.name]: value});
    }
  }

  countPrice() {
      let sum = this.state.ncount * this.state.nprice + this.state.scount * this.state.sprice + this.state.ocount * this.state.oprice
      this.setState({ price: sum })
  }

  handleSubmit(e) {
      e.preventDefault();
      this.setState({ilmottu: true})
      let url = "/admin/varaus";
      ajax.sendPost(
          url,
          {
              fname: this.state.fname,
              sname: this.state.sname,
              email: this.state.email,
              pnumber: this.state.pnumber,
              scount: this.state.scount,
              ncount: this.state.ncount,
              ocount: this.state.ocount,
              oprice: this.state.oprice,
              paymentMethod: 0,
              paid: true,
              esitysId: this.state.valittuEsitys._id,
              additional: this.state.lisatiedot
          }).then(data => {
              if(data.success) {
                  this.addMessage(MESSAGE_SUCCESS, "Ilmoittautuminen onnistui!")
                  this.haeVaraukset(this.state.valittuEsitys);
                  this.haeEsitykset();

              } else {
                  this.setState({ilmottu: false})
                  this.addMessage(MESSAGE_WARNING, data.data);
              }
          }).catch(err => {
              console.log(err);
              this.setState({ilmottu: false})
              this.addMessage(MESSAGE_ERROR, "Virhe!", "Palvelimella tapahtui virhe. Yritä myöhemmin uudelleen tai ota yhteys webmastereihin.");
          })
  }

    //Add different kinds of error or warning messages
  addMessage(type, newHeader, newText) {
    this.setState({ 
      messages: [],
          warnings: [],
          errors: []
      })
      if (type === MESSAGE_WARNING) {
          let newWarnings = this.state.warnings;
          newWarnings.push({ header: newHeader, text: newText });
          this.setState({ warnings: newWarnings })
      } else if (type === MESSAGE_ERROR) {
          let newErrors = this.state.errors;
          newErrors.push({ header: newHeader, text: newText });
          this.setState({ erros: newErrors })
      } else if (type === MESSAGE_SUCCESS) {
          let newMessages = this.state.messages;
          newMessages.push({ header: newHeader, text: newText });
          this.setState({ messages: newMessages });
      }
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
            <img src="/assets/images/logo_lapinak_valk.png"/>
          </div>
        </div>
        <div className={"row align-items-top justify-content-center " + styles.content}> 
          <div className="col-12 col-md-10 col-lg-5 col-xl-5 flex-last">
            <h2 className={styles.textheader}>Ohjeet lipun ostamiseen</h2>
              <ol>
                <li>Valitse näytös ja klikkaa sitä</li>
                <li>Täytä henkilötietosi</li>
                <li>Siirry maksamaan ja valitse oma nettipankkisi</li>
                <li>Seuraa nettipankin ohjeita maksaaksesi</li>
                <li>Saat sähköpostiisi varausnumeron, jota näyttämällä pääset katsomaan HybridiSpeksiä 2018!</li>
              </ol>
              <p>Jos näytöksen perässä lukee "Tilaa", on näytöksessä vielä paikkoja jäljellä. 
              Jos tekstinä on "Lähes täynnä", paikkoja ei ole paljoa vapaana. Tekstin ollessa "Täynnä"
              näytös on loppuunmyyty.</p>
            <div className="videowrapper">
              <h2 className={styles.textheader}>Älä ammu ohi -teaser</h2> 
                <iframe id="youtubeplayer"
                    src="https://www.youtube.com/embed/6HXoDboQjbU?enablejsapi=1&rel=0"
                    width="100%" height="360"
                    frameBorder="0"
                    allowFullScreen="allowFullScreen"
                ></iframe>
            </div>
          </div>
          <div className={"col-12 col-md-10 col-lg-5 col-xl-5 justify-items-center " + styles.esitykset}>
            <h2 className={styles.textheader}>Esitykset Manilla-teatterilla:</h2>
            <Esitysvalinta 
                esitykset={this.state.esitykset} 
                toggleUusiVarausModal={this.toggleUusiVarausModal} />
          </div>
        </div>

        <UusiVaraus
            emptyFields={this.emptyFields}
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            fname={this.state.fname}
            sname={this.state.sname}
            email={this.state.email}
            pnumber={this.state.pnumber} 
            scount={this.state.scount}
            ncount={this.state.ncount}
            ocount={this.state.ocount}
            price={this.state.price}
            lisatiedot={this.state.lisatiedot}
            ilmottu={this.state.ilmottu}
            valittuEsitys={this.state.valittuEsitys}
            esitykset={this.state.esitykset}
            messages={<Messages messages={this.state.messages} warnings={this.state.warnings} errors={this.state.errors} />} />

      </div>
    )
  }
}

export default Speksi2018