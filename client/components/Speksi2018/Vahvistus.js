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
        esitys: '',
        ticketCount:''
      }
   }

  componentDidMount() {
    $(window).scrollTop(0);

    // console.log(this.props)
    // console.log(this.props.match.params._id)
    let id = '5a957ec7c89f54161cb02d05'
    ajax.sendGet('/getOneVarausById/' + id)
        .then(_data => {
            this.setState({
              fname: _data.data.booking.fname,
              sname: _data.data.booking.sname,
              email: _data.data.booking.email,
              pnumber: _data.data.booking.pnumber,
              bookingId: _data.data.booking.bookingId,
              esitys: _data.data.esitys.name,
              ticketCount: _data.data.booking.ncount + _data.data.booking.scount + _data.data.booking.ocount
            })
        })
        .catch(err => {
            console.log(err);
        })
  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-start justify-content-center " + styles.header}>
          <div className="col-11 col-sm-11 col-xl-5">
            <h1>Lipun ostaminen onnistui!</h1>
            <h5 className="">Tervetuloa katsomaan HybridiSpeksiä 2018!</h5><br/>
            <div className="row">
              <div className="col-sm-12 col-12">
                <h4>Varauksesi tiedot:</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Esitys:</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.esitys}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Nimi:</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.fname} {this.state.sname}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Puhelin:</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.pnumber}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Sähköposti:</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.email}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Lippujen määrä:</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.ticketCount} kpl</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-4">
                <p><i>Varausnumero:</i></p>
              </div>
              <div className="col-sm-6 col-8">
                <p>{this.state.bookingId}</p>
              </div>
            </div>
            <br/>
          </div>
          <div className="col-9 col-sm-8 col-md-6 col-lg-6 col-xl-4">
            <img src="/assets/images/logo_lapinak_valk.png"/>
          </div>

        </div>
        <div className={"row justify-content-center " + styles.content}>
          <div className={"col-sm-8 col-12"}>
            <h2>Ohjeita jatkoon</h2>
            <ol>
              <li>Tarkista varauksesi tiedot.</li>
              <li>Sait sähköpostiisi varausnumeron, jota näyttämällä pääset HybridiSpeksi 2018 -näytökseen.</li>
              <li>Jos sinulla on kysyttävää tai tiedoissasi oli virhe, ota yhteyttä lipunmyynti@hybridispeksi.fi.</li>
              <li>Nähdään teatterilla!</li>
            </ol>
              
          </div>
        </div>
      </div>
    )
  }
}

export default Vahvistus