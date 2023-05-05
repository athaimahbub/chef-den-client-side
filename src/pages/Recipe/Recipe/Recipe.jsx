/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef,react/prop-types*/

import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';


const Recipe = () => {
  const { id } = useParams();

  const [recipeData, setRecipeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/chefBio/${id}`);
        if (response.ok) {
          const data = await response.json();
          setRecipeData(data);
        } else {
          throw new Error('Failed to fetch recipe data');
        }
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
    return (
        <div>
            {/* <h2>Recipe Section.....{id}</h2> */}
            <Container>
             <Row className='d-flex align-items-center'>
          
                <Col md={6}>
                   <div className=" py-4">
                      <Image className='rounded' src={recipeData.picture} alt="Banner Image" fluid />
                   </div>
                </Col>

                <Col md={6}>
                  <h2>{recipeData.chef_name}</h2>
                  <p>{recipeData.bio}</p>
                  <p>Likes: {recipeData.likes}</p>
                  <p>Number of Recipes: {recipeData.num_recipes}</p>
                  <p>Years of Experience: {recipeData.years_of_experience}</p>
                </Col>
        </Row>
      </Container>
        </div>
    );
};

export default Recipe;