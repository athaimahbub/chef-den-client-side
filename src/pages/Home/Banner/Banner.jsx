/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef,react/prop-types*/
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import bannerImage from '../../../assets/banner1.png';
const Banner = () => {
    return (
       
      <Container>
        <Row className='d-flex align-items-center'>
          <Col md={6}>
            <div className="text-side">
              <h2 className='fst-italic text-secondary'>Welcome to <span className='text-primary'>Bangalee CHEF's DEN</span></h2>
              <p className='fst-italic'>which is a culinary paradise where the flavors of Bengal come to life! As you step into the Bangalee Chef's Den, you are greeted by the tantalizing aroma of spices, the sizzle of hot pans, and the symphony of flavors being crafted by the talented chefs. The ambience is warm and inviting, with rustic décor that pays homage to the vibrant culture and traditions of Bengal.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className=" py-4">
              <Image className='rounded' src={bannerImage} alt="Banner Image" fluid />
            </div>
          </Col>
        </Row>
      </Container>
    
    );
};

export default Banner;