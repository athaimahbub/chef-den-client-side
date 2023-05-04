/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Container, Row } from 'react-bootstrap';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import Banner from '../pages/Home/Banner/Banner';
import FoodItems from '../pages/Home/FoodItems/FoodItems';
import ChefCards from '../pages/Home/ChefCards/ChefCards';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
             <Container>
                <Row>
                    <Banner></Banner>
                </Row>
                <Row>
                  <h2 className='text-center text-primary fst-italic mb-4 mt-4'>Chef card section</h2>
                    
                    <ChefCards></ChefCards>
                </Row>
                <Row>
                    <h2 className='text-center text-primary fst-italic mb-4 mt-5'>Popular Food Items</h2>
                    <FoodItems></FoodItems>
                </Row>
                <Row>
                    <h1>Discover Our Lost Recipes</h1>
                </Row>
             </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;