/* eslint-disable no-unused-vars,react/no-unescaped-entities */


import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Container, Row } from 'react-bootstrap';
import Footer from '../pages/shared/Footer/Footer';
import Recipe from '../pages/Recipe/Recipe/Recipe';
import RecipeCard from '../pages/Recipe/RecipeCard/RecipeCard';
import FoodItems from '../pages/Home/FoodItems/FoodItems';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
               <Row>
                    <Recipe></Recipe>
               </Row>
               <Row>
               <h2 className='text-center text-primary fst-italic mb-4 mt-4'>Signature Item's Recipes</h2>
                  <RecipeCard></RecipeCard>
                    
               </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;