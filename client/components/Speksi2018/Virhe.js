import React, { Component } from 'react';

import ajax from './../Utils/Ajax';

import styles from './Vahvistus.css';

class Virhe extends Component {
  constructor(props){
    super(props);

    this.state = {
        errorMessage: ''
      }
   }

  componentDidMount() {
    $(window).scrollTop(0);
    ajax.sendGet('/ohjaustieto/maksuvirhe')
    .then(res => {
      res.data.map(ohjaustieto => {
        if(this.props.params.value === ohjaustieto.value) {
          this.setState({errorMessage: ohjaustieto.name})
        }
      })
      console.log(res.data);
    })
    
  }
  render() {
    return (
      <div className={"container-fluid " + styles.container}>
        <div className={"row align-items-start justify-content-center " + styles.header}>
          <div className="col-11 col-sm-11 col-xl-5">
            <h1>Pahus, jotain meni vikaan!</h1>
            <h5 className="">Maksutapahtuman rekisteröinnissä tapahtui virhe!</h5><br/>
            <div className="row">
              <div className="col-sm-12 col-12">
                <p>{this.state.errorMessage}</p>
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