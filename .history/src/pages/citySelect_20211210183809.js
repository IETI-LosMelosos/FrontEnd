import React from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { styled} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";


const CustomButtons = styled(Button)({
  margin: '2px',
  fontSize: 12,
  border: '1px solid',
  backgroundColor: '#27b32e',
  borderColor: '#27b32e',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#33d43b',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#42ff4c',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      flexGrow: 1,
      maxWidth: 190,
      padding: 5   
    },
    tittle: {
      flexGrow: 1
    }
  })
);

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