import React from 'react';
import Box from '@mui/material/Box';
import { CustomBtnAboutUs } from '../components/CustomBtnAboutUs';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function ButtonCity(props) {
  const { name , link } = props;

  const handleClick = (event) => {
    event.preventDefault();
    window.location.pathname= "/" + event.target.dataset.link
  };

  return (
  <li>
    <button className="ButtonCity" onClick={handleClick} data-link={link}>
      {name}
    </button>
  </li>
  );
}

export function CitySelect(props){

    return (
      <Box>
        <Sele
        <h2>Desde que Ciudad Estas?</h2>
        <ul className='buttonList'>
            <ButtonCity name= 'Bogota' link= 'products'/>
            <ButtonCity name= 'Cali' link= 'products'/>
            <ButtonCity name= 'Medellin' link= 'products'/>
            <ButtonCity name= 'Home' link= ''/>
        </ul>
      </Box>
    );
}