import React, { useEffect, useState } from 'react';
import classes from './Availablemeals.module.css';
import MealForm from './MealForm';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = (props) => {

  return (
    <div className={classes.container}>
        {DUMMY_MEALS.map((meals) => 
            {
                return (
                  <>
                  <div className={classes['new-meal-bar']}>
                    <ul>
                        <li className={classes.name}>{meals.name}</li>
                        <li className={classes.desc}>{meals.description}</li>
                        <li className={classes.price}>$ {meals.price}</li>
                    </ul>
                    <div className={classes['meal-form']}>
                        <MealForm mealItem={meals}/>
                    </div>
                  </div>
                  <hr className={classes.hr}/>
                  </>
                  )
            }            
        )}
    </div>
  )
}

export default AvailableMeals