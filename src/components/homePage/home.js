import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
// import im1 from '../Pictures/background1.jpg';
// import im2 from '../Pictures/מראות_17.jpg';
// import im3 from '../Pictures/ComputersRooms.jpg';
import "./home.css";


function mapStateToProps(state) {
  return { ...state };
}


export default withRouter(connect(mapStateToProps)(function Home(props) {

  function login() {
    // debugger;
    const { history } = props;
    history.push('./login');
  }
  return <>
    <h1>
      מינהל קהילתי אשכולות
    </h1>
    {/* <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel> */}
  </>

}))