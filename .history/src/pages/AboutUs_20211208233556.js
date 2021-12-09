import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import logo from "../images/logo.png";
import { Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled} from '@mui/material/styles';
import Button from "@mui/material/Button";

const CustomTypography = styled(Typography)({
  fontFamily: ['Comic Sans MS', 'Comic Sans', 'cursive'],
  fontSize: 20,
  fontWeight: 'bold',
  padding: 10
})

const CustomButtons = styled(Button)({
  margin: '5px',
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
      maxWidth: 300,
      padding: 5,
      align: 'center' 
    },
    tittle: {
      flexGrow: 1
    }
  })
);

const itemData = [
  {
    img: 'https://img.lalr.co/cms/2018/06/05103448/Campesino.jpg',
    title: 'Campesino',
  },
  {
    img: 'https://www.elcolombiano.com/binrepository/580x413/1c40/580d365/none/11101/MCPU/cerecoleccion-de-papa-37-jpg_38343063_20210817203521.jpg',
    title: 'campesino_papa',
  },
  {
    img: 'https://s3.amazonaws.com/elcomun/imagenes/1619806241.jpg',
    title: 'familiacampesino',
  },
  {
    img: 'https://ipsnoticias.net/wp-content/uploads/2018/09/recorte_presupuesto.jpg',
    title: 'cultivando',
  },
  {
    img: 'https://img.lalr.co/cms/2018/06/05103448/Campesino.jpg',
    title: 'Campesino',
  },
  {
    img: 'https://www.elcolombiano.com/binrepository/580x413/1c40/580d365/none/11101/MCPU/cerecoleccion-de-papa-37-jpg_38343063_20210817203521.jpg',
    title: 'campesino_papa',
  },
  {
    img: 'https://s3.amazonaws.com/elcomun/imagenes/1619806241.jpg',
    title: 'familiacampesino',
  },
  {
    img: 'https://ipsnoticias.net/wp-content/uploads/2018/09/recorte_presupuesto.jpg',
    title: 'cultivando',
  },
  {
    img: 'https://img.lalr.co/cms/2018/06/05103448/Campesino.jpg',
    title: 'Campesino',
  },
  {
    img: 'https://www.elcolombiano.com/binrepository/580x413/1c40/580d365/none/11101/MCPU/cerecoleccion-de-papa-37-jpg_38343063_20210817203521.jpg',
    title: 'campesino_papa',
  },
  {
    img: 'https://s3.amazonaws.com/elcomun/imagenes/1619806241.jpg',
    title: 'familiacampesino',
  },
  {
    img: 'https://ipsnoticias.net/wp-content/uploads/2018/09/recorte_presupuesto.jpg',
    title: 'cultivando',
  },
];
export function AboutUs() {

  const classes = useStyles();
  return (
    <Box fullwidht sx={{display: 'flex',flexGrow: 1,alignItems: 'center', justifyContent:'center' }}>
      <Box fullwidht>
        <img  src={logo} alt="E-SUMERCE"  className={classes.logo} />
      </Box>
      
      <CustomTypography sx={{border: 5,padding:2}}>Es un emprendimiento fundado por estudiantes de la Escuela Colombiana de Ingenieria Julio Garavito con la intencion de ayudar a conectar al campo colombiano con sus ciudadanos y de esta manera apoyar al campesino mas directamente.</CustomTypography>
      <CustomTypography sx={{fontSize:50}}>!!Unete a nosotros y apoya el campo colombiano¡¡</CustomTypography>
      <ImageList sx={{ border: 2,width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}  
      </ImageList>
      <CustomTypography sx={{fontSize:25}}> Comienza apoyar nuestro campo</CustomTypography>
      <CustomButtons variant="contained" size="medium" >HOME</CustomButtons>
    </Box>   
  );
}


