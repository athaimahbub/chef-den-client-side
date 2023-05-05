/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef,react/jsx-no-undef */

import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Table, Toast } from 'react-bootstrap';


const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/recipeData`)
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
        <Card.Title>{recipe.recipe_name}</Card.Title>
        <Card.Text>
          <strong>Ingredients:</strong>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <strong>Cooking Method:</strong>
          <p>{recipe.cooking_method}</p>
          <strong>Rating: {recipe.rating}</strong>
          <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.round(rating?.number || 0)} readOnly />
                    <span className='ms-2'> {rating?.number}</span>
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