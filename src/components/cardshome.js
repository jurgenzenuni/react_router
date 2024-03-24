import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import imgyzy1 from './Images/yzy1.png'
import imgyzy2 from './Images/yzy2.PNG'
import imgyzy3 from './Images/yzy3.png'
import imgyzy4 from './Images/yzy4.png'
import imgyzy5 from './Images/yzy5.png'
import imgyzy6 from './Images/yzy6.png'
import imgyzy7 from './Images/yzy7.png'
import imgyzy8 from './Images/yzy8.png'

function Cardshome() {
  return (
    <div className="container mt-4"> {/* Add Bootstrap container */}
        <div className="row">
          {/* Shoe cards */}
          <div className="col-6 col-md-3 mb-3">
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card" style={{ height: "300px"}}>
              <img src={imgyzy1} className="card-img-top" alt="Shoe 3" />
              <div className="card-body">
                <h5 className="card-title">YEEZY BOOST 700</h5>
                <p className="card-text">'WAVE RUNNER' 2023</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-6 col-md-3 mb-3">
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}> 
          <div className="card" style={{ height: "300px"}}>
              <img src={imgyzy2} className="card-img-top" alt="Shoe 2" />
              <div className="card-body">
                <h5 className="card-title">YEEZY BOOST 350 V2</h5>
                <p className="card-text">'STATIC NON-REFLECTIVE' 2018</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-6 col-md-3 mb-3">
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>
          <div className="card" style={{ height: "300px"}}>
              <img src={imgyzy3} className="card-img-top" alt="Shoe 3" />
              <div className="card-body">
                <h5 className="card-title">YEEZY BOOST 350 V2</h5>
                <p className="card-text">'ZEBRA' 2022/2023</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-6 col-md-3 mb-3">
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>
          <div className="card" style={{ height: "300px" }}>
              <img src={imgyzy4} className="card-img-top" alt="Shoe 3" />
              <div className="card-body">
                <h5 className="card-title">YEEZY BOOST 350 V2</h5>
                <p className="card-text">'BONE'</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-6 col-md-3 mb-3">
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>
          <div className="card" style={{ height: "300px" }}>
              <img src={imgyzy5} className="card-img-top" alt="Shoe 3" />
              <div className="card-body">
                <h5 className="card-title">YEEZY BOOST 350 V2</h5>
                <p className="card-text">'YECHEIL NON-REFLECTIVE'</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-6 col-md-3 mb-3">
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>
          <div className="card" style={{ height: "300px" }}>
              <img src={imgyzy6} className="card-img-top" alt="Shoe 3" />
              <div className="card-body">
                <h5 className="card-title">YEEZY 500</h5>
                <p className="card-text">'UTILITY BLACK' 2018</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-6 col-md-3 mb-3">
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>
          <div className="card" style={{ height: "300px" }}>
              <img src={imgyzy7} className="card-img-top" alt="Shoe 3" />
              <div className="card-body">
                <h5 className="card-title">YEEZY BOOST 700</h5>
                <p className="card-text">'SUN'</p>
              </div>
            </div>
          </Link>
          </div>
          <div className="col-6 col-md-3 mb-3">
          <Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>
          <div className="card" style={{ height: "300px" }}>
              <img src={imgyzy8} className="card-img-top" alt="Shoe 3" />
              <div className="card-body">
                <h5 className="card-title">YEEZY BOOST 700 MNVN</h5>
                <p className="card-text">'BONE'</p>
              </div>
            </div>
          </Link>
          </div>
          
        </div>
      </div>
  );
}

export default Cardshome;
