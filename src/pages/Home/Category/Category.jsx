/* eslint-disable no-unused-vars,react/no-unescaped-entities,no-undef, react/jsx-no-undef,react/prop-types*/
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCards from '../ChefCards/ChefCards';
import Recipe from '../../Recipe/Recipe/Recipe';

const Category = () => {
    const {id} = useParams();
    const categoryChef = useLoaderData();
    return (
        <div>
            <h2>sometheg{id}</h2>
            {
                categoryChef.map(chef => <Recipe
                    key={chef.id}
                    chef={chef}
                ></Recipe>)
            }
        </div>
    );
};

export default Category;