import React, { Component } from 'react'

import UusiVaraus from './UusiVaraus';
import Esitysvalinta from './Esitysvalinta';

import ajax from './../Utils/Ajax';
import utils from './../Utils/Utils';
import Messages from './../Utils/Messages';

import styles from './Lipunmyynti.css';

class Lipunmyynti extends Component {

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
            price: '',
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
    }

  toggleUusiVarausModal(){
    $('#uusiVarausModal').modal('show')
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
    else if(e.target.name == "searchword"){
    this.setState({[e.target.name]: value.toLowerCase()}, () => {
      this.filterVaraukset();
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
          <div className="col-10 col-sm-5 col-lg-6 col-xl-4">
            <h2 className="">Lipunmyynti</h2>
            <h4>Hinnat</h4>
            <p>Normaali lippu: 16 €<br/>
            Opiskelijalippu: 14 €</p>

            <p>Älä Ammu Ohi<br/>
            HybridiSpeksi 2018<br/>
            Ensi-ilta 27.3.<br/>
            @Manilla</p>
          </div>
          <div className="col-10 col-sm-5 col-lg-6 col-xl-4">
            <img src="/assets/images/logo_lapinak_valk.png"/>
          </div>
        </div>

        <div className={"row align-items-top justify-content-center " + styles.content}> 
          <div className="col-12 col-md-10 col-lg-6 col-xl-5">
            <h4>Ohjeet lipun ostamiseen</h4>
              <ol>
                <li>Valitse näytös</li>
                <li>Täytä henkilötietosi</li>
                <li>Siirry maksamaan ja valitse oma nettipankkisi</li>
                <li>Seuraa nettipankin ohjeita maksaaksesi</li>
                <li>Saat sähköpostiisi varausnumeron, jota näyttämällä pääset katsomaan HybridiSpeksiä 2018!</li>
              </ol>
            </div>
          <div className={"col-12 col-md-10 col-lg-6 col-xl-5 justify-items-center " + styles.esitykset}>
            <h1>Esitykset Manilla-teatterilla:</h1>
            <Esitysvalinta 
                esitykset={this.state.esitykset} 
                toggleUusiVarausModal={this.toggleUusiVarausModal} />
                
{/*            <div className="row">
              <div className="col-6 col-xl-5">
              <button type="button" className="btn btn-secondary" onClick={this.toggleUusiVarausModal}>ti 27.3. klo 19</button>
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
            */}
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

export default Lipunmyynti