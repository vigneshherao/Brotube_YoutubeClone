import React from 'react'
import Button from './Button';

let namesOfButton = ["All","Music","Mixes","Game Shows","Live","Train","All","Music","Mixes","Game Shows","Live","Train","Train","All","Music","Mixes","Game Shows","Live","Train"];

const ButtonList = () => {
  return (
    <div className='flex justify-evenly m-2'>
       {
        namesOfButton.map((btn,index)=> <Button key={index} name={btn}/>)
       }
    </div>
  )
}

export default ButtonList