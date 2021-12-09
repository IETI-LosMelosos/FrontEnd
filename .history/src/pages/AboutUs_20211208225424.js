import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import logo from "../images/logo.png";
import { Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      flexGrow: 1,
      maxWidth: 200,
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
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
export function AboutUs() {

  const classes = useStyles();
  return (
    <Box fullwidht sx={{padding: 1, margin: 1, alignItems: 'center'}}>
      <img  src={logo} alt="E-SUMERCE"  className={classes.logo}/>
      <Typography>Es un emprendimiento fundado por estudiantes de la Escuela Colombiana de Ingenieria Julio Garavito con la intencion de ayudar a conectar al campo colombiano con sus ciudadanos y de esta manera apoyar al campesino mas directamente.</Typography>
      <Typography>Unete a nosotros y apoya el campo colombiano</Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
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


    </Box>   
  );
}


