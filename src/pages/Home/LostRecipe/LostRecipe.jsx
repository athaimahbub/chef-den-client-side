/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef,react/prop-types*/
import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import lostBannerImage from '../../../assets/Patkheer-Munshiganj.jpg';
import image1 from '../../../assets/explore2.jpg';
import image2 from '../../../assets/explore3.jpg';
import image3 from '../../../assets/explore4.jpg';
const LostRecipe = () => {
    return (
        <Container>
        <Row className='d-flex align-items-center mb-5 mt-3'>
        <Col md={6}>
          <Row>
              <Col sm={12} md={6}>
                 <Image className='rounded mb-2' src={lostBannerImage} alt="Banner Image" fluid />
              </Col>
              <Col sm={12} md={6}>
              <Image className='rounded mb-2' src={image1} alt="Banner Image" fluid />
              </Col>
          </Row>
          <Row>
              <Col sm={12} md={6}>
              <Image className='rounded mb-2' src={image1} alt="Banner Image" fluid />
              </Col>
        <     Col sm={12} md={6}>
        <Image className='rounded mb-2' src={lostBannerImage} alt="Banner Image" fluid />
              </Col>
          </Row>
            
          </Col>


          <Col md={6} >
            <div className="text-start ms-4">
              <h2 className='fst-italic text-secondary'>Explore <span className='text-primary'>Our Lost Recipes</span></h2>
              <p className='fst-italic'>The lost recipes of Bengal are not mere culinary creations; they are a testament to the artistry, diversity, and richness of Bengali culture. They symbolize the connection between food, history, and identity. As we embark on a journey to revive these forgotten gems, let us celebrate and cherish the flavors of the past, savoring every bite as we unravel the stories they hold, one recipe at a time.  </p>
            </div>
            <div className='ms-4'>
              <Button variant="primary" >Explore Recipes</Button>
            </div>
            
                   
                
          </Col>
          
        </Row>
      </Container>
    );
};

export default LostRecipe;