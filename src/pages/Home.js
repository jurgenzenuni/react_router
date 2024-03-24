import '../App.css';

import NavBar from '../components/navbar';
import CustomNavbar from '../components/navbar2';
import Cardshome from '../components/cardshome';
// import 'react-bootstrap';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImage1 from '../components/Images/d9b96ff6149b3fb4ce4816e55ad77d93.jpg'
import carouselImage2 from '../components/Images/image4.jpg'
import carouselImage3 from '../components/Images/image9.jpg'
import Image7 from '../components/Images/image7.jpg';

function Home() {
    return (
      <div className="App">
        <div> 
          {/* <CustomNavbar/> */}
          <NavBar></NavBar>
        </div>
        <div className="carousel-container">
          <Carousel
            autoPlay
            interval={10000}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            className="carousel-full-width"
            transitionTime={550}
          >
            <div className="carousel-slide">
              <img src={carouselImage1} alt="Carousel Image 1" />
              <div className="carousel-content">
                <h1 className="carousel-title"> </h1>
                <p className="carousel-description">  </p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={carouselImage2} alt="Carousel Image 2" />
              <div className="carousel-content">
                <h1 className="carousel-title"></h1>
                <p className="carousel-description"></p>
              </div>
            </div>
            <div className="carousel-slide">
              <img src={carouselImage3} alt="Carousel Image 2" />
              <div className="carousel-content">
                <h1 className="carousel-title"></h1>
                <p className="carousel-description"></p>
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <Cardshome></Cardshome>
        </div>
        {/* <div className="container mt-4"> 
          <div className="row">
            
            <div className="col-6 col-md-3 mb-3">
              <div className="card" style={{ height: "300px"}}>
                <img src={imgyzy1} className="card-img-top" alt="Shoe 3" />
                <div className="card-body">
                  <h5 className="card-title">YEEZY BOOST 700</h5>
                  <p className="card-text">'WAVE RUNNER' 2023</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card" style={{ height: "300px"}}>
                <img src={imgyzy2} className="card-img-top" alt="Shoe 2" />
                <div className="card-body">
                  <h5 className="card-title">YEEZY BOOST 350 V2</h5>
                  <p className="card-text">'STATIC NON-REFLECTIVE' 2018</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card" style={{ height: "300px"}}>
                <img src={imgyzy3} className="card-img-top" alt="Shoe 3" />
                <div className="card-body">
                  <h5 className="card-title">YEEZY BOOST 350 V2</h5>
                  <p className="card-text">'ZEBRA' 2022/2023</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card" style={{ height: "300px" }}>
                <img src={imgyzy4} className="card-img-top" alt="Shoe 3" />
                <div className="card-body">
                  <h5 className="card-title">YEEZY BOOST 350 V2</h5>
                  <p className="card-text">'BONE'</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card" style={{ height: "300px" }}>
                <img src={imgyzy5} className="card-img-top" alt="Shoe 3" />
                <div className="card-body">
                  <h5 className="card-title">YEEZY BOOST 350 V2</h5>
                  <p className="card-text">'YECHEIL NON-REFLECTIVE'</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card" style={{ height: "300px" }}>
                <img src={imgyzy6} className="card-img-top" alt="Shoe 3" />
                <div className="card-body">
                  <h5 className="card-title">YEEZY 500</h5>
                  <p className="card-text">'UTILITY BLACK' 2018</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card" style={{ height: "300px" }}>
                <img src={imgyzy7} className="card-img-top" alt="Shoe 3" />
                <div className="card-body">
                  <h5 className="card-title">YEEZY BOOST 700</h5>
                  <p className="card-text">'SUN'</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="card" style={{ height: "300px" }}>
                <img src={imgyzy8} className="card-img-top" alt="Shoe 3" />
                <div className="card-body">
                  <h5 className="card-title">YEEZY BOOST 700 MNVN</h5>
                  <p className="card-text">'BONE'</p>
                </div>
              </div>
            </div>
            
          </div>
        </div> */}
  
  
        <div className="image-below">
          <img src={Image7} alt="Image 7" />
        </div>
        
      </div>
    );
  }
  
  export default Home;
  