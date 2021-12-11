import React from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { styled} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';

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

const CustomTypography = styled(Typography)({
  fontFamily: ['Comic Sans MS', 'Comic Sans', 'cursive'],
  fontSize: 20,
  fontWeight: 'bold',
  padding: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

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
    const [Ciudad, SetCiudad] = React.useState('');

    const handleChange = (event) => {
      SetCiudad(event.target.value);
    };

    return (
      <Box sx={{ minWidth: 120 }}>
      <CustomTypography sx={{fontSize:40}}>¿En que ciudad te encuentras?</CustomTypography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Ciudad}
          label="Ciudad"
          onChange={handleChange}
        >
          <MenuItem value="Bogota">Bogota</MenuItem>
          <MenuItem value="Medellin">Medellin</MenuItem>
          <MenuItem value="Cali">Cali</MenuItem>
        </Select>
      </FormControl>
    </Box>
    );
}