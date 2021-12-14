import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

import "./homeSecritery.css";




function mapStateToProps(state) {
  return { ...state };
}






export default withRouter(connect(mapStateToProps)(function HomeSecritery(props) {

  return <>
    {/* <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="First slide"
        // height='200px'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    <div class="aaaa">
      <button class="circle" id="circle1" >הוספת רכז חדש</button>
      <button class="circle" id="circle2" >הצגת יומן פעילות</button>
      <button class="circle" id="circle3">הוספת והסרת פעילות</button>

    </div>
  </>

}))
