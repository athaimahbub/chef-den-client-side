/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Container, Row } from 'react-bootstrap';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import Banner from '../pages/Home/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
             <Container>
                <Row>
                    <Banner></Banner>
                </Row>
                <Row>
                    <h1>Chef card section</h1>
                </Row>
                <Row>
                    <h1>Popular Food Items</h1>
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