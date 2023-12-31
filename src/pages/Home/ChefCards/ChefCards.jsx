/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef,react/prop-types*/
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCards = () => {

  const [chefsData, setChefsData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetch('https://b7a10-chef-recipe-hunter-server-side-athaimahbub.vercel.app/chefBio')
      .then(res => res.json())
      .then(data => {
        setChefsData(data);
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Set loading state to false if there is an error
      });
  }, []);

  return (
    <Container>
      {loading ? ( 
          <div className="text-center">
          <h1>Loading...</h1>;
          <Spinner animation="border" variant="primary" />
        </div>
      
      ) : (
        <Row>
          {chefsData.map((chef) => (
            <Col md={4} key={chef.id} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chef.picture} alt={chef.chef_name} />
                <Card.Body>
                  <Card.Title className='text-center text-primary fst-italic'>{chef.chef_name}</Card.Title>
                  <Card.Text className='text-center text-secondary fst-italic'>
                    <strong>Years of Experience:</strong> {chef.years_of_experience}
                    <br />
                    <strong>Number of Recipes:</strong> {chef.num_recipes}
                    <br />
                    <strong>Likes:</strong> {chef.likes}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Link to={`/recipe/${chef.id}`}><Button variant="primary">View Recipes</Button></Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
  
    
};

export default ChefCards;