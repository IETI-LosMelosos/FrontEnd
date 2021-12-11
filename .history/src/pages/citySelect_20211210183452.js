import React from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Cus


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
        <Select>
          <MenuItem value={10}>Bogota</MenuItem>
          <MenuItem value={20}>Cali</MenuItem>
          <MenuItem value={30}>Medellin</MenuItem>
          <MenuItem value={30}>Home</MenuItem>
        </Select>

        <h2>Desde que Ciudad Estas?</h2>
        <ul className='buttonList'>
            <ButtonCity name= 'Bogota' link= 'products'/>
            <ButtonCity name= 'Cali' link= 'products'/>
            <ButtonCity name= 'Medellin' link= 'products'/>
            <ButtonCity name= '' link= ''/>
        </ul>
      </Box>
    );
}