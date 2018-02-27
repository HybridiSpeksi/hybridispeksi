import React, { Component } from 'react';

import ajax from './../Utils/Ajax';

import styles from './Vahvistus.css';

class Virhe extends Component {
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
          <div className="col-11 col-sm-11 col-xl-5">
            <h1>Pahus, jotain meni vikaan!</h1>
            <h5 className="">Lipun ostamisessa tapahtui jokin virhe!</h5><br/>
            <div className="row">
              <div className="col-sm-12 col-12">
                <p>Varauksen maksamisessa tapahtui virhe, ja maksutapahtumaa ei hyväksytty. Yritä ostaa lippuja uudelleen 
                tai ota yhteyttä osoitteeseen lipunmyynti@hybridispeksi.fi.</p>
                <br/>
              </div>
            </div>
          </div>
          <div className="col-9 col-sm-8 col-md-6 col-lg-6 col-xl-4">
            <img src="/assets/images/logo_lapinak_valk.png"/>
          </div>

        </div>
        <div className={"row justify-content-center " + styles.content}>
          <div className={"col-sm-8 col-12"}>
              
          </div>
        </div>
      </div>
    )
  }
}

export default Virhe