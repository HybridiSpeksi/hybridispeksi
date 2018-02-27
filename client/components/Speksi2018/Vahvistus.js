import React, { Component } from 'react';

import ajax from './../Utils/Ajax';

import styles from './Vahvistus.css';

class Vahvistus extends Component {
  constructor(props){
    super(props);

    this.state = {
        _id: '',
        fname: '',
        sname: '',
        email: '',
        pnumber: '',
        bookingId:'',
        esitys:'',
        ticketCount:''
      }
   }

  componentDidMount() {
    $(window).scrollTop(0);

    console.log(this.props)
    console.log(this.props.match.params._id)
    // let id = this.props.match.params._id;
    // ajax.sendGet('/varaukset/' + id)
    //     .then(_data => {
    //         this.setState({
    //           fname: _data.fname,
    //           sname: _data.sname,
    //           email: _data.email,
    //           pnumber: _data.pnumber,
    //           bookingId: _data.bookingId,
    //           esitys: '',
    //           ticketCount: _data.ncount + _data.scount + _data.ocount
    //         })

    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-start justify-content-center " + styles.header}>
          <div className="col-sm-4 col-11">
            <h2 className="">Tervetuloa katsomaan HybridiSpeksiä 2018!</h2><br/>
            <div className="row">
              <div className="col-sm-12 col-12">
                <h4>Varauksesi tiedot:</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Esitys</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.esitys.name}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Nimi</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.fname} {this.state.sname}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Puhelin</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.pnumber}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Sähköposti</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.email}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Lippujen määrä</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.ticketCount}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Varausnumero</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.bookingId}</p>
              </div>
            </div>
            <br/>
          </div>
             <div className="col-12 col-sm-6 col-lg-6 col-xl-3">
            <img src="/assets/images/logo_lapinak_valk.png"/>
          </div>

        </div>
        <div className={"row justify-content-center " + styles.content}>
          <div className={"col-sm-8 col-11 "}>
            <h2>Ohjeita jatkoon</h2>
            <ol>
              <li>Tarkista varauksesi tiedot.</li>
              <li>Sait sähköpostiisi varausnumeron, jota näyttämällä pääset HybridiSpeksi 2018 -näytökseen.</li>
              <li>Jos sinulla on kysyttävää tai tiedoissasi oli virhe, ota yhteyttä lipunmyynti@hybridispeksi.fi.</li>
            </ol>
              
          </div>
        </div>
      </div>
    )
  }
}

export default Vahvistus