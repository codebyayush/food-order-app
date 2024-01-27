import React from 'react';
import classes from './Availablemeals.module.css';

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

const AvailableMeals = () => {

  return (
    <div className={classes.container}>
        {DUMMY_MEALS.map((meals) => 
            {
                return (
                    <ul>
                        <li className={classes.name}>{meals.name}</li>
                        <li className={classes.desc}>{meals.description}</li>
                        <li className={classes.price}>{meals.price}</li>
                        <hr />
                    </ul>
                )
            }            
        )}
    </div>
  )
}

export default AvailableMeals