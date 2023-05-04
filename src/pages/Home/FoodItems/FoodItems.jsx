/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef,react/prop-types*/

import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const FoodItems = () => {
    const [foodItems,setFoodItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foodItems')
         .then(res => res.json())
         .then(data => setFoodItems(data))
         .catch(error => console.error(error))
    },[])
    return (
        <Container>
      <Row>
        {foodItems.map((food, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img className='h-auto' variant="top" src={food.image} alt={food.title} />
              <Card.Body>
                <Card.Title className='text-center text-primary fst-italic'>{food.title}</Card.Title>
                <Card.Text className='text-start fst-italic'>{food.description}</Card.Text>
                <div className="d-flex justify-content-center">
                   <Button variant="primary" >See more Items</Button>
                </div>
              </Card.Body>
              
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    );
};

export default FoodItems;