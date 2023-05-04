/* eslint-disable no-unused-vars,react/no-unescaped-entities */


import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Container, Row } from 'react-bootstrap';
import Footer from '../pages/shared/Footer/Footer';
import Recipe from '../pages/Recipe/Recipe/Recipe';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
               <Row>
                    <h1>Banner section</h1>
               </Row>
               <Row>
                    <h1>Recipe card section</h1>
                    <Recipe></Recipe>
               </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;