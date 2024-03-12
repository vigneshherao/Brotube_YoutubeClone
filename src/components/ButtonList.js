import React from 'react';
import Button from './Button';

const namesOfButton = [
  "All", "Music", "Mixes", "Game Shows", "Live", "Train", "India", "Cooking",
  "Swiggy", "Circus", "Water", "English", "Bangalore", "Sky", "Fashion", "Dj",
  "Podcast", "Gym", "Cars"
];

const ButtonList = () => {
  return (
    <div className='flex justify-evenly m-2'>
      {namesOfButton.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
