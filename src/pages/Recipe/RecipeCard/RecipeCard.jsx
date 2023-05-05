/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef,react/jsx-no-undef */

import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Table, Toast } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';


const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://b7a10-chef-recipe-hunter-server-side-athaimahbub.vercel.app/recipeData`)
         .then(res => res.json())
         .then(data => setRecipes(data))
         .catch(error => console.error(error))
  }, []);

  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(true);
    setShowToast(true);
  }
    return (
    <div>
         <Container>
         {recipes.map((recipe, index) => (
        <Card key={index} className="mb-4">
            <Card.Img className='img-fluid' variant="top" src={recipe.image} alt={recipe.recipe_name} />
          <Card.Body>
        <Card.Title className='text-center text-primary fst-italic fs-2'>{recipe.recipe_name}</Card.Title>
        <Card.Text className='fst-italic'>
          <strong className='text-secondary'>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <strong className='text-secondary'>Cooking Method:</strong>
          <p>{recipe.cooking_method}</p>
          <strong className='text-secondary'>Rating: {recipe.rating}</strong>
          <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating
                        placeholderRating={recipe.rating}
                         readOnly
                         emptySymbol={<FaRegStar></FaRegStar>}
                         placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                         fullSymbol={<FaStar></FaStar>}
                          />
                    <span className='ms-2'> {recipe.rating?.number}</span>
          </div>
        </Card.Text>
        {!isFavorite ? (
          <Button variant="primary" onClick={handleFavorite}>
            Favorite
          </Button>
        ) : (
          <Button variant="primary" disabled>
            Favorite
          </Button>
        )}
      </Card.Body>
      <Toast show={showToast} onClose={() => setShowToast(false)}>
        <Toast.Header>
          <strong className="me-auto">Favorite Recipe</strong>
        </Toast.Header>
        <Toast.Body>{`${recipe.recipe_name} is now your favorite recipe!`}</Toast.Body>
      </Toast>
        </Card>
    ))} 
         </Container>
    
 
    </div>
);
};

export default RecipeCard; 