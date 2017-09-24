import React, { Component } from 'react'

import styles from './Home.css';

class Home extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className={"container-fluid " + styles.container}>
            	{/*}<div className={"row-fluid" + styles.content}>
                    
            		<div className={"col " + styles.slogan}>
                		<h1 className={styles.slogan}>HybridiSpeksin rekrytilaisuus<br/><span className={styles.date}>26.9.</span><br/>@ARC 1, Arcanum</h1>
                	</div>
                	<div className={"col"}>
                		<img className={styles.mainimage} src=""></img>
                	</div>
                    */}
                    <div id="carousel" className={"carousel slide " + styles.carousel} data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className={"d-block h-100 " + styles.carousel_image} src="assets/images/carousel/1_peikot.jpg" alt="First slide"/>
                          <div class="carousel-caption d-md-block">
                            <h3>Otsikko 1</h3>
                            <p>Alaotsikko 1</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img className={"d-block " + styles.carousel_image} src="assets/images/carousel/2_ilmari1.jpg" alt="Second slide"/>
                          <div class="carousel-caption d-none d-md-block text-left">
                            <h3>Otsikko 2</h3>
                            <p>Alaotsikko 2</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img className={"d-block w-100 " + styles.carousel_image} src="assets/images/carousel/3_ilmari2.jpg" alt="Third slide"/>
                          <div class="carousel-caption d-none d-md-block">
                            <h3>Otsikko 3</h3>
                            <p>Alaotsikko 3</p>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                </div>
        )
    }
}

export default Home