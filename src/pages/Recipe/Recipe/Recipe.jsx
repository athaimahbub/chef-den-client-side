/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef,react/prop-types*/

import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap';
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
        const response = await fetch(`https://b7a10-chef-recipe-hunter-server-side-athaimahbub.vercel.app/chefBio/${id}`);
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
    return(
      <div className="text-center">
        <h1>Loading...</h1>;
        <Spinner animation="border" variant="primary" />
      </div>
    ); 
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
    return (
        <div>
            {/* <h2>Recipe Section.....{id}</h2> */}
            <Container>
             <Row className='d-flex align-items-center mt-3'>
          
                <Col md={6}>
                   <div className=" py-4">
                      <Image className='rounded' src={recipeData.picture} alt="Banner Image" fluid />
                   </div>
                </Col>

                <Col md={6}>
                  <h2 className='fst-italic text-primary'>{recipeData.chef_name}</h2>
                  <p className='fst-italic text-secondary'>{recipeData.bio}</p>
                  <p className='fst-italic text-secondary'><strong>Likes:</strong> {recipeData.likes}</p>
                  <p className='fst-italic text-secondary'><strong>Number of Recipes:</strong> {recipeData.num_recipes}</p>
                  <p className='fst-italic text-secondary'><strong>Years of Experience:</strong> {recipeData.years_of_experience}</p>
                </Col>
        </Row>
      </Container>
        </div>
    );
};

export default Recipe;